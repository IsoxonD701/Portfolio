import React, { useEffect, useState } from 'react'
import "./Effect.css"
import portfolio from "../../images/portfolio.webp"

function Effect() {
    const [load, setLoad] = useState(false)

    useEffect(() => {
      
        setTimeout(() => {
            setLoad(true)
        }, 0);

        setTimeout(() => {
            setLoad(true)
        }, 3000);
    
    }, [])
    

  return (
    <div className='effect' style={load?{display:"flex"}:{display:"none"}}>
        <h1 className='hello'>Hello &#128075;  <br />  <i>welcome to my portfolio</i></h1>
        <img className='portfolio_img' src={portfolio} alt="" />
    </div>
  )
}

export default Effect