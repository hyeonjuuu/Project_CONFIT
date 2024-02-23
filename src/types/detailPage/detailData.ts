interface DetailTVDataItems {
  adult: boolean
  backdrop_path: string
  created_by: [
    {
      credit_id: string
      gender: number
      id: number
      name: string
      profile_path: string
    }
  ]
  episode_run_time: []
  first_air_date: string
  genres: [
    {
      id: number
      name: string
    }
  ]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string | null
  last_episode_to_air: string | null
  name: string
  networks: [
    { id: number; logo_path: string; name: string; origin_country: string }
  ]
  next_episode_to_air: {
    air_date: string
    episode_number: number
    episode_type: string
    id: number
    name: string
    overview: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
    vote_average: number
    vote_count: number
  }
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: [
    {
      id: number
      logo_path: string
      name: string
      origin_country: string
    }
  ]
  production_countries: [
    {
      iso_3166_1: string
      name: string
    }
  ]
  seasons: [
    {
      air_date: string
      episode_count: number
      id: number
      name: string
      overview: string
      poster_path: string
      season_number: number
      vote_average: number
    }
  ]
  spoken_languages: [
    {
      english_name: string
      iso_639_1: string
      name: string
    }
  ]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

interface DetailMovieDataItems {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string | null
  budget: number
  genres: [
    {
      id: number
      name: string
    }
  ]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: [
    {
      id: number
      logo_path: string
      name: string
      origin_country: string
    }
  ]
  production_countries: [
    {
      iso_3166_1: string
      name: string
    }
  ]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: [
    {
      english_name: string
      iso_639_1: string
      name: string
    }
  ]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
