import React from "react";
import './BurgerMenu.scss'

const BurgerMenu = () =>{
    
    function toggleBtn(){
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
        // span.classList.toggle('test')
    }
    return(
        <div className="nav-icon" onClick={toggleBtn}>
            <span></span>
            <span></span>
            <span></span>
        </div>
       

    )
}
export default BurgerMenu;