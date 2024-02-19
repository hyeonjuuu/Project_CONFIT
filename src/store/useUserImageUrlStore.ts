import { create } from 'zustand'

interface UserImageUrlState {
  uploadedFileUrl: (string | undefined)[]
  setUploadedFileUrl: (data: (string | undefined)[]) => void
}

export const useUserImageUrlStore = create<UserImageUrlState>(set => ({
  uploadedFileUrl: [],
  setUploadedFileUrl: data => set({ uploadedFileUrl: data })
}))

/* -------------------------------------------------------------------------- */
