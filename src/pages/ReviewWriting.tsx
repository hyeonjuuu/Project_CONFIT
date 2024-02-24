import { getSearchData } from '@/api/getSearchData'
import { useUploadImage } from '@/api/uploadReviewData'
import SectionTitle from '@/components/SectionTitle'
import Header from '@/layout/Header'
import { useSearchStore } from '@/store/useSearchStore'
import { useUserImageUrlStore } from '@/store/useUserImageUrlStore'
import { useUserSessionStore } from '@/store/useUserSessionStore'
import { supabase } from '@/supabase/supabase'
import { debounce } from '@/utils/debounce'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import StarRating from '@/components/reviewPage/StarRating'
import { useStarRatingStore } from '@/store/useStarRatingStore'
import XIcon from '/public/XIcon.svg'

interface SelectButtonProps {
  active: boolean
  onClick: () => void
}

function ReviewWriting() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [writingContents, setWritingContents] = useState<SearchDataItems>()
  const { searchResult, setSearchResult } = useSearchStore()
  const { uploadedFileUrl, setUploadedFileUrl } = useUserImageUrlStore()
  const { starRating, setStarRating } = useStarRatingStore()
  const [imageSrc, setImageSrc]: any = useState([])
  const { userSession, setUserSession } = useUserSessionStore()
  const [activeUserImage, setActiveUserImage] = useState('영화 포스터')
  const [uploadImage, setUploadImage]: any = useState([])
  const [textContents, setTextContents] = useState('')
  const searchInput = useRef<HTMLInputElement>(null)
  const searchList = useRef<HTMLUListElement>(null)
  const navigate = useNavigate()
  const goToReview = () => {
    navigate('/review')
  }

  useEffect(() => {
    const Search = async () => {
      const data = await getSearchData(searchKeyword)

      setSearchResult(data.results)
    }
    const SignSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      try {
        if (data && data.session) {
          setUserSession(data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    SignSession()

    Search()
  }, [searchKeyword])

  const keywordSearch = debounce((value: string) => {
    setSearchKeyword(value)
  }, 1000)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value
    if (searchList.current && targetValue) {
      searchList.current.style.visibility = 'visible'
    } else if (searchList.current !== null) {
      searchList.current.style.visibility = 'hidden'
    }
    keywordSearch(targetValue)
  }

  const handleSelectContents = (e: React.MouseEvent) => {
    const targetTitle = e.currentTarget.querySelector('span')?.textContent

    const searchEqualTitleIndex = searchResult?.find(
      item => (item.title || item.name) === targetTitle
    )
    setWritingContents(searchEqualTitleIndex)
    if (targetTitle && searchInput.current) {
      setSearchKeyword(targetTitle)
      searchInput.current.value = targetTitle
    }
    if (searchList.current) {
      searchList.current.style.visibility = 'hidden'
    }
  }

  const handleSelectImage = (value: string) => {
    setActiveUserImage(value)
  }

  const handleTextContents = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const updatedText = e.target.value
      setTextContents(updatedText)
    },
    1200
  )

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const files = Array.from(e.target.files)
      setUploadImage((prevUploadImages: any) => [...prevUploadImages, ...files])

      const promises = files.map(file => {
        return new Promise<void>(resolve => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            setImageSrc((prevState: any) => [
              ...prevState,
              reader.result || null
            ])
            resolve()
          }
        })
      })

      Promise.all(promises).then(() => {
        console.log(imageSrc)
      })
    }
  }

  const handleDeleteImage = (e: React.MouseEvent, index: number) => {
    const targetImage = e.currentTarget.parentNode?.querySelector('img')
    const targetImageSrc = targetImage?.getAttribute('src')

    setUploadImage((prevUploadImages: any[]) =>
      prevUploadImages.filter((_, i) => i !== index)
    )

    if (targetImageSrc) {
      setImageSrc((prevImageSrc: any) =>
        prevImageSrc.filter((item: string) => item !== targetImageSrc)
      )
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (writingContents && uploadImage.length === 0) {
        const { data, error } = await supabase.from('reviews').insert([
          {
            user_email: userSession?.user.email,
            contents_data: writingContents,
            review_data: textContents,
            user_image: uploadedFileUrl || null,
            user_id: userSession?.user.id,
            star_rating: starRating
          }
        ])
        if (error) {
          alert('리뷰 등록에 실패했습니다')
          console.log(error)
        }
      } else {
        const imagePaths = await useUploadImage(uploadImage)
        const uploadImagePaths = imagePaths?.map(item => item?.data.publicUrl)
        // await setUploadedFileUrl(uploadImagePaths)
        const { data, error } = await supabase.from('reviews').insert([
          {
            user_email: userSession?.user.email,
            contents_data: writingContents,
            review_data: textContents,
            user_image: uploadImagePaths || null,
            user_id: userSession?.user.id
          }
        ])
        if (error) {
          alert('리뷰 등록에 실패했습니다')
          console.log(error)
        }
      }
      alert('리뷰 작성이 완료되었습니다.')
      goToReview()
    } catch (error) {
      console.error(error)
      alert('리뷰 등록에 실패했습니다')
    }
  }

  return (
    <WriteReviewWrapper>
      <TitleContainer>
        <SectionTitle
          textfirst="Review"
          textsecond="Writing"
          margin="0px"
          padding="60px 0 0 0"
        />
        <Header margin="60px 0 0 0" />
      </TitleContainer>
      <TitleLine />
      <FormContainer>
        <SearchForm action="">
          <SearchInput
            type="text"
            ref={searchInput}
            onChange={handleInput}
            placeholder="검색어를 입력하세요."
          />
          <SearchList ref={searchList}>
            {searchResult?.map((item, index) => (
              <SearchListItems key={index}>
                <SearchListItemSelect
                  type="button"
                  onClick={handleSelectContents}
                >
                  <SearchListPoster
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                  />
                  <span>{item.title || item.name}</span>
                </SearchListItemSelect>
              </SearchListItems>
            ))}
          </SearchList>
          <StarRatingContainer>
            <StarRatingText>별점</StarRatingText>
            <StarRating />
          </StarRatingContainer>
          <div>
            <ButtonContainer>
              <SelectButton
                type="button"
                active={activeUserImage === '영화 포스터'}
                onClick={() => handleSelectImage('영화 포스터')}
              >
                영화 포스터
              </SelectButton>
              <SelectButton
                type="button"
                active={activeUserImage === '사용자 이미지'}
                onClick={() => handleSelectImage('사용자 이미지')}
              >
                사용자 이미지
              </SelectButton>
            </ButtonContainer>

            <ImageBox searchkeyword={searchKeyword}>
              {writingContents !== undefined &&
              searchKeyword &&
              activeUserImage === '영화 포스터' ? (
                <WritingContentsImage
                  src={`https://image.tmdb.org/t/p/original/${writingContents?.poster_path}`}
                  alt={`${writingContents?.title || writingContents?.name} 포스터`}
                />
              ) : imageSrc.length !== 0 &&
                activeUserImage === '사용자 이미지' ? (
                <>
                  {imageSrc.map((image: string | undefined, index: number) => (
                    <SelectImageBox key={index}>
                      <WritingContentsImage src={image} alt="" />
                      <DeleteImageButton
                        type="button"
                        onClick={e => handleDeleteImage(e, index)}
                      >
                        <DeleteImageIcon src={XIcon} alt="" />
                      </DeleteImageButton>
                    </SelectImageBox>
                  ))}
                </>
              ) : writingContents !== undefined &&
                imageSrc.length === 0 &&
                activeUserImage === '사용자 이미지' ? (
                <SelectImage
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={e => handleUpload(e)}
                />
              ) : (
                <EmptyImage>콘텐츠를 검색해보세요.</EmptyImage>
              )}
            </ImageBox>
          </div>
          <TextAreaP>
            <TextArea
              name=""
              id=""
              cols={30}
              rows={10}
              onChange={handleTextContents}
            ></TextArea>
          </TextAreaP>
          <WriteButton type="submit" value="작성하기" onClick={handleSubmit} />
        </SearchForm>
      </FormContainer>
    </WriteReviewWrapper>
  )
}

export default ReviewWriting

const WriteReviewWrapper = styled.section`
  background-color: #edece8;
  /* height: 100vh; */
  height: 100%;
`
const TitleContainer = styled.div`
  /* padding: 0 6%; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-right: 36px;
`

const TitleLine = styled.hr`
  border: none;
  border-top: 1px solid #cbc9c9;
  width: 95%;
`

const FormContainer = styled.div`
  margin: 20px auto;
  padding: 12px 0;
  width: 80%;
`

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 20px;
  position: relative;
`

const SearchInput = styled.input`
  border: 1px solid #bab09c;
  height: 46px;
  margin: 0 auto;
  padding: 0 12px;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff6ef;
  outline: none;
  position: relative;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`

const ImageBox = styled.div<{ searchkeyword: string }>`
  margin-top: 8px;
  background-color: #fff6ef;
  width: full;
  height: 128px;
  border: 1px solid #bab09c;
  display: flex;
  align-items: center;
`

const EmptyImage = styled.p`
  margin: auto;
  font-size: 14px;
`
const SelectImageBox = styled.div`
  position: relative;
  display: flex;
`

const SelectImage = styled.input`
  margin: auto;
  text-align: center;
`

const WritingContentsImage = styled.img`
  aspect-ratio: 3/4;
  height: 120px;
  margin: 4px;
  object-fit: cover;
`

const DeleteImageButton = styled.button`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0;
`

const SelectButton = styled.button<SelectButtonProps>`
  border: 1px solid #bab09c;
  padding: 8px 16px;
  border-radius: 6px;
  height: 42px;
  width: 49%;
  background-color: ${({ active }) => (active ? '#303032' : 'transparent')};
  color: ${({ active }) => (active ? '#aaeec4' : '#bab09c')};
`
const TextAreaP = styled.p`
  margin: 0;
`

const TextArea = styled.textarea`
  border: 1px solid #bab09c;
  outline: none;
  resize: none;
  background-color: #fff6ef;
  width: 100%;
  height: 300px;
  font-family: Pretendard;
  color: #444444;
  padding: 12px;
  box-sizing: border-box;
`
const WriteButton = styled.input`
  border: none;
  background-color: #303032;
  height: 48px;
  border-radius: 6px;
  color: #aaeec4;
  font-size: 16px;
  cursor: pointer;
`
const SearchList = styled.ul`
  width: 100%;
  height: 320px;
  background-color: #fffaea;
  position: absolute;
  top: 0;
  margin: 46px 0;
  padding: 0;
  overflow-y: auto;
  transition: 0.5s ease;
  visibility: hidden;
  border: 1px solid #c2a97e;
`
const SearchListItems = styled.li`
  border-bottom: 1px solid #c2a97e;
  border-bottom: 1px solid #c2a97e;
`

const SearchListItemSelect = styled.button`
  width: 100%;
  height: 120px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  color: #707070;
  padding: 0;
`
const SearchListPoster = styled.img`
  object-fit: fill;
  aspect-ratio: 3/4;
  height: 100%;
`
const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StarRatingText = styled.span`
  font-weight: 600;
  color: #444;
`
const DeleteImageIcon = styled.img`
  width: 32%;
  padding: 0;
`
