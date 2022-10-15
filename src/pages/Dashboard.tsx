import { Stack, Grid, Container } from '@mui/material'
import { Header } from '../components'
import {
  Visitors,
  Orders,
  MobileApps,
  Extensions,
  LatestNews,
  ConfigureShop,
  Trustpilot,
  InviteFriend,
  CustomerSupport,
} from '../components/cards'

const styles = {
  container: {
    padding: '0px 40px',
  },
}

const Dashboard = () => {
  return (
    <Stack direction='column' spacing={-6}>
      <Header text='Welcome Mario' link='app.vetrinalive.it/fenoh-store' />
      <Container maxWidth='xl' style={styles.container}>
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
          {/* Side Content */}
          <Grid container item lg={4}>
            <Grid item xs={6} sm={6} md={6} lg={12}>
              <ConfigureShop />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={12}>
              <Trustpilot />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={12}>
              <InviteFriend />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={12}>
              <CustomerSupport />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

export default Dashboard
