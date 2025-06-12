import { Button, styled } from '@mui/material'
import { getSpotifyAuthUrl } from '../../utils/auth'

const LoginBtn = () => {
  const login = () => {
    getSpotifyAuthUrl()
  }
  return (
    <Button variant="contained" color="secondary" size="large" onClick={login}>
      Login
    </Button>
  )
}

export default LoginBtn
