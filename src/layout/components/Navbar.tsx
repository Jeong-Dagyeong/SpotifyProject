import { Box } from '@mui/material'
import React from 'react'
import LoginBtn from '../../common/components/LoginBtn'

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" height="24px">
      <LoginBtn />
    </Box>
  )
}

export default Navbar
