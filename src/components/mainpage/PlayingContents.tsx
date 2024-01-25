import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { movieGenres, tvGenres } from '@/utils/genresData'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RenderDataItems } from '@/types/mainPage/ContentsData'
import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'

interface DiscoverContentsBoxProps {
  justifycontent: string
  borderbottom?: string
  bordertop?: string
  padding?: string
}

interface PlayingContentsProps {
  date: string
}

function PlayingContents({ date }: PlayingContentsProps) {
  const { playingMovieData } = usePlayingMovieStore()
  const { trendingTVData } = useTrendingTVDataStore()
  const [renderData, setRenderData] = useState<RenderDataItems[] | undefined>()
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (date === '개봉일 : ') {
      setRenderData(playingMovieData)
    } else {
      setRenderData(trendingTVData)
    }
  }, [])

  const handleHover = () => {
    setHover(true)
  }

  return (
    <>
      <DiscoverContentsSection>
        {renderData?.map(item => (
          <DiscoverContentsWrapper>
            <DiscoverContentsLink href="">
              <DiscoverContentsBox
                justifycontent="center"
                borderbottom="1px solid #cbcbcb"
              >
                <DiscoverContentsTitle>
                  {item.name || item.title}
                </DiscoverContentsTitle>
              </DiscoverContentsBox>
              <DiscoverContentImage
                src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path}`}
                alt=""
              />
              <DiscoverContentsSideBox
                justifycontent="flex-start"
                bordertop="1px solid #cbcbcb"
                padding="12px"
              >
                <DiscoverContentsSubstance>
                  <span>{date}</span>
                  {item.release_date || item.first_air_date}
                </DiscoverContentsSubstance>
                <DiscoverContentsGenreBox>
                  {item?.genre_ids
                    .slice(0, 3)
                    .map((id: number, index: number) => {
                      const genre =
                        (movieGenres.genres || []).find(
                          genre => genre.id === id
                        ) ||
                        (tvGenres.genres || []).find(genre => genre.id === id)

                      return (
                        <DiscoverContentsGenre key={index}>
                          {genre?.name}
                        </DiscoverContentsGenre>
                      )
                    })}
                </DiscoverContentsGenreBox>
              </DiscoverContentsSideBox>
            </DiscoverContentsLink>
          </DiscoverContentsWrapper>
        ))}
      </DiscoverContentsSection>
    </>
  )
}

export default PlayingContents

const DiscoverContentsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #cdcdcd;
`
const DiscoverContentsWrapper = styled.div`
  border: 1px solid #cbcbcb;
  /* padding: 25px; */
`

const DiscoverContentsLink = styled.a`
  /* gap: 25px; */
  display: grid;
  grid-template-rows: 150px 1fr 100px;
  height: 100%;
  position: relative;
  &:hover {
    background-color: #f8f8f8;
    transition: 1s ease;
  }
`

const DiscoverContentsBox = styled.div<DiscoverContentsBoxProps>`
  /* border-bottom: 1px solid #cbcbcb; */
  border-bottom: ${({ borderbottom }) => borderbottom};
  border-top: ${({ bordertop }) => bordertop};
  display: flex;
  justify-content: ${({ justifycontent }) => justifycontent};
  padding: ${({ padding }) => padding};
`

const DiscoverContentsSideBox = styled(DiscoverContentsBox)`
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`

const DiscoverContentsTitle = styled.span`
  font-size: 32px;
  color: #444444;
  font-weight: 700;
  align-self: self-end;
  margin: 30px 10px;
  text-align: center;
`
const DiscoverContentImage = styled.img`
  padding: 25px;
  box-sizing: border-box;
  width: 100%;
  object-fit: scale-down;
  height: 100%;
`
const DiscoverContentsSubstance = styled.span`
  margin: 4px 0;
  padding: 0 10px;
  color: #323232;
`

const DiscoverContentsGenreBox = styled.div`
  display: flex;
  justify-self: self-end;
`

const DiscoverContentsGenre = styled.span`
  padding: 6px 14px;
  border: 1px solid #444;
  color: #444;
  border-radius: 42px;
  margin: 0 4px;
`
