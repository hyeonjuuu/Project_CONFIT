import SectionTitle from '@/components/SectionTitle'
import ReviewContents from '@/components/reviewPage/ReviewContents'
import Header from '@/layout/Header'
import { useUserSessionStore } from '@/store/useUserSessionStore'
import styled from 'styled-components'

function ReviewPage() {
  const { userSession } = useUserSessionStore()

  return (
    <>
      <HeaderContainer>
        <SectionTitle textfirst="Review" padding="60px 0 0 0" />
        <Header review="writing" margin="60px 0 0 0 " />
      </HeaderContainer>
      <ReviewContentsSection>
        <ReviewContents />
      </ReviewContentsSection>
    </>
  )
}

export default ReviewPage

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-right: 36px;
`

const ReviewContentsSection = styled.section`
  margin: 0 36px;
`
