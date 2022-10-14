import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { Dashboard } from './pages'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
