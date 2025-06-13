import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Button, Dialog, DialogActions, DialogTitle, styled, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import useCreatePlaylist from '../../hooks/useCreatePlaylist'
import LoginBtn from '../../common/components/LoginBtn'
import { getSpotifyAuthUrl } from '../../utils/auth'
import EmptyPlaylist from './EmptyPlaylist'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useQueryClient } from '@tanstack/react-query'

const AddLibrary = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '30px',
}))

const LibraryHead = () => {
  const { mutate: createPlaylist } = useCreatePlaylist()
  const token = localStorage.getItem('access_token')
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleCreateAndLogin = () => {
    if (!token) {
      openLoginDialog()
      return
    }
    createPlaylist({ name: '나의 플레이리스트' })
  }

  const openLoginDialog = () => {
    setOpen(true)
  }

  const redirectToLogin = async () => {
    const authUrl = await getSpotifyAuthUrl()
    window.location.href = authUrl
  }

  return (
    <div>
      <AddLibrary>
        <BookmarkIcon />
        <Typography variant="h2" fontWeight={700}>
          Your Library
        </Typography>
        <Button onClick={handleCreateAndLogin}>
          <AddRoundedIcon sx={{ color: 'green' }} />
        </Button>
      </AddLibrary>

      {!token && <EmptyPlaylist />}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>로그인 후 사용 가능합니다.</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={redirectToLogin} autoFocus>
            로그인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LibraryHead
