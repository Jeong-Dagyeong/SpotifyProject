import { Box, InputAdornment, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useSearchItemsByKeyword from '../../../hooks/useSearchItemsWithKeyword'
import { SEARCH_TYPE } from '../../../models/search'
import SearchResultList from './SearchResultList'
import LoadingPage from '../../../common/components/LoadingPage'
import SearchIcon from '@mui/icons-material/Search'

const EmptyPlaylistWithSearch = () => {
  const EmptyResult = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginTop: '40px',
  })

  const [keyword, setKeyword] = useState<string>('')
  console.log('keyword', keyword)

  const { data, error, isLoading } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track],
  })
  console.log('ddd', data)

  const tracks = data?.pages[0]?.tracks?.items ?? [] //널 병합 연산자라고 불립니다. 이 연산자는 왼쪽의 값이 null 또는 undefined일 때 오른쪽의 값을 반환하고, 그렇지 않으면 왼쪽의 값을 반환합니다.
  const hasResults = tracks.length > 0

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  return (
    <div>
      <Typography variant="h1" my="10px" marginBottom="20px">
        Let's find something for your playlist
      </Typography>
      <TextField
        value={keyword}
        onChange={handleSearchKeyword}
        placeholder="Search..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'white' }} />
              </InputAdornment>
            ),
          },
        }}
        style={{ width: '100%' }}
      />
      {/* </SearchEngine> */}
      {isLoading ? (
        <LoadingPage />
      ) : hasResults ? (
        <SearchResultList list={tracks} />
      ) : keyword === '' ? (
        <></> // 검색어가 없을 때는 아무것도 표시하지 않음
      ) : (
        <EmptyResult>
          <Typography variant="h1" gutterBottom>
            {`검색결과 : "${keyword}"는 존재하지 않습니다.`}
          </Typography>
        </EmptyResult>
      )}
    </div>
  )
}

export default EmptyPlaylistWithSearch
