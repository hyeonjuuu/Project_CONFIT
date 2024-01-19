import { create } from 'zustand'

export interface LocationStore {
  locationPath: string
  setLocationPath: (locationPath: string) => void
}

export const useLocationStore = create<LocationStore>(set => ({
  locationPath: '',
  setLocationPath: (location: string) =>
    set(() => ({
      locationPath: location
    }))
}))
