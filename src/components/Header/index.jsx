import React, { useState } from "react";
import './Header.scss'
// import logo from '../../assets/Logo_SEC.png'
import BurgerNav from "../BurgerNav";

/**
 * Header
 * @returns {JSX} React Component
 */
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleBtn() {
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
        if (navIcon.classList.contains('open')) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }



    return (
        <header className="container__header">
            <div className="container__header-burger" onClick={toggleBtn}>
                <div className="nav-icon" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="container__header-title">
                <img src='/assets/Logo_SEC.png' alt="Saudi Excellence Co." />
                <h1>Saudi Excellence Co.</h1>
            </div>
            <nav className="container__header-nav">
                <a href="#about">About</a>
                <a href="#mission">Mission</a>
                <a href="#partners">Partners</a>
                <a href="#team">Team</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
                
                {/* <a href="#news">AI News</a>
            <a href="#documents">Documents</a> */}
            </nav>
            <div className="container__header-btn">
                <a href="#contact">Contact</a>
            </div>
            {isOpen ?
                <BurgerNav /> : ''
            }
        </header>
    )

}

export default Header;