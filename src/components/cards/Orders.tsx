import { Paper, Box, Typography } from '@mui/material'
import { List, ChevronDown } from '../../assets/icons'
import { Link } from 'react-router-dom'

const styles = {
  paper: {
    height: '220px',
    padding: '25px',
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
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardLink: {
    color: '#21b8f9',
  },
}

const Orders = () => {
  return (
    <Paper sx={styles.paper}>
      <Box style={styles.cardHeader}>
        <Box style={styles.cardTitle}>
          <List color='#103B66' />
          <Typography variant='h6' color='#103B66'>
            Orders
          </Typography>
        </Box>
        <Box style={styles.cardTitle}>
          <Typography variant='subtitle2' color='#666' fontSize='14px'>
            This month
          </Typography>
          <ChevronDown color='#666' />
        </Box>
      </Box>
      <Box style={styles.cardData}>
        <Box>
          <Typography color='#6c7c8c' gutterBottom>
            Orders received:
          </Typography>
          <Typography color='#6c7c8c'>Earnings:</Typography>
        </Box>
        <Box style={{ textAlign: 'end' }}>
          <Typography color='#103b66' fontWeight='bold' gutterBottom>
            156
          </Typography>
          <Typography color='#103b66' fontWeight='bold'>
            €1893,24
          </Typography>
        </Box>
      </Box>
      <Link to='/' style={styles.cardLink}>
        <Typography variant='body2'>
          10 free tips to increase your sales
        </Typography>
      </Link>
    </Paper>
  )
}

export default Orders
