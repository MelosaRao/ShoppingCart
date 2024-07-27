import { Link } from "react-router-dom"
import { useState } from "react"
import Cart from "./Cart"
export default function Header(){
    const [showCart, setShowCart] = useState(false)
    const toggle = () => {
        setShowCart(!showCart)
      }
    return(
        <div>
        <nav class="bg-slate-500 p-5">
            <div>
            <Link to="/">Home| </Link>
            <Link to ="/Shop">Shop| </Link>
            </div>
            
            <button onClick={()=>toggle()}>Cart</button>
        </nav>
        {showCart&&<Cart></Cart>}
        </div>
    )
}