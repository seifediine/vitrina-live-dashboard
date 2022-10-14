import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  Typography,
  IconButton,
  Badge,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Menu, Zap } from '../assets/icons'
import logo from '../assets/images/logo.svg'
// import { titles } from '../data/data'
import { AppBar, DrawerHeader, Main } from '../styled'
import { LayoutProps } from '../data/types'

const drawerWidth = 255

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false)
  // const [title, setTitle] = useState(titles['/'])
  // const location = useLocation()

  // useEffect(() => {
  //   setTitle(titles[location.pathname])
  // }, [location.pathname])

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open} color='inherit' elevation={1}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Menu color='#103b66' />
          </IconButton>
          <Typography variant='h6' noWrap component='div' color='#103b66'>
            {/* {title} */}Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Badge badgeContent={2} color='error'>
            <Zap color='#103b66' />
            <Typography variant='body1' color='#103b66'>
              What's new
            </Typography>
          </Badge>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton>
            <img src={logo} alt='Vitrinalive Logo' />
          </IconButton>
          <IconButton onClick={toggleDrawer}>
            <Menu color='#103b66' />
          </IconButton>
        </DrawerHeader>
        {/* First List of Links on the Sidebar */}
        {/* <MainList /> */}
        <Divider />
        {/* Second List of Links on the Sidebar */}
        {/* <SecondList /> */}
        <DrawerHeader />
        {/* <SelectShop /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}

export default Layout
