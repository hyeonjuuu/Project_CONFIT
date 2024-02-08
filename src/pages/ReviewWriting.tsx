import { getSearchData } from '@/api/getSearchData'
import SectionTitle from '@/components/SectionTitle'
import { useSearchStore } from '@/store/useSearchStore'
import { debounce } from '@/utils/debounce'
import { ReactEventHandler, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface SelectButtonProps {
  active: boolean
  onClick: () => void
}

function ReviewWriting() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [writingContents, setWritingContents] = useState<SearchDataItems>()
  const { searchResult, setSearchResult } = useSearchStore()
  const [activeUserImage, setActiveUserImage] = useState('')
  const searchInput = useRef<HTMLInputElement>(null)
  const searchList = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const Search = async () => {
      const data = await getSearchData(searchKeyword)

      setSearchResult(data.results)
    }
    setActiveUserImage('영화 포스터')

    Search()
  }, [searchKeyword])

  const keywordSearch = debounce((value: string) => {
    console.log(value)
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

  // const handleSelectImage = (e: React.MouseEvent) => {
  //   const target = e.target
  //   const targetText = e.currentTarget.textContent
  //   console.log(target)
  //   if (targetText) {
  //     setActiveUserImage(targetText)
  //   }
  // }
  const handleSelectImage = (value: string) => {
    setActiveUserImage(value)
  }
  console.log(searchKeyword)

  return (
    <WriteReviewWrapper>
      <TitleContainer>
        <SectionTitle
          textfirst="Writing"
          textsecond="Review"
          margin="0px"
          padding="60px 0 0 0"
        />
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
              {/* {writingContents === undefined && searchKeyword === '' ? (
                <EmptyImage>콘텐츠를 검색해보세요.</EmptyImage>
              ) : (
                <WritingContentsImage
                  src={`https://image.tmdb.org/t/p/original/${writingContents?.poster_path}`}
                  alt={`${writingContents?.title || writingContents?.name} 포스터`}
                />
              )} */}
              {writingContents === undefined && searchKeyword === '' ? (
                <EmptyImage>콘텐츠를 검색해보세요.</EmptyImage>
              ) : writingContents && activeUserImage === '영화 포스터' ? (
                <WritingContentsImage
                  src={`https://image.tmdb.org/t/p/original/${writingContents?.poster_path}`}
                  alt={`${writingContents?.title || writingContents?.name} 포스터`}
                />
              ) : (
                <input type="file" />
              )}
            </ImageBox>
          </div>
          <TextAreaP>
            <TextArea name="" id="" cols={30} rows={10}></TextArea>
          </TextAreaP>
          <WriteButton type="submit" value="작성하기" />
        </SearchForm>
      </FormContainer>
    </WriteReviewWrapper>
  )
}

export default ReviewWriting

const WriteReviewWrapper = styled.section`
  background-color: #edece8;
  height: 100vh;
`
const TitleContainer = styled.div`
  padding: 0 6%;
`

const TitleLine = styled.hr`
  border: none;
  border-top: 1px solid #cbc9c9;
  width: 80%;
`

const FormContainer = styled.div`
  margin: 20px auto;
  padding: 12px 0;
  /* background-color: pink; */
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
`

const WritingContentsImage = styled.img`
  aspect-ratio: 3/4;
  height: 120px;
  margin: 4px;
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
  /* padding: 2px 0; */
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
  /* color: #808078; */
  color: #707070;
  /* margin: 6px 0; */
  padding: 0;
`
const SearchListPoster = styled.img`
  object-fit: fill;
  aspect-ratio: 3/4;
  height: 100%;
`
