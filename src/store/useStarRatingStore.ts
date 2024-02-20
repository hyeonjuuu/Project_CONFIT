import { create } from 'zustand'

interface StarRatingState {
  starRating: number
  setStarRating: (state: number) => void
}

export const useStarRatingStore = create<StarRatingState>(set => ({
  starRating: 0,
  setStarRating: state => set({ starRating: state })
}))
