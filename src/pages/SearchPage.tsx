import SearchPageProgress from '@/components/searchpage/SearchPageProgress'
import { BackButton, BackButtonIcon, HeaderWrapper } from './DetailPage'
import Header from '@/layout/Header'
import { useNavigate } from 'react-router-dom'
import buttonBackRegular from '@/assets/buttonBackRegular.svg'
import SearchForm from '@/components/searchpage/SearchForm'
import styled from 'styled-components'
import SectionTitle from '@/components/SectionTitle'

function SearchPage() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <HeaderWrapper>
        <NavContainer>
          <BackButton onClick={handleBack}>
            <BackButtonIcon src={buttonBackRegular} alt="" />
          </BackButton>
          <Header margin="36px 0 0 0 " />
        </NavContainer>
      </HeaderWrapper>
      <TitleContainer>
        <SectionTitle textfirst="Search" margin="0px" padding="60px 0 0 0" />
      </TitleContainer>
      <TitleLine />
      <SearchForm />
      {/* <SearchPageProgress /> */}
    </div>
  )
}

export default SearchPage

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 36px;
`

const TitleLine = styled.hr`
  border: none;
  border-top: 1px solid #cbc9c9;
  width: 95%;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
