import axios from 'axios'
import { clientId, clientSecret } from '../configs/authConfig'
import { ClientCredentialTokenResponse } from '../models/auth'

const encodedBase64 = (data: string): string => {
  if (typeof window !== 'undefined') {
    // 브라우저 환경
    return btoa(data)
  } else {
    // node.js 환경

    return Buffer.from(data).toString('base64')
  }
}

export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
  try {
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
    })
    const response = await axios.post('https://accounts.spotify.com/api/token', body, {
      headers: {
        Authorization: `Basic ${encodedBase64(clientId + ':' + clientSecret)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (!response.data?.access_token) {
      throw new Error('No access_token in response')
    }

    return response.data
  } catch (error: any) {
    console.log('CLIENT_ID:', clientId)
    console.log('CLIENT_SECRET:', clientSecret)
    console.log('ENCODED:', encodedBase64(clientId + ':' + clientSecret))
    console.error('Failed to fetch token:', error.response?.data || error.message)

    throw new Error('Token fetch error')
  }
}

// src/api/spotifyAuth.ts

// import axios from 'axios'
// import { clientId, clientSecret } from '../configs/authConfig'
// import { ClientCredentialTokenResponse } from '../models/auth'

// /**
//  * 인코딩 유틸 함수 (Base64)
//  */
// const encodedBase64 = (data: string): string => {
//   if (typeof window !== 'undefined') {
//     return btoa(data)
//   } else {
//     return Buffer.from(data).toString('base64')
//   }
// }

// /**
//  * Spotify Client Credentials Flow - 토큰 발급
//  */
// export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
//   // 환경변수 유효성 검증
//   if (!clientId || !clientSecret) {
//     throw new Error('Missing required environment variables')
//   }

//   const base64 = encodedBase64(`${clientId}:${clientSecret}`)

//   try {
//     const body = new URLSearchParams({
//       grant_type: 'client_credentials',
//     })

//     const response = await axios.post('https://accounts.spotify.com/api/token', body, {
//       headers: {
//         Authorization: `Basic ${base64}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     })

//     if (!response.data?.access_token) {
//       throw new Error('No access_token in response')
//     }

//     return response.data
//   } catch (error: any) {
//     // 디버깅용 출력
//     console.log('CLIENT_ID:', clientId)
//     console.log('CLIENT_SECRET:', clientSecret)
//     console.log('ENCODED:', encodedBase64(clientId + ':' + clientSecret))
//     console.error('Failed to fetch token:', error.response?.data || error.message)

//     throw new Error('Token fetch error')
//   }
// }
