import { LastPage } from '@mui/icons-material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { GetPlaylistItemsRequest } from '../models/playlist'
import { getPlaylistItems } from '../apis/playlistApi'

// const usePlaylistItems = (params: GetPlaylistItemsRequest) => {
//   return useInfiniteQuery({
//     queryKey: ['playlist-items', params],
//     queryFn: ({ pageParam }) => {
//       return getPlaylistItems({ offset: pageParam, ...params })
//     },
//     initialPageParam: 0,
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

// ✅ 수정된 버전
const usePlaylistItems = ({ playlist_id, limit }: Omit<GetPlaylistItemsRequest, 'offset'>) => {
  return useInfiniteQuery({
    queryKey: ['playlist-items', playlist_id],
    queryFn: ({ pageParam = 0 }) => getPlaylistItems({ playlist_id, limit, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next)
        const nextOffset = url.searchParams.get('offset')
        return nextOffset ? parseInt(nextOffset) : undefined
      }
      return undefined
    },
  })
}

export default usePlaylistItems
