import { ExternalUrls, Image, Restriction } from './commonType'

export interface IEpisode {
  audio_preview_url: string | null
  description: string
  html_description: string
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  is_externally_hosted: boolean
  is_playable: boolean
  language?: string // Deprecated
  languages: string[]
  name: string
  release_date: string
  release_date_precision: string
  reusme_point?: {
    fully_played?: boolean
    resume_position_ms?: number
  }
  type: string
  uri: string
  restrictions: Restriction
  show: {
    available_markets: string[]
    copyrights: {
      text?: string
      tyope?: string
    }[]
    description: string
    html_description: string
    explicit: boolean
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    is_externally_hosted: boolean
    languages: string[]
    media_type: string
    name: string
    publisher: string
    type: string
    uri: string
    total_episodes: number
  }
}
