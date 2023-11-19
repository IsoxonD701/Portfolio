import React from 'react'
import './Contact.css'
import { BiLogoTiktok, BiLogoTelegram, BiLogoLinkedin, BiLogoInstagram, BiLogoGmail, BiLogoGithub, BiLogoFacebook } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { DiCodeigniter, DiReact, DiCss3, DiGithubBadge, DiHtml5,DiJavascript1 } from "react-icons/di";
import { useState } from 'react';

function Contact() {
    

    const [scrollNumber, setscrollNumber] = useState(0)


    const scrollFunction = () => {
       setscrollNumber(window.scrollY)
        
    }
    console.log(scrollNumber)

    window.addEventListener("scroll", scrollFunction)


    return (
        <div id='contact' className='contact'>
            <h1 className='contact_h1'>CONTACT US</h1>
            <div className="contacts">


                <button className='contact_btn'>
                    <p className='contact_text'>Telegram</p>
                    <BiLogoTelegram className='contact_btn_i' />
                </button>


                <button className='contact_btn'>
                    <p className='contact_text'>Tik Tok</p>
                    <BiLogoTiktok className='contact_btn_i' />
                </button>



                <button className='contact_btn'>
                    <p className='contact_text'>Linkedin</p>
                    <BiLogoLinkedin className='contact_btn_i' />
                </button>



                <button className='contact_btn'>
                    <p className='contact_text'>Instagram</p>
                    <BiLogoInstagram className='contact_btn_i' />
                </button>



                <button className='contact_btn'>
                    <p className='contact_text'>Email</p>
                    <BiLogoGmail className='contact_btn_i' />
                </button>


                <button className='contact_btn'>
                    <p className='contact_text'>Github</p>
                    <BiLogoGithub className='contact_btn_i' />
                </button>



                <button className='contact_btn'>
                    <p className='contact_text'>Facebook</p>
                    <BiLogoFacebook className='contact_btn_i' />
                </button>


                <button className='contact_btn'>
                    <p className='contact_text'>You Tube</p>
                    <AiOutlineYoutube className='contact_btn_i' />
                </button>
            </div>

            <div className="footer">
                <a href="/">Karimjanov Isoxon Kxusanovich</a>

                <div className="footer_d">
                    <DiReact className='footer_i' />
                    <DiCss3 className='footer_i' />
                    <DiCodeigniter className='footer_i' />
                    <DiGithubBadge className='footer_i' />
                    <DiHtml5 className='footer_i' />
                    <DiJavascript1 className='footer_i' />
                </div>

                <a href="tel:998905550822">Tell me: +998905550822</a>
            </div>

        </div>
    )
}

export default Contact