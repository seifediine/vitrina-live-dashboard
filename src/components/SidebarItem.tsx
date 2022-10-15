import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from '@mui/material'

import { ChevronUp, ChevronDown } from '../assets/icons'

const styles = {
  badge: {
    '& .MuiBadge-badge': {
      color: '#fff',
      borderRadius: '50%',
      width: 25,
      height: 25,
      marginRight: 1,
      backgroundColor: '#00c48c',
    },
  },
  icon: {
    minWidth: '36px',
  },
  active: {
    backgroundColor: '#f7f7f7',
    borderLeft: '3px solid #21b8f9',
    color: '#21B8F9',
  },
  collapse: {
    '& .MuiCollapse-wrapperInner': {
      background: '#E9F8FE',
    },
  },
}

const SidebarItem = ({
  name,
  icon,
  path,
  subList,
}: {
  name: string
  path?: string
  icon: JSX.Element
  subList?: Array<{ name: string; path: string }>
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  if (subList) {
    return (
      <>
        <ListItem disableGutters>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon style={styles.icon}>{icon}</ListItemIcon>
            <ListItemText
              primary={name}
              primaryTypographyProps={{ fontSize: '14px', color: '#103b66' }}
            />
            {open ? (
              <ChevronUp color='#103b66' />
            ) : (
              <ChevronDown color='#103b66' />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} sx={styles.collapse}>
          <List dense component='div' disablePadding>
            {subList.map((subListItem: { name: string; path: string }) => (
              <ListItem key={subListItem.name} disableGutters>
                <ListItemButton
                  sx={{ pl: '50px' }}
                  onClick={() => navigate(subListItem.path)}
                >
                  <ListItemText
                    primary={subListItem.name}
                    primaryTypographyProps={{
                      fontSize: '14px',
                      color: '#103b66',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </>
    )
  } else {
    return (
      <>
        <ListItem disableGutters>
          <ListItemButton
            onClick={() => navigate(path)}
            sx={location.pathname === path ? styles.active : null}
          >
            <ListItemIcon style={styles.icon}>{icon}</ListItemIcon>
            <ListItemText
              primary={name}
              primaryTypographyProps={{ fontSize: '14px', color: '#103b66' }}
            />
            {name === 'Orders' && <Badge sx={styles.badge} badgeContent={14} />}
          </ListItemButton>
        </ListItem>
      </>
    )
  }
}

export default SidebarItem
