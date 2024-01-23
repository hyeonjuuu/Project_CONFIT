import {
  DiscoverMovieData,
  DiscoverMovieItems
} from '@/types/mainPage/discoverContents'
import { create } from 'zustand'

// interface DiscoverMovieState {
//   discoverMovieData: DiscoverMovieItems[] | undefined
//   setDiscoverMovieData: (data: DiscoverMovieItems[]) => void
// }
interface DiscoverMovieState {
  discoverMovieData: DiscoverMovieItems[] | undefined
  setDiscoverMovieData: (data: DiscoverMovieItems[]) => void
}

export const useDiscoverMovieStore = create<DiscoverMovieState>(set => ({
  discoverMovieData: undefined,
  setDiscoverMovieData: data => set({ discoverMovieData: data })
}))

// interface DiscoverMovieState {
//   discoverMovieData: DiscoverMovieData | undefined
//   setDiscoverMovieData: (data: DiscoverMovieData | undefined) => void
// }

// export const useDiscoverMovieStore = create<DiscoverMovieState>(set => ({
//   discoverMovieData: undefined,
//   setDiscoverMovieData: data => set({ discoverMovieData: data })
// }))
