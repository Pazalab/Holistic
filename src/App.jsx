import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import "./css/fonts.css"
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import SingleService from './pages/SingleService'

function App() {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/services' element={<Service />} />
               <Route path='/service/:name' element={<SingleService />} />
               <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
