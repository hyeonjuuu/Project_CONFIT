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
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const SpinnerText = styled.div`
  color: #00ddb3;
`
