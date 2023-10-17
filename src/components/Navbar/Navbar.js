import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa";
import logo_img from "../../images/isoxon_logo-removebg-preview.png"

function Navbar() {

    const [nav, setNav] = useState(false);

    return (
        <div className='nav'>
            <div className="nav_logo">
                <img className='logo_img' src={logo_img} alt="" />

            </div>
            <div className="block">
                <ul className=''>
                    <li>
                        <Link to="home"    spy={true} smooth={true} offset={0} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="project" spy={true} smooth={true} offset={0} duration={500} >
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link to="service" spy={true} smooth={true} offset={0} duration={500} >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="hidden" onClick={() => setNav(!nav)}>

                {nav ? <FaTimes size={30} className='icon' /> : <FaBars size={30} className='icon' />}

            </div>


            {nav && (
                <div className="hidden_ul">
                    <ul className=''>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNav(!nav)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="project" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNav(!nav)} >
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="service" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNav(!nav)}>
                            Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={() => setNav(!nav)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}



        </div>

    )
}

export default Navbar

