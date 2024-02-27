import styled from 'styled-components'
import {
  CircleDiv,
  SubTitleSectionWrapper,
  TitleSectionWrapper
} from './SectionTitle'

interface TitleSectionWrapperProps {
  alignitems?: string
  padding?: string
  margin?: string
}

interface SectionTitleProps {
  textfirst: string | undefined
  margin?: string
  padding?: string
}

interface TitleSectionWrapperProps {
  alignitems?: string
  padding?: string
  margin?: string
}

interface SectionTitleProps {
  textfirst: string | undefined
  textsecond?: string
  margin?: string
  padding?: string
}

function ContentsTitle({ textfirst, margin, padding }: SectionTitleProps) {
  const title = textfirst?.split(' ')
  // const firstTitle = title?.slice(0, 3)
  const firstTitle = title?.slice(0, 3).join(' ')
  const secondTitle = title?.slice(3).join(' ')
  console.log(textfirst)

  console.log(textfirst?.length)

  console.log(title)
  console.log(firstTitle)
  console.log(secondTitle)

  return (
    <TitileSectionContainer
      alignitems="flex-start"
      margin={margin}
      padding={padding}
    >
      <DetailTitleSectionWrapper>
        {textfirst !== undefined && textfirst?.length >= 20 ? (
          <TwoLineSectionWrapper>
            <ContentsTitleText>{firstTitle}</ContentsTitleText>
            <SecondTitleWrapper>
              <ContentsTitleText>{secondTitle}</ContentsTitleText>
              <ContentsTitleCircleDiv />
            </SecondTitleWrapper>
          </TwoLineSectionWrapper>
        ) : (
          <>
            <ContentsTitleText>{textfirst}</ContentsTitleText>
            <ContentsTitleCircleDiv />
          </>
        )}
      </DetailTitleSectionWrapper>
    </TitileSectionContainer>
    /* -------------------------------------------------------------------------- */
    // <TitileSectionContainer
    //   alignitems="flex-start"
    //   margin={margin}
    //   padding={padding}
    // >
    //   <DetailTitleSectionWrapper>
    //     <ContentsTitleText>{textfirst}</ContentsTitleText>
    //     <CircleDiv />
    //     {textsecond && (
    //       <>
    //         <ContentsTitleTextSecond>{textsecond}</ContentsTitleTextSecond>
    //         <CircleDiv />
    //       </>
    //     )}
    //   </DetailTitleSectionWrapper>
    // </TitileSectionContainer>
    /* -------------------------------------------------------------------------- */
    // <DetailTitleSectionWrapper>
    //   <ContentsTitleText>{title}</ContentsTitleText>
    //   <CircleDiv />
    //   {textfirst && (
    //     <>
    //       <ContentsTitleTextSecond>
    //         {textfirst.length > 20 ? `${textfirst.slice(20)}...` : textfirst}
    //       </ContentsTitleTextSecond>
    //       <CircleDiv />
    //     </>
    //   )}
    // </DetailTitleSectionWrapper>
  )
}

export default ContentsTitle

const TitileSectionContainer = styled(TitleSectionWrapper)`
  height: fit-content;
`

const DetailTitleSectionWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const TwoLineSectionWrapper = styled(DetailTitleSectionWrapper)`
  flex-direction: column;
`

const ContentsTitleText = styled.span<TitleSectionWrapperProps>`
  font-size: 94px;
  letter-spacing: -0.2rem;
  line-height: 1;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px 20px 0px 48px;
  font-weight: 600;
  padding-right: ${({ padding }) => padding};
  width: fit-content;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-right: 0;
  width: fit-content;
`

const ContentsTitleTextSecond = styled.p<TitleSectionWrapperProps>`
  font-size: 94px;
  letter-spacing: -0.2rem;
  line-height: 1;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px 20px 0px 48px;
  font-weight: 600;
  padding-right: ${({ padding }) => padding};
  width: fit-content;
  max-width: 1200px;
  display: flex;
  gap: 20px;
  margin-right: 0;
`
const ContentsTitleCircleDiv = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-self: flex-end;
  background-color: #aaeec4;
  margin: 0 0 20px 4px;
  min-width: 30px;
`
const SecondTitleWrapper = styled.div`
  display: flex;
  gap: 20px;
`
