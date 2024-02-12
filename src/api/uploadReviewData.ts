import { supabase } from '@/supabase/supabase'

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
/* -------------------------------------------------------------------------- */
