import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Header from './Components/Header'
import  CartProvider  from './context/cart'
import Cart from './Components/Cart'

function App() {
  const [showCart, setShowCart] = useState(false)
  const toggle = () => {
    setShowCart(!showCart)}
      return(
      <CartProvider>
      <Header toggle={toggle}/>
      <Outlet/>
      {showCart&&<Cart close={toggle}/>}
      
    </CartProvider>
      )
    }


export default App


