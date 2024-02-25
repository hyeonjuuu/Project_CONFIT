import { Player } from '@lottiefiles/react-lottie-player'
import lottie_Feat_Progress from '@/assets/lottie_Feat_Progress.json'
import { SpinnerContainer, SpinnerText } from '../LoadingSpinner'

function SearchPageProgress() {
  return (
    <SpinnerContainer>
      <Player
        autoplay
        loop
        src={lottie_Feat_Progress}
        style={{ height: '200px', width: '200px' }}
      />
      <SpinnerText>기능구현 진행중 입니다 :)</SpinnerText>
    </SpinnerContainer>
  )
}

export default SearchPageProgress
