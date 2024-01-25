import { TrendingTVItems } from '@/types/mainPage/ContentsData'
import { create } from 'zustand'

interface TrendingTVDataState {
  trendingTVData: TrendingTVItems[] | undefined
  setTrendingTVData: (data: TrendingTVItems[]) => void
}

export const useTrendingTVDataStore = create<TrendingTVDataState>(set => ({
  trendingTVData: undefined,
  setTrendingTVData: data => set({ trendingTVData: data })
}))
