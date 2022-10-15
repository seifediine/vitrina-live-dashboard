import { Paper, Box, Typography } from '@mui/material'
import { Eye, ArrowRight, ChevronDown } from '../../assets/icons'
import { Link } from 'react-router-dom'

const styles = {
  paper: {
    height: '220px',
    padding: '24px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#103b66',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  cardData: {
    fontWeight: 'bold',
    fontSize: '42px',
    color: '#103b66',
  },
  cardLink: {
    color: '#21b8f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}

const Visitors = () => {
  return (
    <Paper sx={styles.paper}>
      <Box style={styles.cardHeader}>
        <Box style={styles.cardTitle}>
          <Eye color='#103B66' />
          <Typography variant='h6' color='#103B66'>
            Visitors
          </Typography>
        </Box>
        <Box style={styles.cardTitle}>
          <Typography variant='subtitle2' color='#666' fontSize='14px'>
            This month
          </Typography>
          <ChevronDown color='#666' />
        </Box>
      </Box>
      <Typography variant='h4' style={styles.cardData}>
        1824
      </Typography>
      <Link to='/' style={styles.cardLink}>
        <Typography variant='body2'>
          Do you want more visits? Contact us!
        </Typography>
        <ArrowRight color='#21b8f9' />
      </Link>
    </Paper>
  )
}

export default Visitors
