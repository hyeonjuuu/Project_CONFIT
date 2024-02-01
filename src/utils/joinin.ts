import { supabase } from '@/supabase/supabase'
import { AuthResponse } from '@supabase/supabase-js'

interface UserData {
  email: string
  username: string
  nickname: string
  password: string
}

export const enterUserData = async (
  userData: UserData
): Promise<string | undefined> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password
    })

    if (data) return data?.user?.id
    else console.log('회원가입 실패:', error)
  } catch (error) {
    console.error(error)
  }
}

export const insertUserData = async (
  email: string,
  userId: string | undefined
) => {
  try {
    const { data, error } = await supabase
      .from('user')
      .insert([
        {
          email: email,
          uuid: userId
        }
      ])
      .select()

    if (data) console.log(data)
    else console.log(error)
  } catch (error) {
    console.error(`❌ 데이터 삽입 실패: ${error}`)
  }
}
