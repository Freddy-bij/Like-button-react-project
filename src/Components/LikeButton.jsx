import { useState } from "react"


const LikeButton = () => {
    const[count , setCount]=useState(0)
  return (
    <div>
         <p>count:{count}</p>
        <button className="bg-red-950 p-2 m-2 text-white uppercase" onClick={()=> setCount(prevCount => prevCount+1)}> {count<=1 ? 'like' : 'likes'}</button>
        </div>
  )
}

export default LikeButton