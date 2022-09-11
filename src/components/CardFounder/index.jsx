import React from "react";
import './CardFounder.scss'
const CardFounder = (data) => {
const {picture, name, text, linkedin} = data.data;

    return(
        
        <article className="cardFounder">
            {linkedin ? (
                <a href={linkedin}>
                <img className="clickable" src={picture} alt={name} />
            </a>
            ) :
            (
                <img src={picture} alt={name} />
            )}
            
            <span>{ name }</span>
            <p>{ text }</p>
        </article>
    )
}
export default CardFounder;