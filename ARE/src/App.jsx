import { useState } from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom'

//component imports
//pages
import Home from './components/Home'
import Canoes from './components/Canoes'
import Matahina from './components/canoe_pages/Matahina'
import Mana from './components/canoe_pages/Mana'
import Marara from './components/canoe_pages/Marara'

//layout components
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/canoes' element={<Canoes />} />
        <Route path='/matahina' element={<Matahina />} />
        <Route path='/mana' element={<Mana />} />
        <Route path='/marara' element={<Marara />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
