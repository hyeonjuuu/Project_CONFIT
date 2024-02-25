import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import { Link } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import ButtonArrowIcon from '@/assets/ButtonArrow'
import { useState } from 'react'
import { useHoverItemStore } from '@/store/useHoverItemStore'

type ViewMoreButtonProps = {
  $ishovered?: boolean
  $position?: string
  $bottom?: string
  $left?: string
}

function RecentPlayingContents() {
  const { trendingTVData } = useTrendingTVDataStore()
  const [isHovered, setIsHovered] = useState(false)
  const { hoverItem, setHoverItem } = useHoverItemStore()

  const handleHover = (itemId: number) => {
    if (hoverItem !== itemId) {
      setIsHovered(true)
    }
    setHoverItem(itemId)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setHoverItem(0)
  }

  return (
    <>
      <RecentContentsWrapper>
        {trendingTVData
          ?.filter(item => item !== undefined)
          ?.map((item, index) => (
            <ContentsWrapper key={index}>
              {index * 4 < trendingTVData.length && (
                <LargeContentsBox>
                  <ContentsItemBox
                    to={`detail/${trendingTVData[index * 4].media_type}/${trendingTVData[index * 4].id}`}
                    onMouseEnter={() =>
                      handleHover(trendingTVData[index * 4].id)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <LargeImgBox>
                      <LargeImg
                        src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4]?.backdrop_path}`}
                        alt=""
                        key={index * 4}
                        width="720px"
                      />
                      <ViewMoreButton
                        $ishovered={isHovered}
                        $position="absolute"
                        $bottom="16%"
                        $left="70%"
                      >
                        <span>View More</span>
                        <ButtonArrowIcon $ishovered={isHovered} />
                      </ViewMoreButton>
                    </LargeImgBox>
                    <ContentsTextBox>
                      <ContentsTitle>
                        {trendingTVData[index * 4]?.name}
                      </ContentsTitle>
                      <ContentsDate>
                        {trendingTVData[index * 4].first_air_date.slice(0, 4)}
                      </ContentsDate>
                    </ContentsTextBox>
                  </ContentsItemBox>

                  {index * 4 + 1 < trendingTVData.length && (
                    <ContentsItemBox
                      to={`detail/${trendingTVData[index * 4 + 1].media_type}/${trendingTVData[index * 4 + 1].id}`}
                      onMouseEnter={() =>
                        handleHover(trendingTVData[index * 4 + 1].id)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <LargeImgBox>
                        <LargeImg
                          src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 1]?.backdrop_path}`}
                          alt=""
                          key={index * 4 + 1}
                          width="720px"
                        />
                        <ViewMoreButton
                          $ishovered={isHovered}
                          $position="absolute"
                          $bottom="16%"
                          $left="70%"
                        >
                          <span>View More</span>
                          <ButtonArrowIcon $ishovered={isHovered} />
                        </ViewMoreButton>
                      </LargeImgBox>
                      <ContentsTextBox>
                        <ContentsTitle>
                          {trendingTVData[index * 4 + 1]?.name}
                        </ContentsTitle>
                        <ContentsDate>
                          {trendingTVData[index * 4 + 1].first_air_date.slice(
                            0,
                            4
                          )}
                        </ContentsDate>
                      </ContentsTextBox>
                    </ContentsItemBox>
                  )}
                </LargeContentsBox>
              )}

              {index * 4 + 2 < trendingTVData.length && (
                <SmallContentsBox>
                  <HoverWrapper
                    href={`detail/${trendingTVData[index * 4 + 2].media_type}/${trendingTVData[index * 4 + 2].id}`}
                    onMouseEnter={() =>
                      handleHover(trendingTVData[index * 4 + 2].id)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <LargeImg
                      src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 2]?.poster_path}`}
                      alt=""
                      key={index * 4 + 2}
                      width="480"
                    />
                    <HoverContents>
                      <HoverContentsItem>
                        {trendingTVData[index * 4 + 2]?.name}
                      </HoverContentsItem>
                      <HoverContentsDate>
                        {trendingTVData[index * 4 + 2]?.first_air_date.slice(
                          0,
                          4
                        )}
                      </HoverContentsDate>
                      <ViewMoreButton $ishovered={isHovered}>
                        <span>View More</span>
                        <ButtonArrowIcon $ishovered={isHovered} />
                      </ViewMoreButton>
                    </HoverContents>
                  </HoverWrapper>
                  {index * 4 + 3 < trendingTVData.length && (
                    <HoverWrapper
                      href={`detail/${trendingTVData[index * 4 + 3].media_type}/${trendingTVData[index * 4 + 3].id}`}
                      onMouseEnter={() =>
                        handleHover(trendingTVData[index * 4 + 3].id)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <LargeImg
                        src={`https://image.tmdb.org/t/p/original/${trendingTVData[index * 4 + 3]?.poster_path}`}
                        alt=""
                        key={index * 4 + 3}
                        width="480"
                      />
                      <HoverContents>
                        <HoverContentsItem>
                          {trendingTVData[index * 4 + 3]?.name}
                        </HoverContentsItem>
                        <HoverContentsDate>
                          {trendingTVData[index * 4 + 3]?.first_air_date.slice(
                            0,
                            4
                          )}
                        </HoverContentsDate>
                        <ViewMoreButton $ishovered={isHovered}>
                          <span>View More</span>
                          <ButtonArrowIcon $ishovered={isHovered} />
                        </ViewMoreButton>
                      </HoverContents>
                    </HoverWrapper>
                  )}
                </SmallContentsBox>
              )}
            </ContentsWrapper>
          ))}
      </RecentContentsWrapper>
    </>
  )
}

export default RecentPlayingContents

const RecentContentsWrapper = styled.div`
  background: repeating-linear-gradient(
      90deg,
      transparent,
      #edece8 1px,
      #edece8 200px
    ),
    linear-gradient(to bottom, #cbc9c9, #cbc9c9);
  padding: 20px 0;
`

const ContentsWrapper = styled.div`
  padding: 0 50px;
  z-index: 1;
  margin: 32px 0;
`

const LargeContentsBox = styled.div`
  display: flex;
  gap: 28px;
  margin: 48px 0;
  align-items: center;
`

const SmallContentsBox = styled(LargeContentsBox)`
  justify-content: flex-end;
`

const LargeImg = styled.img`
  width: ${({ width }) => width};
  object-fit: contain;
  border-radius: 10px;
  height: 100%;
`

const ContentsTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 16px 10px;
`

const ContentsTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #444;
`
const ContentsDate = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  color: #707070;
  font-size: 16px;
`

const HoverWrapper = styled.a`
  border-radius: 10px;
  background: #aaeec4;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  overflow: hidden;
  > img {
    filter: saturate(100%) brightness(100%) blur(0) opacity(100%);
    transition: 0.5s all ease;
  }

  > div {
    transition: 0.5s all ease;
    filter: opacity(0);
  }
  &:hover {
    > img {
      filter: saturate(0%) brightness(70%) blur(2px) opacity(50%);
      scale: 105%;
      transition: 0.5s all ease;
    }

    > div {
      filter: opacity(100);
    }
  }
`

const ContentsItemBox = styled(Link)`
  display: flex;
  flex-direction: column;
`

const LargeImgBox = styled.div`
  border-radius: 10px;
  background: #aaeec4;
  transition: all 0.5s;
  overflow: hidden;
  aspect-ratio: 16/9;
  > img {
    filter: saturate(100%) brightness(100%) blur(0) opacity(100%);
    transition: 0.5s all ease;
  }
  > button {
    transition: 0.6s;
    opacity: 0%;
  }

  &:hover {
    > img {
      filter: saturate(0%) brightness(70%) blur(2px) opacity(50%);
      scale: 105%;
      height: 100%;
      transition: 0.5s all ease;
    }
    > button {
      opacity: 100%;
    }
  }
`

const HoverContents = styled.div`
  position: absolute;
  display: flex;
  align-self: center;
  align-items: center;
  word-break: keep-all;
  text-align: center;
  filter: opacity(0);
  flex-direction: column;
`

const HoverContentsItem = styled.span`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${({ color }) => (color ? color : '#FFFFFF')};
  font-size: 24px;
  font-weight: 600;
`

const HoverContentsDate = styled(HoverContentsItem)`
  font-size: 16px;
  color: white;
  font-weight: 300;
  margin: 14px 0;
`

const hoveredFillcolor = keyframes`
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 0 100%;
  }
`

const unhoveredFillcolor = keyframes`
  0% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 0%;
  }
`

const ViewMoreButton = styled.button<ViewMoreButtonProps>`
  position: ${({ $position }) =>
    $position === 'absolute' ? 'absolute' : 'relative'};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #444444;
  padding: 8px 20px 12px;
  border-radius: 30px;
  overflow: hidden;
  width: 200px;
  color: #444444;
  background: linear-gradient(to bottom, transparent 50%, #303032 50%);
  background-size: 100% 200%;
  transition: all 0.5s;
  position: relative;
  animation: ${({ $ishovered }) =>
    $ishovered
      ? css`
          ${hoveredFillcolor} 0.8s forwards
        `
      : css`
          ${unhoveredFillcolor} 0.8s forwards
        `};
  color: ${({ $ishovered }) => ($ishovered ? '#aaeec4' : '#444444')};
`
