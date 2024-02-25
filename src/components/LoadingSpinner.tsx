import { Player } from '@lottiefiles/react-lottie-player'
import lottie_Loading from '@/assets/lottie_Loading.json'
import styled from 'styled-components'

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Player
        autoplay
        loop
        src={lottie_Loading}
        style={{ height: '200px', width: '200px' }}
      />
      <SpinnerText>Loading...</SpinnerText>
    </SpinnerContainer>
  )
}

export default LoadingSpinner

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #edece8;
  padding: 0;
  overflow: hidden;
`
export const SpinnerText = styled.div`
  color: #00ddb3;
`
