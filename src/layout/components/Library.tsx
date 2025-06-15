import { ImageList, ImageListItem, Typography, styled } from '@mui/material'
import useGetCurrentUserPlaylists from '../../hooks/useGetCurrentUserPlaylists'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router'

const PlaylistContainer = styled('div')(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 240px)',
  height: '100%',
  padding: '12px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  [theme.breakpoints.down('sm')]: {
    maxHeight: 'calc(100vh - 65px - 119px)',
  },
}))

const HoverPlaylistItem = styled(ImageListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const Library = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('access_token')))
  const navigate = useNavigate()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetCurrentUserPlaylists(
    {
      limit: 10,
      offset: 0,
    },
    isLoggedIn
  )
  const { data: user } = useGetCurrentUserProfile()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (!isLoggedIn || !user || !data) return

    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, isLoggedIn, user, data])

  useEffect(() => {
    const syncLogin = () => setIsLoggedIn(Boolean(localStorage.getItem('access_token')))
    window.addEventListener('storage', syncLogin)
    return () => window.removeEventListener('storage', syncLogin)
  }, [])
  if (!user || !data) return null

  const handleClick = (id: string) => {
    navigate(`/playlist/${id}`)
  }

  return (
    <PlaylistContainer>
      <ImageList cols={2} gap={16} variant="standard">
        {data.pages.map((page, pageIndex) =>
          page.items.map((playlist, i) => {
            const imageUrl = Array.isArray(playlist.images) && playlist.images.length > 0 ? playlist.images[0].url : ''
            const id = playlist.id
            if (!id) return null
            return (
              <HoverPlaylistItem key={`${pageIndex}-${playlist.id}`} onClick={() => handleClick(id)}>
                <img
                  src={imageUrl || '/images/noImage.png'}
                  alt={playlist.name}
                  loading="lazy"
                  style={{ borderRadius: 8 }}
                />
                <Typography variant="subtitle1" fontWeight={700} color="limegreen" mt={1}>
                  {playlist.name}
                </Typography>
                <Typography variant="body2" color="#aaa">
                  Playlist • {playlist.owner.display_name}
                </Typography>
              </HoverPlaylistItem>
            )
          })
        )}
      </ImageList>
      <div ref={ref} />
    </PlaylistContainer>
  )
}

export default Library
