import { getPlayingMovieData, getTrendingTVData } from '@/api/getPlayingData'
import PlayingContents from '@/components/mainpage/PlayingContents'
import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import { useEffect } from 'react'
import styled from 'styled-components'
import RecentPlayingContents from './../../components/mainpage/RecentPlayingContents'

interface DiscoverContentsBoxProps {
  justifycontent: string
  borderbottom?: string
  bordertop?: string
  padding?: string
}
interface TitleSectionWrapperProps {
  alignitems?: string
  padding?: string
}

function DiscoverContents() {
  const { playingMovieData, setPlayingMovieData } = usePlayingMovieStore()
  const { trendingTVData, setTrendingTVData } = useTrendingTVDataStore()

  useEffect(() => {
    const fetchingPlayingMovieData = async () => {
      const data = await getPlayingMovieData()
      setPlayingMovieData(data.results)
    }

    const fetchingTrendingTVData = async () => {
      const data = await getTrendingTVData()
      console.log(data)
      setTrendingTVData(data.results)
    }

    fetchingPlayingMovieData()
    fetchingTrendingTVData()
  }, [])
  // console.log('playing', playingMovieData)
  console.log('trending', trendingTVData)

  return (
    <>
      {/* <TitleSectionWrapper alignitems="flex-start">
        <SubTitleSectionWrapper>
          <SectionTitle>Now</SectionTitle>
          <SectionTitle>Playing</SectionTitle>
        </SubTitleSectionWrapper>
        <CircleDiv></CircleDiv>
      </TitleSectionWrapper>
      <PlayingContents date="개봉일 : " />
      <TitleSectionWrapper alignitems="flex-end">
        <SubTitleSectionWrapper>
          <SectionTitle padding="30px">Now</SectionTitle>
          <SectionTitle>Trending</SectionTitle>
        </SubTitleSectionWrapper>
        <CircleDiv></CircleDiv>
      </TitleSectionWrapper>
      <PlayingContents date="첫방송 : " /> */}
      <RecentPlayingContents />
    </>
  )
}

export default DiscoverContents

const TitleSectionWrapper = styled.div<TitleSectionWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 28px 0;
  margin: 10px 0;
  align-items: flex-end;
  align-items: ${({ alignitems }) => alignitems};
`

const SubTitleSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.p<TitleSectionWrapperProps>`
  font-size: 94px;
  letter-spacing: -0.2rem;
  line-height: 1;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px 20px 0px 48px;
  font-weight: 600;
  padding-right: ${({ padding }) => padding};
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
