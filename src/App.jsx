
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Login'
import Footer from './components/Footer'
import Home from './pages/Home'
import Works from './pages/works'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
