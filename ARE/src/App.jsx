import { useState } from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom'

//component imports
import Home from './components/Home'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
