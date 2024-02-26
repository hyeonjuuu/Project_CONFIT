import SearchPageProgress from '@/components/searchpage/SearchPageProgress'
import { BackButton, BackButtonIcon, HeaderWrapper } from './DetailPage'
import Header from '@/layout/Header'
import { useNavigate } from 'react-router-dom'
import buttonBackRegular from '@/assets/buttonBackRegular.svg'

function SearchPage() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <HeaderWrapper>
        <BackButton onClick={handleBack}>
          <BackButtonIcon src={buttonBackRegular} alt="" />
        </BackButton>

        <Header margin="36px 0 0 0 " />
      </HeaderWrapper>
      <SearchPageProgress />
    </div>
  )
}

export default SearchPage
