import React, { useEffect } from 'react'
import home_img from "../../images/home.jpg"
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter'
import { AiOutlineSmile } from "react-icons/ai";
import { useState } from 'react';

function Home() {


    const getScreensize = () => {
        return window.screen.width
    }

    const [scrollNumber, setscrollNumber] = useState(0)


    const scrollFunction = () => {

        


    
       setscrollNumber(window.scrollY)
        
    }
    console.log(scrollNumber)

    window.addEventListener("scroll", scrollFunction)
    
    return (
        <div id='home' className='home'>



            <div className="tanishtiruv">
                <h1 className='tanishtiruv_h1' style={{marginLeft:scrollNumber < 50 ? 0 : "-800px",  transition:"1s" }}>Hi There!   &#128075;</h1>
                <h1 style={{marginLeft:scrollNumber < 80 ? 0 : "-800px",  transition:"1s" }}>Welcome,<i>My protfolio</i></h1>
                <h2 style={{marginLeft:scrollNumber < 100 ? 0 : "-800px",  transition:"1s" }}>I'm <i>Isoxon Karimjanov</i></h2>
                <h3 style={{marginLeft:scrollNumber < 120 ? 0 : "-800px",  transition:"1s" }}>I'm <i>18 years old</i></h3>



                <div className="d_tillar"  style={{marginLeft:scrollNumber < 130 ? 0 : "-800px",  transition:"1s" }}>
                <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>{' '}
                    <span style={{ color: 'red', fontWeight: 'normal', fontFamily:'serif',fontSize:'35px' }}>
                        <Typewriter
                            words={['HTML', 'CSS', 'CASS', 'SCSS','BOOTSTRAP', 'TAILWIND', 'JAVA SCRIPT', 'REACT!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                </div>


            </div>



            <div className="hidden_img">
            <img style={{opacity:scrollNumber < 150 ? 0.4 : 1,  transition:"1s" }}  className='home_img' src={home_img} alt="" />
            </div>


            <div className="home_div">
            <img style={{opacity:scrollNumber < 50 ? 1 : 0.4,  transition:"1s" }} className='home_img' src={home_img} alt="" />
            </div>
        </div>
    )
}

export default Home