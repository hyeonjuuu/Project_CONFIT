export interface DiscoverMovieData {
  results: DiscoverMovieItems[]
}

export interface DiscoverMovieItems {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title?: string
  video: boolean
  vote_average: number
  vote_count: number
  name?: string
}

export interface DiscoverTVData {
  results: DiscoverTVItems[]
}

export interface DiscoverTVItems {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name?: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  title?: string
}

export interface PlayingMovieData {
  results: PlayingMovieItems[]
}

export interface PlayingMovieItems {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  name?: string
}

export interface AiringData {
  results: AiringItems[]
}

export interface AiringItems {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  title?: string
}

export interface TrendingTVData {
  results: TrendingTVItems[]
}

export interface TrendingTVItems {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  first_air_date: string
  id: number
  media_type: string
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface RenderDataItems {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
  name?: string
  first_air_date?: string
  origin_country?: string[]
  original_name?: string
}
