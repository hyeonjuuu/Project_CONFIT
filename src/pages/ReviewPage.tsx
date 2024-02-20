import SectionTitle from '@/components/SectionTitle'
import ReviewContents from '@/components/reviewPage/ReviewContents'
import Header from '@/layout/Header'
import styled from 'styled-components'

function ReviewPage() {
  return (
    <>
      <HeaderContainer>
        <SectionTitle textfirst="Review" padding="60px 0 0 0" />
        <Header review="writing" />
      </HeaderContainer>
      <ReviewContentsSection>
        <ReviewContents />
      </ReviewContentsSection>
    </>
  )
}

export default ReviewPage

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 36px;
`

const ReviewContentsSection = styled.section`
  margin: 0 36px;
`
