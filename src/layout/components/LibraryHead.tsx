import BookmarkIcon from '@mui/icons-material/Bookmark'
import { styled, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const AddLibrary = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '30px',
}))

const LibraryHead = () => {
  return (
    <div>
      <AddLibrary>
        <BookmarkIcon />
        <Typography variant="h2" fontWeight={700}>
          Your Library
        </Typography>
        <AddRoundedIcon sx={{ color: 'green' }} />
      </AddLibrary>
    </div>
  )
}

export default LibraryHead
