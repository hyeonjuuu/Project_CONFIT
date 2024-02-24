import { create } from 'zustand'

interface DetailTVDataState {
  detailTVData: DetailTVDataItems | undefined
  setDetailTVData: (data: DetailTVDataItems) => void
  detailMovieData: DetailMovieDataItems | undefined
  setDetailMovieData: (data: DetailMovieDataItems) => void
}

export const useDetailDataStore = create<DetailTVDataState>(set => ({
  detailTVData: undefined,
  setDetailTVData: data => set({ detailTVData: data }),
  detailMovieData: undefined,
  setDetailMovieData: data => set({ detailMovieData: data })
}))
