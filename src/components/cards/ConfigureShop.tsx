import { Paper, Box, Typography } from '@mui/material'
import { Tool, ArrowRight } from '../../assets/icons'
import { Link } from 'react-router-dom'

const styles = {
  paper: {
    height: '290px',
    padding: '24px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#21b8f9',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  cardText: {
    fontSize: '17px',
    lineHeight: '22px',
    color: '#103b66',
  },
  link: {
    color: '#21B8F9',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}

const ConfigureCard = () => {
  return (
    <Paper sx={styles.paper}>
      <Box style={styles.cardTitle}>
        <Tool color='#103B66' />
        <Typography variant='h6' color='#103B66'>
          Configure your shop
        </Typography>
      </Box>
      <Box>
        <Typography color='#ffa26b' fontSize='34px' fontWeight={600}>
          45%
        </Typography>
        <Typography color='#ffa26b' fontSize='15px' fontWeight={500}>
          Completed
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2' style={styles.cardText}>
          Complete all the steps to have a complete shop to best present to your
          customers.
        </Typography>
      </Box>
      <Link to='/store-design' style={styles.link}>
        <Typography variant='body2'>Complete the setup! </Typography>
        <ArrowRight color='#21B8F9' />
      </Link>
    </Paper>
  )
}

export default ConfigureCard
