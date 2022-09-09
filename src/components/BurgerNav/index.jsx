import React from "react";
import './BurgerNav.scss'

const BurgerNav = () => {

    return(
        <nav className="container__burgerNav">
            <a href="#about">{`About & Vision`}</a>
            <a href="#mission">Mission</a>
            <a href="#team">Team</a>
            <a href="#investors">{`Investors & Rookies`}</a>
            <a href="#news">AI News</a>
            <a href="#documents">Documents</a>
        </nav>
    )
 }

 export default BurgerNav;