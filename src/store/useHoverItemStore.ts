import create from 'zustand'

interface UseHoverItemState {
  hoverItem: number
  setHoverItem: (hoverItem: number) => void
}

export const useHoverItemStore = create<UseHoverItemState>(set => ({
  hoverItem: 0,
  setHoverItem: (hoverItem: number) => set({ hoverItem })
}))
