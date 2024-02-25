import SearchPageProgress from '@/components/searchpage/SearchPageProgress'
import { BackButton, HeaderWrapper } from './DetailPage'
import Header from '@/layout/Header'
import { useNavigate } from 'react-router-dom'

function SearchPage() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <HeaderWrapper>
        <BackButton onClick={handleBack} />

        <Header review="writing" margin="36px 0 0 0 " />
      </HeaderWrapper>
      <SearchPageProgress />
    </div>
  )
}

export default SearchPage
