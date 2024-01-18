import { PopularData } from '@/types/mainPage/bestContents'
import { create } from 'zustand'

interface PopularDataState {
  populardata: PopularData | null
  setPopularData: (data: PopularData) => void
}

export const usePopularDataStore = create<PopularDataState>(set => ({
  populardata: null,
  setPopularData: data => set({ populardata: data })
}))
