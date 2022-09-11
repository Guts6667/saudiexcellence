import React from "react";
import './CardCoreTeam.scss'


const CardCoreTeam = ({datas}) => {
    return(   
        datas && (
            <article className="cardCoreTeam">
                <img src={datas.picture} alt={datas.role} />
                <span>{ `${datas.name} ${datas.role}` }</span>
            </article>
        )
            
    )
}

export default CardCoreTeam;