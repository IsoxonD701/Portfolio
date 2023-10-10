import "./Project.css"
import React, { useRef, useState } from 'react';
import { static_project } from "../../static_project";

function Project() {
    const getScreensize = () => {
        return window.screen.width
    }
    return (
        <div id='project' className='project'>
            <h1 className='my_project'>MY PROJECTS</h1>
            {/* <>
                <Swiper
                    slidesPerView={getScreensize() < 650 ? 1 : getScreensize() < 960 ? 2 : 3}
                    spaceBetween={30}
                    pagination={{
                        Pagination,
                        clickable: true
                    }}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[FreeMode, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <div className="navigation">
                        <div className="prev" >
                            <h1 className="navigation_i"><AiOutlineArrowLeft /> </h1>
                        </div>
                        <div className="next" >
                            <h1 className="navigation_i"> <AiOutlineArrowRight />  </h1>
                        </div>
                    </div>

                    {static_project.map(project => (
                        <SwiperSlide className="swipers_div" key={project.id}>
                            <h1 className="pro_lang">{project.text}</h1>
                            <h3 className="pro_text">{project.text_p}</h3>
                            <div className="pro_hidden">
                                <button>Tap to see</button>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </> */}


<div className="mySwiper">
            {static_project.map(project => (
                    <div className="swipers_div" key={project.id}>
                        <h1 className="pro_lang">{project.text}</h1>
                        <h3 className="pro_text">{project.text_p}</h3>
                        <img className="imges_pro" src={project.image} alt="" />
                        <div className="pro_hidden">
                            <button><a href={project.a}>{project.btn}</a></button>
                        </div>
                        
                        <div className="pro_hidden_btn_div">
                        <button  className="pro_hidden_btn"><a href={project.a}>{project.btn}</a></button>
                        </div>
                       </div>
                       

            ))}
            
            </div>

        </div>
    )
}

export default Project