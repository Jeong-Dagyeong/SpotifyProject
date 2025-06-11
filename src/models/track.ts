import { Artist } from './artist'
import { ExternalUrls, Image, Restriction } from './commonType'
import { SimplifiedAtrist } from './playlist'

export interface ITrack {
  album?: {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions?: Restriction
    type: string
    uri: string
    artists: SimplifiedAtrist[]
  }
  artists?: Artist[]
  available_markets?: string[]
  disc_number?: number
  duration_ms?: number
  explicit?: boolean
  external_ids?: {
    isrc?: string
    ean?: string
    upc?: string
  }
  external_urls?: ExternalUrls
  href?: string
  id?: string
  is_playable?: boolean
  linked_from?: ITrack
  restrictions?: Restriction
  name?: string
  popularity?: number
  preview_url?: string | null // Deprecated
  track_number?: number
  type?: string
  uri?: string
  is_local?: boolean
}
