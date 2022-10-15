import { Paper, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../../assets/icons'
import device from '../../assets/images/device.svg'
import AppStore from '../../assets/images/AppStore.svg'
import PlayStore from '../../assets/images/PlayStore.svg'

const styles = {
  card: {
    // width: '348px',
    height: '343px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F3A35C',
    borderRadius: '10px',
  },
  mainBox: {
    display: 'flex',
    justifyContent: 'space-between',
    // gap: '30px',
  },
  secondaryBox: {
    display: 'flex',
    // justifyContent: 'space-between',
    gap: '10px',
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 10px 0',
    justifyContent: 'space-between',
  },
  link: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
}

const MobileApps = () => {
  return (
    <Paper component='div' sx={styles.card}>
      <Box style={styles.mainBox}>
        <Box sx={styles.cardText}>
          <Typography
            variant='body2'
            color='#fff'
            style={{
              fontSize: '22px',
              fontWeight: 500,
              lineHeight: '27px',
            }}
          >
            Sell your products on your exclusive APP published on the stores
          </Typography>
          <Link to='/' style={styles.link}>
            <Typography marginRight={1}>Show more </Typography>
            <ArrowRight color='#fff' />
          </Link>
        </Box>
        <img src={device} alt='Device' />
      </Box>
      <Box style={styles.secondaryBox}>
        <img src={AppStore} alt='App Store Badge' />
        <img src={PlayStore} alt='Play Store Badge' />
      </Box>
    </Paper>
  )
}

export default MobileApps
