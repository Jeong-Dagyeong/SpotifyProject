import React from 'react'
import { Navigate, useParams } from 'react-router'
import useGetPlaylist from '../../hooks/useGetPlaylist'
import { styled, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import LoadingPage from '../../common/components/LoadingPage'
import usePlaylistItems from '../../hooks/useGetPlaylistItems'
import DesktopPlaylistItem from './components/DesktopPlaylistItem'
import { PAGE_LIMIT } from '../../configs/commonConfig'

const PlaylistDetailContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '16px 16px 0px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
}))

const PlaylistHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
}))

const TableWrapper = styled('div')(() => ({
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 300px - 100px)',
  width: '100%',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}))

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: playlist, isLoading } = useGetPlaylist({
    playlist_id: id || '',
  })
  console.log(playlist)

  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePlaylistItems({ playlist_id: id || '', limit: 10 })

  console.log('ddd', playlistItems)

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
          {playlist?.tracks?.total ?? 0} songs
        </Typography>
      </PlaylistHeader>
      {playlist?.tracks?.total === 0 ? (
        <Typography>Search</Typography>
      ) : (
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Date Added</TableCell>
                <TableCell>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playlistItems?.pages.map((page, pageIndex) =>
                page.items.map((item, itemIndex) => {
                  return (
                    <DesktopPlaylistItem
                      item={item}
                      key={pageIndex * PAGE_LIMIT + itemIndex + 1}
                      index={pageIndex * PAGE_LIMIT + itemIndex + 1}
                      playlist_id={id}
                    />
                  )
                })
              )}
            </TableBody>
          </Table>
        </TableWrapper>
      )}
    </PlaylistDetailContainer>
  )
}

export default PlaylistDetailPage
