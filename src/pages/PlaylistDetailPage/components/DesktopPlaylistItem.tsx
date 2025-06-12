import React, { useEffect } from 'react'
import { Episode, PlaylistTrack, Track } from '../../../models/playlist'
import { styled, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import useGetPlaylistItems from '../../../hooks/useGetPlaylistItems'
import { useInView } from 'react-intersection-observer'

interface DesktopPlaylistItemProps {
  index: number
  item: PlaylistTrack
  playlist_id: string
}

const NoBorderTableCell = styled(TableCell)(() => ({
  borderBottom: 'none',
}))

const HoverTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

// const PlaylistContainer = styled('div')({
//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
// })

// const TableRow = styled('table')(({ theme }) => ({
//   maxHeight: '70vh', // 원하는 스크롤 영역 높이
//   overflowY: 'auto',
//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
//   msOverflowStyle: 'none', // IE, Edge
//   scrollbarWidth: 'none', // Firefox
// }))

const DesktopPlaylistItem = ({ item, index, playlist_id }: DesktopPlaylistItemProps) => {
  // const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPlaylistItems({
  //   limit: 10,
  //   offset: 0,
  //   playlist_id,
  // })

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPlaylistItems({
    playlist_id,
    limit: 10,
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
    // <PlaylistTableContainer>
    <HoverTableRow>
      <NoBorderTableCell>{index}</NoBorderTableCell>
      <NoBorderTableCell>{item.track.name || 'no name'}</NoBorderTableCell>
      <NoBorderTableCell>{isEpisode(item.track) ? 'N/A' : item.track.album?.name}</NoBorderTableCell>
      <NoBorderTableCell>{dateAdded || 'Unknown'}</NoBorderTableCell>
      <NoBorderTableCell>
        {duration || 'Unknown'}
        <span ref={ref} style={{ display: 'inline-block', width: 1, height: 1 }} />
      </NoBorderTableCell>
    </HoverTableRow>
    //   // </PlaylistTableContainer>
    //   // <PlaylistTableContainer>
    //   //   <TableContainer>
    //   //     <Table>
    //   //       <TableBody>
    //   //         {items.map((item, index) => (
    //   //           <DesktopPlaylistItem key={item.track.id} item={item} index={index + 1} playlist_id={playlistId} />
    //   //         ))}
    //   //       </TableBody>
    //   //     </Table>
    //   //   </TableContainer>
    //   // </PlaylistTableContainer>
  )
}

export default DesktopPlaylistItem
