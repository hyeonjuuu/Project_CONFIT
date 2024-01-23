import { getDiscoverMovieData, getDiscoverTVData } from '@/api/getDiscoverData'
import { useDiscoverMovieStore } from '@/store/useDiscoverMovieStore'
import { useDiscoverTVStore } from '@/store/useDiscoverTVStore'
import { useEffect } from 'react'
import styled from 'styled-components'

interface DiscoverContentsBoxProps {
  justifycontent: string
  borderbottom?: string
  bordertop?: string
  padding?: string
}

function DiscoverContents() {
  const { discoverMovieData, setDiscoverMovieData } = useDiscoverMovieStore()
  const { discoverTVData, setDiscoverTVData } = useDiscoverTVStore()

  useEffect(() => {
    const fetchingDiscoverMovieData = async () => {
      const data = await getDiscoverMovieData()
      // console.log('moive', data)
      setDiscoverMovieData(data.results)
    }
    const fetchingDiscoverTVData = async () => {
      const data = await getDiscoverTVData()
      // console.log('TV', data)
      setDiscoverTVData(data.results)
    }

    fetchingDiscoverMovieData()
    fetchingDiscoverTVData()
  }, [])
  // console.log('moive', discoverMovieData)
  // console.log('TV', discoverTVData)
  const combineDiscoverData =
    discoverMovieData && discoverTVData
      ? [...discoverTVData, ...discoverMovieData]
      : null

  console.log(combineDiscoverData)

  return (
    <DiscoverContentsSection>
      {combineDiscoverData?.map(item => (
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
            <DiscoverContentsBox
              justifycontent="flex-start"
              bordertop="1px solid #cbcbcb"
              padding="20px"
            >
              <DiscoverContentsSubstance>
                {item.overview}
              </DiscoverContentsSubstance>
            </DiscoverContentsBox>
          </DiscoverContentsLink>
        </DiscoverContentsWrapper>
      ))}
    </DiscoverContentsSection>
  )
}

export default DiscoverContents

const DiscoverContentsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const DiscoverContentsWrapper = styled.div`
  border: 1px solid #cbcbcb;
  /* padding: 25px; */
`

const DiscoverContentsLink = styled.a`
  gap: 25px;
  display: grid;
  grid-template-rows: 250px 1fr 200px;
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

const DiscoverContentsTitle = styled.span`
  font-size: 36px;
  color: #444444;
  font-weight: 700;
  align-self: self-end;
  margin: 30px 0;
  text-align: center;
`
const DiscoverContentImage = styled.img`
  height: 800px;
  padding: 25px;
  box-sizing: border-box;
  /* margin: 25px; */
  width: 100%;
`
const DiscoverContentsSubstance = styled.span`
  /* background-color: teal; */
`
