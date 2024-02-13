import { create } from 'zustand'

interface SearchDataState {
  searchResult: SearchDataItems[] | undefined
  setSearchResult: (data: SearchDataItems[]) => void
}

export const useSearchStore = create<SearchDataState>(set => ({
  searchResult: undefined,
  setSearchResult: data => set({ searchResult: data })
}))
