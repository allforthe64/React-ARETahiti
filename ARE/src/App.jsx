import './App.css'

import {Routes, Route} from 'react-router-dom'
import RequireAuth from './components/RequireAuth'

//component imports
//pages
import Home from './components/Home'
import About from './components/About'
import Canoes from './components/Canoes'
import Matahina from './components/canoe_pages/Matahina'
import Mana from './components/canoe_pages/Mana'
import Marara from './components/canoe_pages/Marara'
import Mako from './components/canoe_pages/Mako'

//layout components
import Order from './components/Order'
import OrderSimple from './components/OrderSimple'
import { Login } from './components/Login'
import Layout from './components/Layout'
import PersistLogin from './components/PersistLogin'
import Success from './components/Success'
import Shop from './components/shopComponents/Shop'
import AdminMain from './components/AdminMain'


import Paddles from './components/Paddles'


function App() {

  return (
      
      <Routes>
        <Route path='/' element={<Layout />}>
          
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='order' element={<OrderSimple />} />
          <Route path='thank-you' element={<Success />} />
          {/* <Route path='order' element={<Order />} /> */}
          {/* <Route path='order-custom' element={<CustomOrder />} /> */}
          <Route path='canoes' element={<Canoes />} />
          <Route path='matahina' element={<Matahina />} />
          <Route path='mana' element={<Mana />} />
          <Route path='marara' element={<Marara />} />
          <Route path='mako' element={<Mako />} />

          <Route path='paddles' element={<Paddles />} />

          <Route path='shop' element={<Shop />} />
          <Route path='admin' element={<AdminMain />} />
          {/* <Route path='login' element={<Login />} /> */}
        </Route>
      </Routes>

  )
}

export default App
