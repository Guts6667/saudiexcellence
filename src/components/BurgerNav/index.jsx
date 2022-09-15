import React from "react";
import './BurgerNav.scss'

const BurgerNav = () => {


    return(
        <nav className="container__burgerNav">
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#partners">Partners</a>
            <a href="#mission">Mission</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            {/* <a href="#news">AI News</a>
            <a href="#documents">Documents</a> */}
        </nav>
    )
 }

 export default BurgerNav;