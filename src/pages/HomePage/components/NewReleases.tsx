import { Grid, Typography } from '@mui/material'
import useGetNewReleases from '../../../hooks/useGetNewReleases'
import LoadingPage from '../../../common/components/LoadingPage'
import ErrorMessage from '../../../common/components/ErrorMessage'

import Card from '../../../common/components/Card'

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewReleases()
  console.log(data)

  if (isLoading) {
    return <LoadingPage />
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />
  }
  return (
    <div>
      <div>
        <Typography variant="h1" paddingTop="8px">
          New Released Albums
        </Typography>
        {data && data.albums.items.length > 0 ? (
          <Grid container spacing={2}>
            {data.albums.items.map((album) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={album.id}>
                <Card
                  name={album.name}
                  artistName={album.artists.map((artist) => artist.name).join(', ')}
                  image={album.images[0].url}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h2">No data</Typography>
        )}
      </div>
    </div>
  )
}

export default NewReleases
