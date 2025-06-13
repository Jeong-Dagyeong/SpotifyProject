import { useInfiniteQuery } from '@tanstack/react-query'
import { searchItemByKeyword } from '../apis/searchApi'
import { SearchRequestParams } from '../models/search'
import useClientCredentialToken from './useClientCredentialToken'

// const useSearchItemsByKeyword = (params: SearchRequestParams) => {
//   const clientCredentialToken = useClientCredentialToken()
//   return useInfiniteQuery({
//     queryKey: ['search', params],
//     queryFn: ({ pageParam = 0 }) => {
//       if(!clientCredentialToken) throw new Error('no token available')
//       return searchItemByKeyword(clientCredentialToken, params)
//     },
//     initialPageParam: 0,
//     // getNextPageParam(lastPage) => {
//     //   console.log(lastPage);

//     // }
//   })
// }
