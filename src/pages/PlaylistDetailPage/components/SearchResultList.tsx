import React from 'react'
import { styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { Track } from '../../../models/playlist'
import { useInView } from 'react-intersection-observer'

interface SearchResultListProps {
  list: Track[]
}

const HoverTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const NoBorderTableCell = styled(TableCell)(() => ({
  borderBottom: 'none',
}))

const AlbumImage = styled('img')({
  borderRadius: '4px',
  marginRight: '12px',
})

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

const SearchResultList = ({ list }: SearchResultListProps) => {
  const { ref, inView } = useInView()

  return (
    <TableWrapper style={{ marginTop: '40px' }}>
      <Table>
        <TableBody>
          {list.map((track, index) => (
            <HoverTableRow key={track.id || index}>
              <NoBorderTableCell>{index + 1}</NoBorderTableCell>
              <NoBorderTableCell>
                <AlbumImage src={track.album?.images[0]?.url || '/images/noImage.png'} width="40px" />
                {track.name}
              </NoBorderTableCell>
              <NoBorderTableCell>{track.album?.name}</NoBorderTableCell>
              <NoBorderTableCell>{track.artists?.[0]?.name || 'Unknown Artist'}</NoBorderTableCell>
              <NoBorderTableCell>
                <span ref={ref} style={{ display: 'inline-block', width: 1, height: 1 }} />
              </NoBorderTableCell>
            </HoverTableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  )
}

export default SearchResultList
