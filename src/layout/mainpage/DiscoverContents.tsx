import { getPlayingMovieData, getTrendingTVData } from '@/api/getPlayingData'
import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import { useEffect } from 'react'
import RecentPlayingContents from './../../components/mainpage/RecentPlayingContents'
import SectionTitle from '@/components/SectionTitle'

function DiscoverContents() {
  const { playingMovieData, setPlayingMovieData } = usePlayingMovieStore()
  const { trendingTVData, setTrendingTVData } = useTrendingTVDataStore()
  // console.log('playingMovieData', playingMovieData)
  // console.log('trendingTVData', trendingTVData)

  useEffect(() => {
    const fetchingPlayingMovieData = async () => {
      const data = await getPlayingMovieData()
      setPlayingMovieData(data.results)
    }

    const fetchingTrendingTVData = async () => {
      const data = await getTrendingTVData()
      setTrendingTVData(data.results)
    }

    fetchingPlayingMovieData()
    fetchingTrendingTVData()
  }, [])

  return (
    <>
      <SectionTitle textfirst="Now" textsecond="Trending" />
      <RecentPlayingContents />
    </>
  )
}

export default DiscoverContents
