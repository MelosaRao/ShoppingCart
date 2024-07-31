import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useState,  useContext } from 'react';
import {CartContext}  from '../context/cart'

export default function ProductDetails(){
    const { addToCart } = useContext(CartContext)
    const location = useLocation()
    const [quantity, setQuantity] = useState(1);
    const item = location.state
    
    const handleQuantityChanged = (value) => {
        if (value <= 1){
             value = 1;}
        setQuantity(value);
      };

    return(
        <div class="text-center p-2 m-4 bg-white shadow-md rounded-lg hover:hover:shadow-gray-500 transition-transform">
        <h1 class="text-xl text-pretty font-bold">{item.title}</h1>
        <div class="flex justify-center gap-3 flex-wrap">
        <img src={item.image} alt="" class="h-96"/>
        <div  class="max-w-prose text-left min-[320px]:">
        <h3>Price: ${item.price} Rating:{item.rating.rate}/5 </h3>
        <h3><button class="text-slate-50 text-base bg-sky-500 transition m-2 p-2 rounded-full align-middle hover:scale-110 hover:bg-indigo-600" onClick={() => addToCart(item, quantity)}>Add to Cart</button> 
        
        
        <button class="text-slate-50 text-base bg-sky-500 transition hover:-translate-y-1  h-6 w-6 m-1 rounded-full align-middle" onClick={() => {handleQuantityChanged(quantity - 1);}}>-</button>
        Quantity:{quantity}
        <button class="text-slate-50 text-base bg-sky-500 transition hover:-translate-y-1  h-6 w-6 m-1 rounded-full align-middle" onClick={() => {handleQuantityChanged(quantity + 1);}}>+</button>
        
        </h3>

        <p>{item.description}</p>
        <Link to="/"><button class="text-slate-50 text-base text-transform: uppercase p-2 m-2 bg-sky-500 rounded-full transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600">Continue Shopping</button></Link>
        </div>
        </div>
        </div>
    )
}

