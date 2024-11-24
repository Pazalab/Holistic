import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./css/fonts.css"
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

function App() {
  
  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/services' element={<Service />} />
               <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
