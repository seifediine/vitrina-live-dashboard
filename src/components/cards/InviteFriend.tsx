import { Paper, Box, Typography } from '@mui/material'
import { Users, ArrowRight } from '../../assets/icons'
import { Link } from 'react-router-dom'

const styles = {
  paper: {
    height: '230px',
    padding: '25px',
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
    fontSize: '16px',
    lineHeight: '22px',
    color: '#103b66',
  },
  span: {
    color: '#00c48c',
    fontWeight: 'bold',
  },
  link: {
    color: '#21B8F9',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}

const InviteFriend = () => {
  return (
    <Paper sx={styles.paper}>
      <Box style={styles.cardTitle}>
        <Users color='#103B66' />
        <Typography variant='h6' color='#103B66'>
          Invite friend
        </Typography>
      </Box>
      <Typography style={styles.cardText}>
        <span style={styles.span}>Receive 50 products</span> by inviting a
        friend who subscribes to a plan. Your friend will receive a 30% discount
        coupon valid for any plan.
      </Typography>
      <Link to='/' style={styles.link}>
        <Typography variant='body2'>Start inviting friends </Typography>
        <ArrowRight color='#21B8F9' />
      </Link>
    </Paper>
  )
}

export default InviteFriend
