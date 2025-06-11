import React from 'react'
import { Navigate, useParams } from 'react-router'
import useGetPlaylist from '../../hooks/useGetPlaylist'
import { styled, Typography, useTheme } from '@mui/material'
import LoadingPage from '../../common/components/LoadingPage'

const PlaylistDetailContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '200px',
  padding: '16px 16px 0px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  borderBottom: '0.5px solid white',
}))

const PlaylistHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
}))

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: playlist, isLoading } = useGetPlaylist({
    playlist_id: id || '',
  })
  console.log(playlist)
  const theme = useTheme() // 없으면 에러

  if (!id) return <Navigate to="/" />
  if (isLoading || !playlist) return <LoadingPage />

  const imageUrl = playlist.images?.[0]?.url || ''

  return (
    <PlaylistDetailContainer>
      <img
        src={imageUrl || '/images/noImage.png'}
        alt={playlist.name}
        loading="lazy"
        style={{ borderRadius: 8, width: 100, height: 100 }}
      />
      <PlaylistHeader>
        <Typography variant="h3" fontWeight={700} color="white">
          {playlist.name}
        </Typography>
        <Typography variant="h2" fontWeight={700} color="theme.primary">
          {playlist.owner.display_name}
        </Typography>
        <Typography variant="h2" fontWeight={700} color="theme.primary">
          {playlist.images?.length} songs
        </Typography>
      </PlaylistHeader>
    </PlaylistDetailContainer>
  )
}

export default PlaylistDetailPage
