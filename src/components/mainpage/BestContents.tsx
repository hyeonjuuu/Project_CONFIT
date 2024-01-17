import styled from 'styled-components'
import { motion } from 'framer-motion'

function BestContents() {
  return (
    <BestContentsContainer>
      <div>
        <BestContentsImg src="" alt="" />
        <ContentsTitle>title</ContentsTitle>
        <ContentsWrapper>
          <ContentsOverview>overview</ContentsOverview>

          <ContentsGenreWrapper>
            <SubstanceTitle>장르</SubstanceTitle>

            <Substance>genre</Substance>
          </ContentsGenreWrapper>
          <ContentsGenreWrapper>
            <SubstanceTitle>평점</SubstanceTitle>
            <Substance>vote average</Substance>
          </ContentsGenreWrapper>
        </ContentsWrapper>
        <MoreButton>More</MoreButton>
      </div>
    </BestContentsContainer>
  )
}

export default BestContents

const BestContentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.2fr 0.8fr;
  height: 580px;
  grid-column-gap: 3rem;
  margin: 150px 50px 100px;
`
// const MotionLink = motion(RouterLink)

// const BestContentsWrapper = styled.link`
//   display: flex;
//   flex-direction: column;
// `

const BestContentsImg = styled.img`
  width: 100%;
  max-width: 800px;
`
const ContentsTitle = styled(motion.p)`
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 18px;
  color: #222222;
`

const MoreButton = styled(motion.button)`
  justify-self: flex-start;
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
  border-bottom: 1px solid #303032;
  font-family: 'Josefin Sans', sans-serif;
  margin: 6px 0;
`

const ContentsWrapper = styled.div`
  height: 200px;
`

const ContentsOverview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 300;
  font-size: 14px;
`

const ContentsGenreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 0.5px solid #bbbaba;
  padding: 10px 0;
`

const Substance = styled.span`
  font-weight: 300;
  height: 100%;
  font-size: 14px;
  color: #707070;
`
const SubstanceTitle = styled(Substance)`
  font-weight: 600;
  display: block;
  color: #444;
`
