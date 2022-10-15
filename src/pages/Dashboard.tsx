import { Stack, Grid, Container } from '@mui/material'
import { Header } from '../components'
import {
  Visitors,
  Orders,
  MobileApps,
  Extensions,
  LatestNews,
} from '../components/cards'

const styles = {
  container: {
    padding: '0 40px',
  },
}

const Dashboard = () => {
  return (
    <Stack direction='column' spacing={-6}>
      <Header text='Welcome Mario' email='app.vetrinalive.it/fenoh-store' />
      <Container style={styles.container}>
        <Grid container spacing={3}>
          {/* Main Content */}
          <Grid container item lg={8} spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Visitors />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Orders />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <MobileApps />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Extensions />
            </Grid>
            <Grid item md={12} lg={12}>
              <LatestNews />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

export default Dashboard
