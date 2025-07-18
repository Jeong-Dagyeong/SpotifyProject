import { useInfiniteQuery } from '@tanstack/react-query'
import { searchItemByKeyword } from '../apis/searchApi'
import { SearchRequestParams } from '../models/search'
import useClientCredentialToken from './useClientCredentialToken'

const useSearchItemsByKeyword = (params: SearchRequestParams) => {
  const clientCredentialToken = useClientCredentialToken()
  return useInfiniteQuery({
    queryKey: ['search', params],
    queryFn: ({ pageParam = 0 }) => {
      if (!clientCredentialToken) throw new Error('no token available')
      return searchItemByKeyword(clientCredentialToken, {
        ...params,
        offset: pageParam,
      })
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPageUrl =
        lastPage.tracks?.next ||
        lastPage.artists?.next ||
        lastPage.albums?.next ||
        lastPage.playlists?.next ||
        lastPage.shows?.next ||
        lastPage.episode?.next ||
        lastPage.audiobooks?.next

      if (nextPageUrl) {
        const nextOffset = new URL(nextPageUrl).searchParams.get('offset')
        return nextOffset ? parseInt(nextOffset) : undefined
      }
      return undefined
    },
    enabled: !!params.q,
  })
}

export default useSearchItemsByKeyword
