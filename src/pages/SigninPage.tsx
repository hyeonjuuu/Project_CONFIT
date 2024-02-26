import { useEffect, useRef, useState } from 'react'
import {
  InputField,
  JoinContainer,
  JoinField,
  JoinForm,
  JoinText,
  JoinWrapper,
  Label,
  SignBackButton,
  SubmitButton,
  Validate
} from './SignupPage'
import { supabase } from '@/supabase/supabase'
import { useNavigate } from 'react-router-dom'
import { BackButtonIcon } from './DetailPage'
import buttonBackRegular from '@/assets/buttonBackRegular.svg'

function SigninPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateEmailSpan = useRef<HTMLSpanElement>(null)

  const navigate = useNavigate()
  const goToMain = () => {
    navigate('/')
  }
  const handleBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (email !== '') {
      setTimeout(() => {
        validateEmail(email)
      }, 1500)
    }
  }, [email, password])

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    // console.log(email)
  }
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  function validateEmail(email: string) {
    const emailValidation =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailValidation.test(String(email).toLowerCase()) === true) {
      if (validateEmailSpan.current !== null) {
        validateEmailSpan.current.style.visibility = 'hidden'
      }
    } else if (emailValidation.test(String(email).toLowerCase()) === false) {
      if (validateEmailSpan.current !== null) {
        validateEmailSpan.current.style.visibility = 'visible'
      }
    }
  }

  const signinHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      let { data: users, error: userError } = await supabase
        .from('user')
        .select('email')
        .eq('email', email)
      if (error) {
        console.error(error)
      }

      if (data.user && data.session !== null && users) {
        // alert('로그인 성공')
        goToMain()
      } else {
        alert('이메일과 비밀번호를 확인해주세요')
        console.error(userError)
      }
    } catch (error) {
      alert('이메일과 비밀번호를 확인해주세요')
      console.error(`Error: ${error}`)
    }
  }

  return (
    <JoinWrapper>
      <SignBackButton onClick={handleBack}>
        <BackButtonIcon src={buttonBackRegular} alt="" />
      </SignBackButton>
      <JoinContainer>
        <JoinForm action="">
          <JoinField>
            <Label htmlFor="email">
              <JoinText>이메일</JoinText>
            </Label>
            <InputField
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요."
              id="email"
              onChange={emailHandler}
            />
            <Validate ref={validateEmailSpan}>
              잘못된 형식의 이메일 주소입니다.
            </Validate>
          </JoinField>
          <JoinField height="92px">
            <Label htmlFor="password">
              <JoinText>비밀번호</JoinText>
            </Label>
            <InputField
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              id="password"
              onChange={passwordHandler}
            />
          </JoinField>

          <JoinField>
            <SubmitButton
              type="submit"
              name="Signin"
              value="로그인"
              onClick={e => signinHandler(e)}
            />
          </JoinField>
        </JoinForm>
      </JoinContainer>
    </JoinWrapper>
  )
}

export default SigninPage
