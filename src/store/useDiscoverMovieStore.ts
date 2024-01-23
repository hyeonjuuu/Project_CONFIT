import {
  DiscoverMovieData,
  DiscoverMovieItems
} from '@/types/mainPage/ContentsData'
import { create } from 'zustand'

interface DiscoverMovieState {
  discoverMovieData: DiscoverMovieItems[] | undefined
  setDiscoverMovieData: (data: DiscoverMovieItems[]) => void
}

export const useDiscoverMovieStore = create<DiscoverMovieState>(set => ({
  discoverMovieData: undefined,
  setDiscoverMovieData: data => set({ discoverMovieData: data })
}))
