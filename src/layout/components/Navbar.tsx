import { Avatar, Box } from '@mui/material'
import React, { useState } from 'react'
import LoginBtn from '../../common/components/LoginBtn'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'

const Navbar = () => {
  const [imgError, setImgError] = useState(false)

  const { data: userProfile } = useGetCurrentUserProfile()
  const imageUrl = userProfile?.images?.[0]?.url

  return (
    // <Box display="flex" justifyContent="flex-end" alignItems="center" height="24px">
    //   {userProfile ? userProfile?.images?.[0]?.url : <LoginBtn />}
    // </Box>
    <Box display="flex" justifyContent="flex-end" alignItems="center" height="40px">
      {userProfile ? (
        <Avatar
          src={!imgError && imageUrl ? imageUrl : '/broken-image.jpg'}
          onError={() => setImgError(true)}
          alt="user-profile"
          sx={{ width: 32, height: 32 }}
        />
      ) : (
        <LoginBtn />
      )}
    </Box>
  )
}

export default Navbar
