import { useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Hosting from './pages/Hosting'
import Login from './pages/Login'
import Questions from './pages/Questions'
import Signup from './pages/Signup'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes'

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);

  return (
    <div className='overflow-hidden'>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/questions" element={<Questions />} />
          <Route exact path="/hosting" element={<Hosting />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
