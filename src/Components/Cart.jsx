import { useContext } from 'react'
import { CartContext } from '../context/cart'
export default function Cart({close}) {
    const {cartItems,addToCart,removeFromCart,clearCart,totalItems,updateQuantity, totalprice} = useContext(CartContext)
    return (
      <div class="bg-gray-300 fixed top-0 bottom-0 right-0 p-2 text-left overflow-y-auto min-w-96">
        <div class ="flex justify-between">
        <span class="text-2xl text-pretty">Your Cart</span>
        <button class="text-slate-50 text-base bg-red-600 transition hover:-translate-y-1  h-6 w-6 m-2 rounded-full " onClick={()=>close()}>x</button>
        </div>
        {cartItems.map(item=>(
                <div class="border-t-2 border-b-2 border-gray-600 m-2 grid grid-cols-[auto_1fr] items-center max-w-prose gap-2">
                <div> <img src={item.image} alt="" class="h-20 mt-1 mb-1"/></div>
                
                <div>
                <div class="flex justify-between items-center">
                <div>{item.title}</div>
                <button class="text-slate-50 text-base bg-red-600 transition hover:-translate-y-1  h-6 w-6 m-2 rounded-full align-middle" onClick={()=>removeFromCart(item.id)}>x</button>
                </div>
                        
                        <div> 
                        
                        <div>
                        Cost: ${item.price}                
                        <button class="text-slate-50 text-base bg-sky-500 transition hover:-translate-y-1  h-6 w-6 m-2 rounded-full align-middle" onClick={() =>updateQuantity(item.id, item.qty - 1)}>
                            -
                        </button >
                          <span>{item.qty}</span>
                        <button class="text-slate-50 text-base bg-sky-500 transition hover:-translate-y-1  h-6 w-6 m-2 rounded-full align-middle" onClick={() =>updateQuantity(item.id, item.qty + 1) }>
                            +
                        </button>
                        </div>
                        </div>
                        </div>
                        
        
            </div>
        ))}

        <div class=" m-2">
        <div class="text-xl ">Total: ${totalprice()}</div>
        <button onClick={()=>clearCart()}
        class="text-slate-50 text-base bg-sky-500 transition my-2 mx-auto p-2 rounded-full align-middle hover:scale-110 hover:bg-indigo-600 ">Checkout</button>
        </div>
      </div>
    )
  }