import { useInfiniteQuery } from '@tanstack/react-query'
import { GetCurrentUserPlaylistRequest } from '../models/playlist'
import { getCurrentUserPlaylists } from '../apis/playlistApi'

// const useGetCurrentUserPlaylists = ({ limit, offset }: GetCurrentUserPlaylistRequest) => {
//   return useInfiniteQuery({
//     queryKey: ['current-user-playlists'],
//     queryFn: ({ pageParam = 0 }) => {
//       return getCurrentUserPlaylists({ limit, offset: pageParam })
//     },
//     initialPageParam: 0, // 첫 시작값
//     getNextPageParam: (lastPage) => {
//       if (lastPage.next) {
//         const url = new URL(lastPage.next)
//         const nextOffset = url.searchParams.get('offset')
//         return nextOffset ? parseInt(nextOffset) : undefined
//       }
//       return undefined
//     },
//   })
// }

const useGetCurrentUserPlaylists = ({ limit, offset }: GetCurrentUserPlaylistRequest, enabled: boolean = true) => {
  return useInfiniteQuery({
    queryKey: ['current-user-playlists'],
    queryFn: ({ pageParam = 0 }) => {
      return getCurrentUserPlaylists({ limit, offset: pageParam })
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next)
        const nextOffset = url.searchParams.get('offset')
        return nextOffset ? parseInt(nextOffset) : undefined
      }
      return undefined
    },
    enabled, // ✅ 이게 핵심입니다
  })
}

export default useGetCurrentUserPlaylists
