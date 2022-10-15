import { ThemeProvider } from '@mui/material/styles'
import { theme } from './data/theme'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { Dashboard } from './pages'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
