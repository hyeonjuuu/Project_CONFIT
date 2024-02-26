import { getPlayingMovieData, getTrendingTVData } from '@/api/getPlayingData'
import { usePlayingMovieStore } from '@/store/usePlayingMovieStore'
import { useTrendingTVDataStore } from '@/store/useTrendingTVDataStore'
import { useEffect } from 'react'
import RecentPlayingContents from './../../components/mainpage/RecentPlayingContents'
import SectionTitle from '@/components/SectionTitle'

function DiscoverContents() {
  const { setPlayingMovieData } = usePlayingMovieStore()
  const { setTrendingTVData } = useTrendingTVDataStore()
  // const { onTheAirData, setOnTheAirData } = useOnTheAirDataStore()

  useEffect(() => {
    const fetchingPlayingMovieData = async () => {
      const data = await getPlayingMovieData()
      setPlayingMovieData(data.results)
    }

    const fetchingTrendingTVData = async () => {
      const data = await getTrendingTVData()
      setTrendingTVData(data.results)
    }
    // const fetchingOnTheAirData = async () => {
    //   const data = await getOnTheAirData()
    //   setOnTheAirData(data.results)
    // }

    fetchingPlayingMovieData()
    fetchingTrendingTVData()
    // fetchingOnTheAirData()
  }, [])

  return (
    <>
      <SectionTitle textfirst="Now" textsecond="Trending" />
      <RecentPlayingContents />
    </>
  )
}

export default DiscoverContents
