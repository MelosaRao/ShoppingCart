import { useEffect, useState } from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

export default function Shop(){
   const [items, setItems] = useState([])
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/", { mode: "cors" })
          .then((response) => {
            if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
          })
          .then(json=>setItems(json))
          .catch((error) => setError(error))
          .finally(setLoading(false));

      }, []);
    
    if (loading) return <p class="text-center m-2">Loading... <div class="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600 mx-auto my-5"/> </p>
      ;
    if (error) return <p>A network error was encountered</p>;
    return(
        <div class="bg-slate-50">
        <p class="font-sans text-5xl text-center m-3">Store</p>
        <div class="grid gap-x-2.5 gap-y-2.5 grid-cols-[repeat(auto-fill,300px)] justify-center">
        
        {items.map(item=><Link key={item.id} to={`/product/${item.id}`} state={item}><Card item = {item}></Card></Link>)}
        </div>
        </div>
        
    )
}