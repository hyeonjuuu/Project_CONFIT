import { getDiscoverMovieData, getDiscoverTVData } from '@/api/getDiscoverData'
import { getAiringData, getPlayingMovieData } from '@/api/getPlayingData'
import PlayingContents from '@/components/mainpage/PlayingContents'
import { useAiringDataStore } from '@/store/useAiringDataStore'
import { useDiscoverMovieStore } from '@/store/useDiscoverMovieStore'
import { useDiscoverTVStore } from '@/store/useDiscoverTVStore'
import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { movieGenres, tvGenres } from '@/utils/genresData'
import { useEffect } from 'react'
import styled from 'styled-components'

interface DiscoverContentsBoxProps {
  justifycontent: string
  borderbottom?: string
  bordertop?: string
  padding?: string
}

function DiscoverContents() {
  const { playingMovieData, setPlayingMovieData } = usePlayingMovieStore()
  const { airingData, setAiringData } = useAiringDataStore()

  useEffect(() => {
    const fetchingPlayingMovieData = async () => {
      const data = await getPlayingMovieData()
      setPlayingMovieData(data.results)
    }

    const fetchingAiringData = async () => {
      const data = await getAiringData()
      console.log(data)
      setAiringData(data.results)
    }

    fetchingPlayingMovieData()
    fetchingAiringData()
  }, [])
  console.log('playing', playingMovieData)
  console.log('airing', airingData)
  const combineData =
    playingMovieData && airingData ? [...playingMovieData, ...airingData] : null

  return (
    <>
      <TitleSectionWrapper>
        <SectionTitle>Now</SectionTitle>
        <SubTitleSectionWrapper>
          <SectionTitle>Playing</SectionTitle>
          <CircleDiv></CircleDiv>
        </SubTitleSectionWrapper>
      </TitleSectionWrapper>
      <PlayingContents releasedate="개봉일 : " />
    </>
  )
}

export default DiscoverContents

const TitleSectionWrapper = styled.div`
  padding: 16px 0;
  margin: 10px 0;
`

const SubTitleSectionWrapper = styled.div`
  display: flex;
`

const SectionTitle = styled.p`
  font-size: 128px;
  letter-spacing: -0.4rem;
  line-height: 1;
  font-family: 'Josefin Sans', sans-serif;
  margin: 20px 20px 20px 48px;
  font-weight: 500;
  /* background-color: red; */
`

const CircleDiv = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-self: flex-end;
  background-color: #aaeec4;
  margin: 0 0 20px 4px;
`
