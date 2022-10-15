import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
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
import { titles } from '../data/data'
import { LayoutProps } from '../data/types'
import {
  MainSidebarList,
  SecondarySidebarList,
  SelectShop,
} from '../components'

const drawerWidth = 255

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean
}>(({ theme, open }) => ({
  backgroundColor: '#e5e5e5',
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}))

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setTitle(titles[location.pathname])
  }, [location.pathname])

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
            {title}
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
        <MainSidebarList />
        <Divider />
        {/* Second List of Links on the Sidebar */}
        <SecondarySidebarList />
        <DrawerHeader />
        <SelectShop />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}

export default Layout
