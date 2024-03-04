import styled from 'styled-components'

import { debounce } from '@/utils/debounce'
import { useEffect, useRef, useState } from 'react'
import { getSearchData } from '@/api/getSearchData'
import { useSearchStore } from '@/store/useSearchStore'
import { Link } from 'react-router-dom'

function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const { searchResult, setSearchResult } = useSearchStore()
  const searchInput = useRef<HTMLInputElement>(null)
  const searchList = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const Search = async () => {
      const data = await getSearchData(searchKeyword)

      setSearchResult(data.results)
    }
    Search()
  }, [searchKeyword])

  const keywordSearch = debounce((value: string) => {
    setSearchKeyword(value)
  }, 500)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value
    if (searchList.current && targetValue) {
      searchList.current.style.visibility = 'visible'
    } else if (searchList.current !== null) {
      searchList.current.style.visibility = 'hidden'
    }
    keywordSearch(targetValue)
  }
  return (
    <WriteReviewWrapper>
      <FormContainer>
        <Form action="">
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
                  to={`/detail/${item.media_type}/${item.id}`}
                  onClick={e => {
                    e.stopPropagation()
                  }}
                >
                  <SearchListPoster
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                  />
                  <SearchResultTitle>
                    {item.title || item.name}
                  </SearchResultTitle>
                </SearchListItemSelect>
              </SearchListItems>
            ))}
          </SearchList>
        </Form>
      </FormContainer>
    </WriteReviewWrapper>
  )
}

export default SearchForm

const WriteReviewWrapper = styled.section`
  background-color: #edece8;
  height: 100%;
  margin: 48px 0 0 0;
`

const FormContainer = styled.div`
  margin: 20px auto;
  padding: 12px 0;
  width: 80%;
`

const Form = styled.form`
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
  height: 60px;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  color: #444;
`

const SearchList = styled.ul`
  width: 100%;
  height: 480px;
  background-color: #fffaea;
  position: absolute;
  /* margin: 46px 0; */
  top: 60px;
  margin: 0;
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

const SearchListItemSelect = styled(Link)`
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
const SearchResultTitle = styled.span`
  font-size: 16px;
`
