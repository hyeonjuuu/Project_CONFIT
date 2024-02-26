import axios from 'axios'

export const getTrendingData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week?language=ko-KR',
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

export const getTrendingMovieData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?language=ko-KR',
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
