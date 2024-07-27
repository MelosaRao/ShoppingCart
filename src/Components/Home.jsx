import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from './Carosel'



function Home() {
  const [count, setCount] = useState(0)

  return (
    <div class="text-center bg-gradient-to-r from-red-300 to-orange-200 h-screen">
      <div class="text-pretty text-lg p-2">Best Prices and Latest Products! Shop now!</div>
      
      <ImageCarousel></ImageCarousel>

      <Link to="/Shop"><button class="text-slate-50 text-xl text-transform: uppercase p-5 m-3 bg-sky-500 rounded-full transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600">Shop Now</button></Link>

    </div>
  )
}

export default Home