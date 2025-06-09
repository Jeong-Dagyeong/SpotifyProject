import useGetCurrentUserPlaylists from '../../hooks/useGetCurrentUserPlaylists'
import EmptyPlaylist from './EmptyPlaylist'

const Library = () => {
  const { data } = useGetCurrentUserPlaylists({ limit: 10, offset: 0 })
  console.log('ddd', data)

  return <EmptyPlaylist />
}

export default Library
