import axios from 'axios'

export const getMovieDetailData = async (movieId: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
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

/* -------------------------------------------------------------------------- */

export const getTvDetailData = async (tvId: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}?language=ko-KR`,
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
