import { create } from 'zustand'

interface UserImageUrlState {
  uploadedFileUrl: UserImageData[]
  // setUploadedFileUrl: (data: UserImageDataItems[]) => void
  // setUploadedFileUrl: (data: UserImageData[]) => void
  setUploadedFileUrl: (data: any) => void
}

// export const useUserImageUrlStore = create<UserImageUrlState>(set => ({
//   uploadedFileUrl: [],
//   setUploadedFileUrl: (data: any) =>
//     set(state => ({ uploadedFileUrl: [...state.uploadedFileUrl, ...data] }))
// }))

/* -------------------------------------------------------------------------- */

// import { create } from 'zustand'

// interface UserImageUrlState {
//   uploadedFileUrl: UserImageDataItems[] | undefined
//   setUploadedFileUrl: (data: UserImageDataItems[]) => void
// }

export const useUserImageUrlStore = create<UserImageUrlState>(set => ({
  uploadedFileUrl: [],
  setUploadedFileUrl: data => set({ uploadedFileUrl: data })
}))
// export const useUserImageUrlStore = create<UserImageUrlState>(set => ({
//   uploadedFileUrl: [],
//   setUploadedFileUrl: data =>
//     set({ uploadedFileUrl: [...uploadedFileUrl, ...data] })
// }))

// export const useUserImageUrlStore = create<UserImageUrlState>(set => {
//   const uploadedFileUrl: UserImageDataItems[] = []

//   const setUploadedFileUrl = (data: UserImageDataItems[]) => {
//     set({ uploadedFileUrl: [...uploadedFileUrl, ...data] })
//   }

//   return {
//     uploadedFileUrl,
//     setUploadedFileUrl
//   }
// })
