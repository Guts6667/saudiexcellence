import React from "react";
import './CardFounder.scss'

/**
 * CardFounder
 * @param {Array} datas 
 * @returns {JSX} React Component
 */
const CardFounder = (data) => {
const {picture, name, text, linkedin, role} = data.data;

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
            
            <span>{`${name}, ${role}`}</span>
            <p>{ text }</p>
        </article>
    )
}
export default CardFounder;