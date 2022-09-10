import React, { useEffect, useState } from "react";
import './CardFounder.scss'
import mokhliss from '../../assets/mokhliss.jpg'
import abdullah from '../../assets/abdullah.jpg'
import omar from '../../assets/omar.jpg'
const CardFounder = (data) => {
const {picture, name, text, linkedin} = data.data
const [photo, setPhoto] = useState(null);
useEffect(() => {
    const profilPics = [mokhliss, abdullah, omar]
    profilPics.forEach(pp => {
        if(pp.includes(picture)){
        setPhoto(pp) 

    }
} 
 )

    
} , [picture])

    return(
        
        <article className="cardFounder">
            {linkedin ? (
                <a href={linkedin}>
                <img className="clickable" src={photo} alt={name} />
            </a>
            ) :
            (
                <img src={photo} alt={name} />
            )}
            
            <span>{ name }</span>
            <p>{ text }</p>
        </article>
    )
}
export default CardFounder;