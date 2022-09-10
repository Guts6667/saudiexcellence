import React, { useEffect, useState } from "react";
import './CardCoreTeam.scss'
import ctoPic from '../../assets/placeholder-cto.png';
import cooPic from '../../assets/placeholder-coo.png';
import cfoPic from '../../assets/placeholder-cfo.png';

const CardCoreTeam = ({datas}) => {
    console.log(datas);
    // const [picture, setPicture] = useState(null);
    console.log(datas);
    // const pics = [cfoPic, cooPic, ctoPic];
    // useEffect(() => {
    // pics.forEach(pic => {
    //     if(datas.picture === pic){
    //         setPicture(pic)
    //         console.log(picture);
    //     }
    // }) 
    // }, [])
    // if(!datas.name){
    //     datas.name = ''
    // }
    return(
        <article className="cardCoreTeam">
            {/* <img src={picture} alt={datas.role} />
            <span>{ `${datas.name}, ${datas.role}` }</span> */}
        </article>
    )
}

export default CardCoreTeam;