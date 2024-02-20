import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body, #root {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: #303032;
  margin: 0;
  padding: 0;
  margin-left : auto;
  margin-right: auto;
  font-weight: 300;
  background-color: #edece8;
}

button {
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 400;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: inherit;
}

input {
  font-family: 'Pretendard';

}

a{
  text-decoration: none;
}

label{
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}



`

export default GlobalStyle
