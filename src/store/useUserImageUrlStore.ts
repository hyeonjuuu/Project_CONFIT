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

// interface UserImageUrlState {
//   uploadedFileUrl: (string | undefined)[]
//   setUploadedFileUrl: (data: (string | undefined)[]) => Promise<void>
// }

// export const useUserImageUrlStore = create<UserImageUrlState>(set => ({
//   uploadedFileUrl: [],
//   setUploadedFileUrl: async (data: (string | undefined)[]) => {
//     return new Promise(resolve => {
//       set({ uploadedFileUrl: data })
//       resolve()
//     })
//   }
// }))
