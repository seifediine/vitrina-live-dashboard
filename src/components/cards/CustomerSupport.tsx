import { Paper, Box, Typography } from '@mui/material'
import { Headphones } from '../../assets/icons'
import simone from '../../assets/images/Simone.svg'

const styles = {
  paper: {
    height: '200px',
    padding: '25px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  cardTitle: {
    color: '#21b8f9',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  simone: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    width: '170px',
    height: '50px',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#21b8f9',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#fff',
  },
}

const CustomerSupport = () => {
  return (
    <Paper sx={styles.paper}>
      <Box style={styles.cardTitle}>
        <Headphones color='#103B66' />
        <Typography variant='h6' color='#103B66'>
          Customer support
        </Typography>
      </Box>
      <Box style={styles.simone}>
        <img src={simone} alt='Simone' />
        <Typography>Simone is here to help</Typography>
      </Box>
      <Paper sx={styles.button}>
        <Typography variant='subtitle2' color='#fff'>
          Contact us
        </Typography>
      </Paper>
    </Paper>
  )
}

export default CustomerSupport
