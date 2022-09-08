import React from "react";
import BurgerMenu from "../BurgerMenu";
import './Header.scss'
import logo from '../../assets/Logo_SEC.png'

const Header = () =>{
    return (
        <header className="container__header">
            <div className="container__header-burger">
            <BurgerMenu />  
            </div>   
        <div className="container__header-title">
            <img src={logo} alt="Saudi Excellence Co." />
            <h1>Saudi Excellence Co.</h1>
        </div>
        <div className="container__header-btn">
            <a href="#">
            Contact
            </a>
           
        </div>
    </header>
    )

}

export default Header;