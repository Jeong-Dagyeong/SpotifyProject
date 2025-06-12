import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Button, styled, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import useCreatePlaylist from '../../hooks/useCreatePlaylist'
import LoginBtn from '../../common/components/LoginBtn'
import { getSpotifyAuthUrl } from '../../utils/auth'

const AddLibrary = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '30px',
}))

const LibraryHead = () => {
  const { mutate: createPlaylist } = useCreatePlaylist()
  const hadleCreatePlaylist = () => {
    if (!localStorage.getItem('access_token')) {
      getSpotifyAuthUrl()
    }
    createPlaylist({ name: '나의 플레이리스트' })
  }

  return (
    <div>
      <AddLibrary>
        <BookmarkIcon />
        <Typography variant="h2" fontWeight={700}>
          Your Library
        </Typography>
        <Button onClick={hadleCreatePlaylist}>
          <AddRoundedIcon sx={{ color: 'green' }} />
        </Button>
      </AddLibrary>
    </div>
  )
}

export default LibraryHead
