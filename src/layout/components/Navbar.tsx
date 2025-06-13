// import { Avatar, Box } from '@mui/material'
// import React, { useState } from 'react'
// import LoginBtn from '../../common/components/LoginBtn'
// import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'

// const Navbar = () => {
//   const [imgError, setImgError] = useState(false)

//   const { data: userProfile } = useGetCurrentUserProfile()
//   const imageUrl = userProfile?.images?.[0]?.url

//   return (
//     <Box display="flex" justifyContent="flex-end" alignItems="center" height="40px">
//       {userProfile ? (
//         <Avatar
//           src={!imgError && imageUrl ? imageUrl : '/broken-image.jpg'}
//           onError={() => setImgError(true)}
//           alt="user-profile"
//           sx={{ width: 32, height: 32 }}
//         />
//       ) : (
//         <LoginBtn />
//       )}
//     </Box>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { Avatar, Box, Button, Dialog, DialogActions, DialogTitle, styled } from '@mui/material'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'
import LoginBtn from '../../common/components/LoginBtn'
import { useNavigate } from 'react-router'
import { useQueryClient } from '@tanstack/react-query'

const HoverContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
}))

const LogoutBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '42px',
  right: -25,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  zIndex: 10,
}))

const Navbar = () => {
  const [imgError, setImgError] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [open, setOpen] = useState(false)

  const { data: userProfile } = useGetCurrentUserProfile()
  const imageUrl = userProfile?.images?.[0]?.url
  const navigate = useNavigate()
  const logoutQueryClient = useQueryClient()

  const handleAvatarClick = () => {
    setShowLogout((prev) => !prev)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogoutConfirm = () => {
    localStorage.removeItem('access_token')
    logoutQueryClient.clear()
    navigate('/')
    window.location.reload()
  }

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" height="40px" position="relative">
      {userProfile ? (
        <HoverContainer>
          <Avatar
            src={!imgError && imageUrl ? imageUrl : '/broken-image.jpg'}
            onError={() => setImgError(true)}
            alt="user-profile"
            sx={{ width: 32, height: 32, cursor: 'pointer' }}
            onClick={handleAvatarClick}
          />
          {showLogout && (
            <LogoutBox>
              <Button variant="text" color="inherit" size="small" onClick={handleClickOpen}>
                Logout
              </Button>
            </LogoutBox>
          )}
        </HoverContainer>
      ) : (
        <LoginBtn />
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>로그아웃 하시겠습니까?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleLogoutConfirm} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Navbar
