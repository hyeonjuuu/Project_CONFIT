import axios from 'axios'

export const getSearchData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/multi?query=%EC%97%98%EB%A6%AC%EB%A9%98%ED%83%88&include_adult=false&language=ko-KR&page=1',
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
