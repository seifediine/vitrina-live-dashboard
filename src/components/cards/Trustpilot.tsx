import { Paper, Typography } from '@mui/material'
import trustpilot from '../../assets/images/trustpilot.svg'
import { ArrowRight } from '../../assets/icons'
import { Link } from 'react-router-dom'

const styles = {
  paper: {
    // width: '350px',
    height: '232px',
    padding: '25px',
    backgroundColor: '#000032',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '120px',
    height: '30px',
  },
  cardText: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#fff',
  },
  greenText: {
    color: '#00c48c',
  },
  boldText: {
    fontWeight: 'bold',
  },
  link: {
    color: '#00c48c',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}

const TrustpilotCard = () => {
  return (
    <Paper sx={styles.paper}>
      <img src={trustpilot} alt='Trustpilot Logo' style={styles.image} />
      <Typography style={styles.cardText}>
        Show us your love by leaving a{' '}
        <span style={styles.greenText}>positive</span> review on trust pilot and
        receive the extension of{' '}
        <span style={styles.boldText}>50 additional products</span>
      </Typography>
      <Link to='/' style={styles.link}>
        <Typography variant='body2'>Write a review on Trustpilot </Typography>
        <ArrowRight color='#00c48c' />
      </Link>
    </Paper>
  )
}

export default TrustpilotCard
