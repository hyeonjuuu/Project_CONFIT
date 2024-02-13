import axios from 'axios'

export const getSearchData = async (search: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${search}}&include_adult=true&language=ko-KR&page=1`,
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
