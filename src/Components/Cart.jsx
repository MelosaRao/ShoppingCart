import { useContext } from 'react'
import { CartContext } from '../context/cart'
export default function Cart({close}) {
    const {cartItems,addToCart,removeFromCart,clearCart,totalItems,updateQuantity, totalprice} = useContext(CartContext)
    const delete_svg = <svg  aria-label="delete" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"/></svg>
    return (
      
      <div class="bg-gray-300 fixed top-0 bottom-0 right-0 p-2 text-left overflow-y-auto max-w-80 lg:min-w-96">
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
                <button class=" text-right transition hover:text-red-600 " onClick={()=>removeFromCart(item.id)}>{delete_svg}</button>
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