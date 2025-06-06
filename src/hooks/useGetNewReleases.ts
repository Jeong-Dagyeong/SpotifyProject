import { useQuery } from '@tanstack/react-query'
import useClientCredentialToken from './useClientCredentialToken'
import { getNewReleases } from '../apis/albumApi'

const useGetNewReleases = () => {
  const clientCredentialToken = useClientCredentialToken()
  return useQuery({
    queryKey: ['new-releases'],
    queryFn: async () => {
      if (!clientCredentialToken) {
        throw new Error('토큰 없어')
      }

      return getNewReleases(clientCredentialToken)
    },
  })
}

export default useGetNewReleases
