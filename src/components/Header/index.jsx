import React, { useState } from "react";
import './Header.scss'
import logo from '../../assets/Logo_SEC.png'
import BurgerNav from "../BurgerNav";

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    function toggleBtn(){
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
    if(navIcon.classList.contains('open')){
        setIsOpen(true)
    } else{
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
            <img src={logo} alt="Saudi Excellence Co." />
            <h1>Saudi Excellence Co.</h1>
        </div>
        <nav className="container__header-nav">
            <a href="#">{`About & Vision`}</a>
            <a href="#">Mission</a>
            <a href="#">Teams</a>
            <a href="#">{`Investors & Rookies`}</a>
            <a href="#">AI News</a>
            <a href="#">Documents</a>
        </nav>
        <div className="container__header-btn">
            <a href="#">Contact</a>
        </div>
        {isOpen  ?
            <BurgerNav /> : ''
        }
    </header>
    )

}

export default Header;