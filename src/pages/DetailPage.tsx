import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieDetail from '@/components/detailpage/MovieDetail'
import TVDetail from '@/components/detailpage/TVDetail'
import Header from '@/layout/Header'
import styled from 'styled-components'
import buttonBackRegular from '@/assets/buttonBackRegular.svg'

function DetailPage() {
  let { id: detailId } = useParams()
  let { type: detailType } = useParams()
  const detailContentsId = parseInt(detailId || '0')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  if (detailContentsId && detailType === 'movie') {
    return (
      <>
        <HeaderWrapper>
          <BackButton onClick={handleBack}>
            <BackButtonIcon src={buttonBackRegular} alt="" />
          </BackButton>
          <Header review="writing" margin="36px 0 0 0 " />
        </HeaderWrapper>
        <MovieDetail />
      </>
    )
  } else {
    return (
      <>
        <HeaderWrapper>
          <BackButton onClick={handleBack}>
            <BackButtonIcon src={buttonBackRegular} alt="" />
          </BackButton>

          <Header review="writing" margin="36px 0 0 0 " />
        </HeaderWrapper>
        <TVDetail />
      </>
    )
  }
}

export default DetailPage

export const HeaderWrapper = styled.div`
  padding-right: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BackButton = styled.button`
  padding: 0;
  margin-top: 36px;
  margin-left: 36px;
  padding: 10px;
`
export const BackButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`
