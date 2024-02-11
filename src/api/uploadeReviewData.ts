import { supabase } from '@/supabase/supabase'

export const uploadImageFunction = async (file: File) => {
  try {
    console.log('file', file)

    // const image = file.name.split('.').pop()
    // const newName = `${Date.now()}.${image}`
    // const imageName = file.map(item => item.name)
    const imageName = file[0].name

    console.log('name', imageName)

    const { data: imageData, error: imageError } = await supabase.storage
      .from('use_image')
      .upload(`public/${imageName}`, file)
    if (imageError) {
      console.error(
        `이미지 데이터 통신에 실패하였습니다..😵‍💫 ${imageError.message}`
      )
      throw imageError
    } else {
      return imageData?.path ?? null
    }
  } catch (error) {
    console.error(error)
  }
}
