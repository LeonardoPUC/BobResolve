import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import PrivateRoutes from './utils/PrivateRoutes'
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './NotFound'
import Error from './Error'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App