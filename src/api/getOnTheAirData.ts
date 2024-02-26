import axios from 'axios'

export const getOnTheAirData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=2',
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: 'application/json'
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
