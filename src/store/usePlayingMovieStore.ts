import { PlayingMovieItems } from '@/types/mainPage/ContentsData'
import { create } from 'zustand'

interface PlayingMovieState {
  playingMovieData: PlayingMovieItems[] | undefined
  setPlayingMovieData: (data: PlayingMovieItems[]) => void
}

export const usePlayingMovieStore = create<PlayingMovieState>(set => ({
  playingMovieData: undefined,
  setPlayingMovieData: data => set({ playingMovieData: data })
}))
