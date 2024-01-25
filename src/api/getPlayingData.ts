import axios from 'axios'

export const getPlayingMovieData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR',
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

export const getAiringData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/tv/airing_today?language=ko-KR&page=1&timezone=Asia%2FSeoul',
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

export const getTrendingTVData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/tv/day?language=ko-KR',
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
