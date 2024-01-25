import axios from 'axios'

export const getDiscoverMovieData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?certification_country=KR&include_adult=false&include_video=false&language=ko-KR&page=1&region=KR&sort_by=popularity.desc',
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
export const getDiscoverTVData = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?certification_country=KR&include_adult=false&include_video=false&language=ko-KR&page=1&region=KR&sort_by=popularity.desc' &&
        'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=ko-KR&page=1&sort_by=popularity.desc&watch_region=KR',
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
// const getDiscoverData = async () => {
//   try {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1' &&
//         'https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1',
//       {
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
//           accept: 'application/json'
//         }
//       }
//     )
//     return response.data
//   } catch (error) {
//     console.error(error)
//   }
// }

// export default getDiscoverData
