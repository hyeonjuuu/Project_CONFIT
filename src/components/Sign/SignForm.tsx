import React, { useRef } from 'react'
import styled from 'styled-components'

interface InputProps {
  marginbottom?: string
}

interface SignFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SignForm({ onChange }: SignFormProps) {
  const validateEmailSpan = useRef<HTMLSpanElement>(null)
  return (
    <JoinField>
      <Label htmlFor="email">
        <JoinText>이메일</JoinText>
      </Label>
      <InputField
        type="email"
        name="email"
        placeholder="이메일"
        id="email"
        onChange={onChange}
      />
      <Validate ref={validateEmailSpan}>이메일이 이미 존재합니다.</Validate>
    </JoinField>
  )
}

export default SignForm

export const JoinWrapper = styled.div`
  background-color: #edece8;
  height: 100vh;
`

export const JoinContainer = styled.div`
  margin: auto;
  width: 640px;
  height: 100vh;
  background-color: #f0f0ee;
  display: flex;
  flex-direction: column;
`

export const JoinForm = styled.form`
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
  margin: 6px 0;
  /* background-color: teal; */
`

const Label = styled.label`
  position: relative;
  overflow: visible;
  width: fit-content;
  height: fit-content;
`

const InputField = styled.input<InputProps>`
  /* background-color: red; */
  height: 36px;
  border-radius: 6px;
  border: 1px solid #cdcdcd;
  padding: 0 8px;
  margin-bottom: ${({ marginbottom }) => marginbottom};
`

const JoinText = styled.strong`
  color: #303032;
`
const Validate = styled.span`
  font-size: 12px;
  padding-left: 6px;
  visibility: hidden;
  color: #ec4848;
  font-weight: 500;
  margin-bottom: 4px;
`
