import { QueryClient } from '@tanstack/react-query'
import { ApiResponse } from './apiResponse'
import { ExternalUrls, Followers, Image, Owner } from './commonType'

export interface GetCurrentUserPlaylistRequest {
  limit?: number
  offset?: number
}

export type GetCurrentUserPlaylistResponse = ApiResponse<SimplifiedPlaylist>

export interface BasePlaylist {
  collaborative?: boolean
  description?: string | null
  external_urls?: ExternalUrls
  href?: string
  id?: string
  images?: Image[]
  name?: string
  owner: Owner
  public?: boolean
  snapshot_id?: string
  type?: 'playlist'
  uri?: string
}

export interface SimplifiedPlaylist extends BasePlaylist {
  tracks?: {
    href?: string
    total?: number
  }
}

export interface Playlist extends BasePlaylist {
  tracks: ApiResponse<PlaylistTrack>
  followers: Followers
}

export interface PlaylistTrack {
  added_at?: string | null
  added_by?: {
    external_urls?: ExternalUrls
    followers?: Followers
    href?: string
    id?: string
    type?: string
    uri?: string
  } | null
  is_local?: boolean
  track: Track | Episode
}

export interface Track {
  album?: {
    album_type: string
    total_tracks: number
    available_markets: string[]

    external_urls: ExternalUrls
    href: string
    id: string
  }
  images: Image[]
  // name: string
  release_date: string
  release_date_precision: string
  restriction?: {
    reason: string
  }
  // type: string
  // uri: string
  artists: SimplifiedAtrist[]
  available_markets?: string[]
  disc_number?: number
  duration_ms?: number
  explicit?: boolean
  external_ids?: {
    isrc?: string
    ean?: string
    upc?: string
  }
  external_urls: ExternalUrls
  href?: string
  id?: string
  is_playable?: boolean
  linked_from?: object
  restrictions?: {
    reason?: string
  }
  name?: string
  popularity?: number
  preview_url: string | null
  track_number?: number
  type?: string
  uri?: string
  is_local?: boolean
}

export interface Episode {
  audio_preview_url: string | null
  description: string
  html_description: string
  duration_ms: number
  explicit: boolean
  externaul_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  is_externally_hosted: boolean
  is_playable: boolean
  language?: string
  languages: string[]
  name: string
  release_date: string
  release_date_precision: string
  resume_point?: {
    fully_played?: boolean
    resume_position_ms?: number
    type: string
    uri: string
    restrictions?: {
      reason?: string
    }
    show: {
      available_markets: string[]
    }
    copyrights: {
      // array of CopyrightObject
      text?: string
      type?: string
    }
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
    // type: string
    // uri: string
    total_episodes: number
  }
}

export interface SimplifiedAtrist {
  external_urls?: {
    spotify?: string
  }
  href?: string
  id?: string
  name?: string
  type?: string
  uri?: string
}

export interface GetPlaylistRequest {
  playlist_id: string
  market?: string
  fields?: string
  additional_types?: string
}
