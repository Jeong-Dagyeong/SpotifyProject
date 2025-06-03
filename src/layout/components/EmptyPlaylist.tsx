import { Box, Button, styled, Typography } from '@mui/material'

const EmptyPlaylist = () => {
  const Layout = styled('div')(({ theme }) => ({
    heigth: '100vh',
    // border: 'solid white',
  }))
  const AddPlaylist = styled('div')(({ theme }) => ({
    width: '80%',
    height: '150px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    padding: '20px',
    margin: '0 auto',
    marginTop: '10px',
  }))

  const CreatePlaylistBtn = styled(Button)(({ theme }) => ({
    width: '120px',
    height: '30px',
    borderRadius: '30px',
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
    textAlign: 'center',
    marginTop: '20px',
  }))
  return (
    <div>
      <Layout>
        <AddPlaylist>
          <Typography variant="h2" fontWeight={700}>
            Create your first playlist
          </Typography>
          <Typography variant="body1">It's easy, we'll help you</Typography>
          <CreatePlaylistBtn>
            <Typography variant="body1" fontWeight={700}>
              Create playlist
            </Typography>
          </CreatePlaylistBtn>
        </AddPlaylist>
      </Layout>
    </div>
  )
}

export default EmptyPlaylist
