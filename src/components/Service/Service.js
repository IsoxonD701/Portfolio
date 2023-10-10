import React from 'react'
import "./Service.css"
import { static_experience } from '../../static_experience'
import { Link } from "react-router-dom";

function Service() {




    return (
        <div id='service' className='service'>
            <h1 className='service_text'>
                EXPERIENCE
            </h1>

            <div className="experience">
                {static_experience.map(experience => (
                    <div className="experience_div" key={experience.id}>
                        <div className="experience_i">
                            <img className="experience_img" src={experience.image} alt="" />
                        </div>    


                                <div className="experience_a">
                                    <Link state={experience} to={`single/${experience.id}`}>{experience.btn}</Link>
                                </div>

                                
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Service