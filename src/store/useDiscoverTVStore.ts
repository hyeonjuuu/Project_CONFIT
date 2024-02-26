import { DiscoverTVItems } from '@/types/mainPage/ContentsData'
import { create } from 'zustand'

interface DiscoverTVState {
  discoverTVData: DiscoverTVItems[] | undefined
  setDiscoverTVData: (data: DiscoverTVItems[]) => void
}

export const useDiscoverTVStore = create<DiscoverTVState>(set => ({
  discoverTVData: undefined,
  setDiscoverTVData: data => set({ discoverTVData: data })
}))
