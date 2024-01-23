import axios from 'axios'

const getPopularData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
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

export default getPopularData
