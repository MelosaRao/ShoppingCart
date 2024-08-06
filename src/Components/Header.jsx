import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../context/cart'
export default function Header({toggle}){
    const {totalItems} = useContext(CartContext)
    return(
        <nav class="bg-slate-500 flex p-5 justify-between text-white text-xl">
        <div class="flex">
        <Link to="/Home"  class="group border-x-2 px-4"> 
         Home
        <div class="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
       
        
        </Link>
        <Link to ="/" class="group border-r-2 px-4">
        Shop
        <div class="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
          
           </Link>
        </div>
        
        <button class="text-lg border-2 px-2 bg-white text-slate-950 transition hover:scale-110" onClick={()=>toggle()}>Cart ({totalItems})</button>
    </nav>
      
    )
}