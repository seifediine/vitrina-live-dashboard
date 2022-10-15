import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ExternalLink } from '../assets/icons'

const styles = {
  header: {
    width: '100%',
    height: '180px',
    background:
      'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px',
  },
  welcomeText: {
    color: '#fff',
    fontWeight: 600,
  },
  link: {
    display: 'flex',
    gap: '10px',
    color: '#fff',
  },
}

interface HeaderProps {
  text: string
  email: string
}

const Header = ({ text, email }: HeaderProps) => {
  return (
    <Box style={styles.header}>
      <Typography variant='h4' style={styles.welcomeText}>
        {text}
      </Typography>
      <Link to='/'>
        <Typography variant='body1' style={styles.link}>
          {email}
        </Typography>
        <ExternalLink color='#fff' />
      </Link>
    </Box>
  )
}

export default Header
