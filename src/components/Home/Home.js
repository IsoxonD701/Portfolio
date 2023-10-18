import React, { useEffect, useState } from 'react';
import home_img from "../../images/home.jpg";
import "./Home.css";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    const [scrollNumber, setScrollNumber] = useState(0);
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const scrollFunction = () => {
        setScrollNumber(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        }
    }, []);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const capitalized = capitalizeName(name);
        setDisplayName(capitalized);
        setName('');
    };

    const capitalizeName = (name) => {
        if (name.length === 0) {
            return '';
        }
        const lowercaseName = name.toLowerCase();
        const capitalized = lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);
        return capitalized;
    };

    return (
        <div id='home' className='home'>
            {displayName ? (
                <div className="tanishtiruv">
                    <h1 className='tanishtiruv_h1' style={{ marginLeft: scrollNumber < 50 ? 0 : "-800px", transition: "1s" }}>
                        Salom, {displayName}! &#128075;
                    </h1>
                    <h1 style={{ marginLeft: scrollNumber < 80 ? 0 : "-800px", transition: "1s" }}>
                        Xush kelibsiz,<i>Mening portfolyo saytimga</i>
                    </h1>
                    <h2 style={{ marginLeft: scrollNumber < 100 ? 0 : "-800px", transition: "1s" }}>
                        Men <i>Isoxon Karimjonovman</i>
                    </h2>
                    <h3 style={{ marginLeft: scrollNumber < 120 ? 0 : "-800px", transition: "1s" }}>
                        Men <i>18 yoshdaman</i>
                    </h3>
                    <div className="d_tillar" style={{ marginLeft: scrollNumber < 130 ? 0 : "-800px", transition: "1s" }}>
                        <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                            {' '}
                            <span style={{ color: 'red', fontWeight: 'normal', fontFamily: 'serif', fontSize: '35px' }}>
                                <Typewriter
                                    words={['HTML', 'CSS', 'SASS', 'SCSS', 'BOOTSTRAP', 'TAILWIND', 'JAVA SCRIPT', 'REACT!']}
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
            ) : (
                <form onSubmit={handleSubmit} className="isoxon_form">
                    <div className="container">
                        <input type="text" placeholder="Ismingizni kiriting" value={name} onChange={handleInputChange} className="isoxon_inp" />
                        <button type="submit" className="isoxon_btn">Jo'natish</button>
                    </div>
                </form>
            )}
            <div className={`hidden_img ${displayName ? 'block' : 'hidden'}`}>
                <img className={`home_img ${displayName ? 'hidden' : 'block'}`} style={{ opacity: scrollNumber < 150 ? 0.4 : 1, transition: "1s" }} src={home_img} alt="" />
            </div>
            <div className={`home_div ${displayName ? 'block' : 'hidden'}`}>
                <img style={{ opacity: scrollNumber < 50 ? 1 : 0.4, transition: "1s" }} className='home_img' src={home_img} alt="" />
            </div>
        </div>
    );
}

export default Home;