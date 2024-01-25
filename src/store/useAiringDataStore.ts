import { AiringItems } from '@/types/mainPage/ContentsData'
import { create } from 'zustand'

interface AiringDataState {
  airingData: AiringItems[] | undefined
  setAiringData: (data: AiringItems[]) => void
}

export const useAiringDataStore = create<AiringDataState>(set => ({
  airingData: undefined,
  setAiringData: data => set({ airingData: data })
}))
