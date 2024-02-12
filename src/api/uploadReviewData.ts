import { useUserImageUrlStore } from '@/store/useUserImageUrlStore'
import { supabase } from '@/supabase/supabase'

// export const uploadImageFunction = async (file: File) => {
//   try {
//     console.log('file', file)

//     // const image = file.name.split('.').pop()
//     // const newName = `${Date.now()}.${image}`
//     // const imageName = file.map(item => item.name)
//     const imageName = file[0].name

//     console.log('name', imageName)

//     const { data: imageData, error: imageError } = await supabase.storage
//       .from('use_image')
//       .upload(`public/${imageName}`, file)
//     if (imageError) {
//       console.error(
//         `이미지 데이터 통신에 실패하였습니다..😵‍💫 ${imageError.message}`
//       )
//       throw imageError
//     } else {
//       return imageData?.path ?? null
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
/* -------------------------------------------------------------------------- */
// export const uploadImageFunction = async (files: File[]) => {
//   try {
//     const uploadFiles = files.map(async file => {
//       const { data: imageData, error: imageError } = await supabase.storage
//         .from('use_image')
//         .upload(`public/${file.name}`, file)

//       if (imageError) {
//         console.log('파일이 업로드 되지 않습니다.', imageError)
//         return
//       }
//       const res = supabase.storage
//         .from('use_image')
//         .getPublicUrl(imageData.path)
//       console.log(res)

//       setUploadedFileUrl((prev: any) => [...prev, res.data.publicUrl])
//     })

//     const imagePaths = await Promise.all(uploadFiles)
//     console.log(imagePaths)
//   } catch (error) {
//     console.error(error)
//   }
// }
/* -------------------------------------------------------------------------- */
// export const uploadImageFunction = async (files: File[]) => {
//   const { uploadedFileUrl, setUploadedFileUrl } = useUserImageUrlStore()
//   try {
//     const uploadFiles = files.map(async file => {
//       const { data: imageData, error: imageError } = await supabase.storage
//         .from('use_image')
//         .upload(`public/${file.name}`, file)

//       if (imageError) {
//         console.log('파일이 업로드 되지 않습니다.', imageError)
//         return
//       }
//       const res = supabase.storage
//         .from('use_image')
//         .getPublicUrl(imageData.path)
//       console.log(res)

//       setUploadedFileUrl([res])

//       // setUploadedFileUrl((prev: UserImageDataItems[]) => [
//       //   ...prev,
//       //   { data: res } // res 객체를 data 속성에 담아 전달
//       // ])
//     })

//     const imagePaths = await Promise.all(uploadFiles)
//     console.log(imagePaths)
//   } catch (error) {
//     console.error(error)
//   }
// }

/* -------------------------------------------------------------------------- */
export const useUploadImage = async (files: File[]) => {
  const uploadFiles = files.map(async file => {
    const { data: imageData, error: imageError } = await supabase.storage
      .from('use_image')
      .upload(`public/${file.name}`, file)

    if (imageError) {
      console.log('파일이 업로드 되지 않습니다.', imageError)
      return
    }
    const res = supabase.storage.from('use_image').getPublicUrl(imageData.path)

    return res
  })

  const imagePaths = await Promise.all(uploadFiles)
  return imagePaths
}
