import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import './Single.css'
import { FaTimes } from "react-icons/fa";

function Single() {

    let experience = useLocation().state
  return (
    <div className='e_div'>
      <div className="e_img">
        <img src={experience.image} alt="" />
      </div>
          <div className="e_text">
        <h1 className='e_h1'>{experience.btn}</h1>
        <h3 className='e_h3'>{experience.text}</h3>
        <p className='e_p'>{experience.text_p}</p>
        <img className='e_i' src={experience.image_p} alt="" />
          </div>
            <Link to='/'><FaTimes className='e_icon'/></Link>
    </div>
  )
}

export default Single