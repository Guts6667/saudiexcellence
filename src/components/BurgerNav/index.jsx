import React from "react";
import './BurgerNav.scss'

const BurgerNav = () => {

    return(
        <nav className="container__burgerNav">
            <a href="#">{`About & Vision`}</a>
            <a href="#">Mission</a>
            <a href="#">Teams</a>
            <a href="#">{`Investors & Rookies`}</a>
            <a href="#">AI News</a>
            <a href="#">Documents</a>
        </nav>
    )
 }

 export default BurgerNav;