import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { supabase } from '@/supabase/supabase'
import { useNavigate } from 'react-router-dom'
import { AuthInvalidCredentialsError } from '@supabase/supabase-js'
import { enterUserData, insertUserData } from '@/utils/joinin'

function JoinPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const navigate = useNavigate()
  const goToMain = () => {
    navigate('/')
  }

  useEffect(() => {
    console.log(email)
    console.log(password)
  }, [email, password])

  const validateEmailSpan = useRef<HTMLSpanElement>(null)

  const emailHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const passwordHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const passwordConfirmHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value)
  }

  // const signupHandler = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   try {
  //     const { data, error } = await supabase.auth.signUp({
  //       email,
  //       password
  //     })

  //     if (error) {
  //       console.log(error)
  //       // alert('이메일과 비밀번호를 확인해주세요')
  //       if (validateEmailSpan.current !== null) {
  //         validateEmailSpan.current.style.visibility = 'visible'
  //       }
  //     } else {
  //       alert('회원가입이 완료되었습니다.')
  //       goToMain()
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const uuid = await supabase.auth.signUp({
        email,
        password
      })

      if (uuid) {
        const userId = uuid.data.user?.id
        await insertUserData(email, userId)
        // alert('회원가입이 완료되었습니다.')
        // goToMain()
      } else {
        console.error('이메일과 비밀번호를 확인해주세요')
      }
    } catch (error) {
      console.error(`Error: ${error}`)
    }
  }

  return (
    <JoinWrapper>
      <JoinContainer>
        <LogoBox>로고 넣기!</LogoBox>
        <JoinForm action="">
          <JoinField>
            <Label htmlFor="email">
              <JoinText>이메일</JoinText>
            </Label>
            <InputField
              type="email"
              name="email"
              placeholder="이메일"
              id="email"
              onChange={emailHandler}
            />
            <ValidateEmail ref={validateEmailSpan}>
              중복된 이메일입니다.
            </ValidateEmail>
          </JoinField>
          <JoinField>
            <Label htmlFor="password">
              <JoinText>비밀번호</JoinText>
            </Label>
            <InputField
              name="password"
              type="password"
              placeholder="비밀번호"
              id="password"
              onChange={passwordHandler}
            />
          </JoinField>
          <JoinField>
            <Label htmlFor="passwordConfirm">
              <JoinText>비밀번호 확인</JoinText>
            </Label>
            <InputField
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              id="passwordConfirm"
              onChange={passwordConfirmHandler}
            />
          </JoinField>
          <JoinField>
            <SubmitButton
              type="submit"
              name="JoinIn"
              value="회원가입"
              onClick={e => signupHandler(e)}
            />
          </JoinField>
        </JoinForm>
      </JoinContainer>
    </JoinWrapper>
  )
}

export default JoinPage

const JoinWrapper = styled.div`
  background-color: #edece8;
  height: 100vh;
`

const JoinContainer = styled.div`
  margin: auto;
  width: 640px;
  height: 100vh;
  background-color: #f0f0ee;
  display: flex;
  flex-direction: column;
`

const LogoBox = styled.div`
  background-color: red;
  width: 120px;
  height: 120px;
  margin: 0 auto;
`

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  margin: auto;
  /* background-color: yellow; */
  width: 340px;
`

const JoinField = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: teal; */
`

const Label = styled.label`
  position: relative;
  overflow: visible;
  width: fit-content;
  height: fit-content;
`

const InputField = styled.input`
  /* background-color: red; */
  height: 36px;
  border-radius: 6px;
  border: 1px solid #cdcdcd;
  padding: 0 8px;
`

const SubmitButton = styled.input`
  height: 48px;
  border-radius: 6px;
  background-color: #303032;
  color: #aaeec4;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
const JoinText = styled.strong`
  color: #303032;
`
const ValidateEmail = styled.span`
  background-color: red;
  font-size: 12px;
  padding-left: 6px;
  visibility: hidden;
`
