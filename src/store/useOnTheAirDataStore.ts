import { OnTheAirDataItems } from '@/types/mainPage/ContentsData'
import { create } from 'zustand'

interface OnTheAirDataState {
  onTheAirData: OnTheAirDataItems[] | undefined
  setOnTheAirData: (data: OnTheAirDataItems[]) => void
}

export const useOnTheAirDataStore = create<OnTheAirDataState>(set => ({
  onTheAirData: undefined,
  setOnTheAirData: data => set({ onTheAirData: data })
}))
