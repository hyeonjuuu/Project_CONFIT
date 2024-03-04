import SectionTitle from '@/components/SectionTitle'
import ReviewContents from '@/components/reviewpage/ReviewContents'
import Header from '@/layout/Header'
import styled from 'styled-components'

function ReviewPage() {
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
  margin-right: 36px;
`

const ReviewContentsSection = styled.section`
  margin: 0 36px;
`
