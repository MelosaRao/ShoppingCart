export default function Card({item}){
    return(
        <div className='bg-white shadow-md rounded-lg px-10 py-10 hover:scale-90 transition-transform'>
            
            <img src={item.image} className='rounded-md h-48 mx-auto' ></img>
            <div>${item.price}</div>
            <div class="h-20">{item.title.split(" ").slice(0,12).join(' ')}</div>
        </div>
    )

}