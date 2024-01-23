import {
  PlayingTVData,
  PlayingTVItems
} from '@/types/mainPage/discoverContents'
import { create } from 'zustand'

interface PlayingTVState {
  playingTVData: PlayingTVItems[] | undefined
  setPlayingTVData: (data: PlayingTVItems[]) => void
}

export const usePlayingTVStore = create<PlayingTVState>(set => ({
  playingTVData: undefined,
  setPlayingTVData: data => set({ playingTVData: data })
}))
