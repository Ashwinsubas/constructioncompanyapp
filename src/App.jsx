
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Login'
import Footer from './components/Footer'
import Home from './pages/Home'
import Works from './pages/Works'
import User from './pages/User'
import ViewMore from './pages/ViewMore'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='viewmore' element={<ViewMore/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
