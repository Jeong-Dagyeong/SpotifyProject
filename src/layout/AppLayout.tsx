import { Box, styled, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryHead from './components/LibraryHead'
import { useEffect, useState } from 'react'
import Library from './components/Library'
import Navbar from './components/Navbar'
import EmptyPlaylist from './components/EmptyPlaylist'

const Layout = styled('div')({
  display: 'flex',
  height: '100vh',
  padding: '8px',
})

const Sidebar = styled('div')(({ theme }) => ({
  width: '331px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: '100%',
  // height: '13vh',
  padding: '20px',
  marginBottom: '8px',
  marginRight: '8px',
}))

const NavList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  color: theme.palette.text.secondary,

  '&.active': {
    color: theme.palette.text.primary,
  },

  '& svg': {
    color: theme.palette.text.secondary,
  },

  '&.active svg': {
    color: theme.palette.text.primary,
  },
}))

const AppLayout = () => {
  return (
    <div>
      <Layout>
        <Sidebar>
          <ContentBox>
            <NavList>
              <StyledNavLink to="/">
                <HomeIcon />
                <Typography variant="h2" fontWeight={700}>
                  Home
                </Typography>
              </StyledNavLink>
              <StyledNavLink to="/search">
                <SearchIcon />
                <Typography variant="h2" fontWeight={700}>
                  Search
                </Typography>
              </StyledNavLink>
            </NavList>
          </ContentBox>
          <LibraryHead />
          <Library />
        </Sidebar>
        <ContentBox>
          <Navbar />
          <Outlet />
        </ContentBox>
      </Layout>
    </div>
  )
}

export default AppLayout
