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
        <nav class="bg-slate-500 flex p-5 justify-between text-white text-xl">
        <div class="flex">
        <Link to="/"  class="group border-x-2 px-4"> 
         Home
        <div class="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
       
        
        </Link>
        <Link to ="/Shop" class="group border-r-2 px-4">
        Shop
        <div class="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
          
           </Link>
        </div>
        
        <button class="text-lg border-2 px-2 bg-white text-slate-950 transition hover:scale-110" onClick={()=>toggle()}>Cart</button>
    </nav>
      
      <Outlet/>
      {showCart&&<Cart close={toggle}/>}
      
    </CartProvider>
      )
    }


export default App


