import { styled } from 'styled-components'

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

function SectionTitle({
  textfirst,
  textsecond,
  margin,
  padding
}: SectionTitleProps) {
  return (
    <TitleSectionWrapper
      alignitems="flex-start"
      margin={margin}
      padding={padding}
    >
      <SubTitleSectionWrapper>
        <SectionTitleText>{textfirst}</SectionTitleText>
        <SectionTitleText>{textsecond}</SectionTitleText>
      </SubTitleSectionWrapper>
      <CircleDiv></CircleDiv>
    </TitleSectionWrapper>
  )
}

export default SectionTitle

export const TitleSectionWrapper = styled.div<TitleSectionWrapperProps>`
  display: flex;
  flex-direction: row;
  /* padding: 28px 0; */
  padding: ${({ padding }) => (padding ? padding : '28px 0')};
  margin: ${({ margin }) => (margin ? margin : '10px 0')};
  align-items: flex-end;
  align-items: ${({ alignitems }) => alignitems};
`

export const SubTitleSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const SectionTitleText = styled.p<TitleSectionWrapperProps>`
  font-size: 94px;
  letter-spacing: -0.2rem;
  line-height: 1;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px 20px 0px 48px;
  font-weight: 600;
  padding-right: ${({ padding }) => padding};
  width: fit-content;
  max-width: 1200px;
`

export const CircleDiv = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-self: flex-end;
  background-color: #aaeec4;
  margin: 0 0 20px 4px;
  min-width: 30px;
`
