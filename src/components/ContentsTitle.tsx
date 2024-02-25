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
  textsecond?: string
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

function ContentsTitle({
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
        <ContentsTitleText>
          {textfirst} <CircleDiv />
        </ContentsTitleText>
        {textsecond && (
          <ContentsTitleTextSecond>
            {textsecond} <CircleDiv />
          </ContentsTitleTextSecond>
        )}
      </SubTitleSectionWrapper>
    </TitleSectionWrapper>
  )
}

export default ContentsTitle

const ContentsTitleText = styled.p<TitleSectionWrapperProps>`
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
