export interface PopularData {
  results: PopularDataItem[]
}

export interface PopularDataItem {
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
}

export type popularContentsWatchProviderData =
  popularContentsWatchProviderItem[]

export interface popularContentsWatchProviderItem {
  id: number
  results: {
    KR: {
      provider_id: number
      buy: any
      flatrate: { provider_name: string }[]
      link: string
    }
  }
}

export interface WatchProviderKRItems {
  flatrate: []
  link: string
}
