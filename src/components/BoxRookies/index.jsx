import React from "react";
import './BoxRookies.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const BoxRookies = ({datas}) => {
    return(
        datas &&(
        <article className="box-rookies">
            <img src={datas.picture} alt={datas.name} />
            <span>{ datas.industry}</span>
            <h4>{`${datas.name}, ${datas.country}`}</h4>
            <p>{ datas.description }</p>
            <a href={datas.website} target="blank">Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </article>
        )
        
    )
}
export default BoxRookies;