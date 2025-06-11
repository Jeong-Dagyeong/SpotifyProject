import React, { useEffect } from 'react'
import { Episode, PlaylistTrack, Track } from '../../../models/playlist'
import { styled, TableCell, TableContainer, TableRow } from '@mui/material'
import useGetPlaylistItems from '../../../hooks/useGetPlaylistItems'
import { useInView } from 'react-intersection-observer'

interface DesktopPlaylistItemProps {
  index: number
  item: PlaylistTrack
  playlist_id: string
}

// const PlaylistContainer = styled('div')({
//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
// })

const DesktopPlaylistItem = ({ item, index, playlist_id }: DesktopPlaylistItemProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPlaylistItems({
    limit: 10,
    offset: 0,
    playlist_id,
  })

  console.log('ddd', data)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage])

  const isEpisode = (track: Track | Episode): track is Episode => {
    return 'description' in track
  }

  let now = new Date()
  let year = now.getFullYear()
  let month = String(now.getMonth() + 1).padStart(2, '0') // 1월은 1이 아니라 0이라서 +1 해주고, 1자리 수면 0 추가
  let date = String(now.getDate()).padStart(2, '0')
  let minutes = String(now.getMinutes())
  let seconds = String(now.getSeconds())
  let dateAdded = `${year}-${month}-${date}`
  let duration = `${minutes}:${seconds}`

  return (
    // <TableContainer ref={ref} sx={{ display: 'inline-block', width: 1, height: 1 }}>
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{item.track.name || 'no name'}</TableCell>
      <TableCell>{isEpisode(item.track) ? 'N/A' : item.track.album?.name}</TableCell>
      <TableCell>{dateAdded || 'Unknown'}</TableCell>
      <TableCell>
        {duration || 'Unknown'}
        <span ref={ref} style={{ display: 'inline-block', width: 1, height: 1 }} />
      </TableCell>
    </TableRow>
    // </TableContainer>
  )
}

export default DesktopPlaylistItem
