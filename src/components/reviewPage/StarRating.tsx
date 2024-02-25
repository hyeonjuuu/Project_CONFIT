import { useStarRatingStore } from '@/store/useStarRatingStore'
import { useEffect } from 'react'
import { PiStarFill, PiStarLight } from 'react-icons/pi'

function StarRating() {
  const { starRating, setStarRating } = useStarRatingStore()

  useEffect(() => {
    console.log(starRating)
  }, [starRating])

  return (
    <div>
      {[...Array(starRating)].map(i => (
        <PiStarFill
          key={i}
          onClick={() => setStarRating(i + 1)}
          color="#f4d84a"
          size={30}
          stroke="#bab09c"
        />
      ))}
      {[...Array(5 - starRating)].map(i => (
        <PiStarLight
          key={i}
          onClick={() => setStarRating(starRating + i + 1)}
          color="#bab09c"
          size={30}
          stroke="#bab09c"
        />
      ))}
    </div>
  )
}

export default StarRating
