import { useMutation } from '@tanstack/react-query'
import { ExchangeTokenResponse } from '../models/auth'
import { exchangeToken } from '../apis/authApi'

const useExchangeToken = () => {
  return useMutation<ExchangeTokenResponse, Error, { code: string; codeVerifier: string }>({
    mutationFn: ({ code, codeVerifier }) => exchangeToken(code, codeVerifier),
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token)
    },
  })
}

export default useExchangeToken
