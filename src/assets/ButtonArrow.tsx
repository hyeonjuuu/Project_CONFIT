import styled from 'styled-components'

export interface ButtonArrowProps {
  fillcolor?: string
  $ishovered: boolean
}

function ButtonArrow({ fillcolor, $ishovered }: ButtonArrowProps) {
  return (
    <IconContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="112"
        height="13"
        viewBox="0 0 112 13"
        fill="none"
      >
        <path
          d="M95 1L111.1 12H0.899994"
          stroke={$ishovered === true ? '#aaeec4' : '#444444'}
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
      </svg>
    </IconContainer>
  )
}

export default ButtonArrow

const IconContainer = styled.div`
  position: absolute;
  bottom: 10%;
  right: 20%;
  /* top: -10%; */
`
