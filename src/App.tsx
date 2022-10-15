import { ThemeProvider } from '@mui/material/styles'
import { theme } from './data/theme'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import {
  Dashboard,
  Orders,
  Customers,
  DeliveryOptions,
  PaymentOptions,
  StoreDesign,
  Subscription,
  Integrations,
  Extensions,
  Settings,
  Logout,
} from './pages'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/delivery-options' element={<DeliveryOptions />} />
          <Route path='/payment-options' element={<PaymentOptions />} />
          <Route path='/store-design' element={<StoreDesign />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/integrations' element={<Integrations />} />
          <Route path='/extensions' element={<Extensions />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
