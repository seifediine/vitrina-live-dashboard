import { Paper, Box, Typography } from '@mui/material'
import { Extension, Domain, ArrowRight } from '../../assets/icons'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    height: '343px',
    padding: '20px',
    // paddingRight: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
  },
  cardTitle: {
    color: '#103B66',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  main: {},
  mainboxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  paper: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  cardSubtitle: {
    fontSize: '15px',
    lineHeight: '20px',
    color: '#103b66',
  },
  link: {
    color: '#21b8f9',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  scroll: {
    display: 'flex',
    gap: '40px',
    overflowX: 'scroll',
  },
}

const Extensions = () => {
  return (
    <Paper component='div' sx={styles.card}>
      <Box style={styles.cardTitle}>
        <Extension color='#103b66' />
        <Typography variant='h6'>Extensions Marketplace</Typography>
      </Box>
      <Box sx={styles.scroll}>
        <Box sx={styles.mainboxContent}>
          <Paper style={styles.paper} sx={{ backgroundColor: '#FFA26B' }}>
            <Domain />
          </Paper>
          <Typography style={styles.cardSubtitle}>
            Connect your own domain
          </Typography>
        </Box>
        <Box sx={styles.mainboxContent}>
          <Paper style={styles.paper} sx={{ backgroundColor: '#00C48C' }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h5' fontWeight='bold' color='#fff'>
                +50
              </Typography>
              <Typography color='#fff'>Prodotti</Typography>
            </Box>
          </Paper>
          <Typography variant='body2' style={styles.cardSubtitle}>
            50 Additional Products
          </Typography>
        </Box>
        <Box sx={styles.mainboxContent}>
          <Paper style={styles.paper} sx={{ backgroundColor: '#FFA26B' }}>
            <Domain />
          </Paper>
          <Typography variant='body2' style={styles.cardSubtitle}>
            Connect your own domain
          </Typography>
        </Box>
        <Box sx={styles.mainboxContent}>
          <Paper style={styles.paper} sx={{ backgroundColor: '#00C48C' }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h5' fontWeight='bold' color='#fff'>
                +50
              </Typography>
              <Typography color='#fff'>Prodotti</Typography>
            </Box>
          </Paper>
          <Typography style={styles.cardSubtitle}>
            50 Additional Products
          </Typography>
        </Box>
      </Box>
      <Link to='/extensions' style={styles.link}>
        <Typography variant='body2'>Discover all extensions</Typography>
        <ArrowRight color='#21b8f9' />
      </Link>
    </Paper>
  )
}

export default Extensions
