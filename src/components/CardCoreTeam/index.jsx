import React from "react";
import './CardCoreTeam.scss'


/**
 * CardCoreTeam
 * @param {Array} datas 
 * @returns {JSX} React Component
 */
const CardCoreTeam = ({datas}) => {
    return(   
        datas && (
            <article className="cardCoreTeam">
                <a href={`mailto:${datas.mail}`}>
                <img src={datas.picture} alt={datas.role} />
                <span>{ `${datas.name}, ${datas.role}` }</span>
                <span className="cardCoreTeam-info">Contact me</span>
                </a>
            </article>
        )
            
    )
}

export default CardCoreTeam;