import React, {useEffect, useState} from "react";
import './CarouselRookies.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BoxRookies from "../BoxRookies";


const CarouselRookies = () => {

    let [index, setIndex] = useState(0)
    let [datasRookies, setDatasRookies] = useState([]);
    let [length, setLength] = useState();
    useEffect(() => {
        fetch('/datas/rookies.json')
        .then((res) => res.json())
        .then((res) => setDatasRookies(res));

        if(datasRookies === '' || datasRookies === null || datasRookies === undefined){
            setDatasRookies(false)
        }
        
    }, [])
    
    const previousCard = () =>{
        setLength(datasRookies.length);
        if(index === 0){
            setIndex(8);
            
        }
        else{
            setIndex(index -1)
            console.log(index);
        }
    }
    const nextCard = () =>{
        if(index === 8){
            setIndex(0);
        }
        else{
            setIndex(index +1)
        }
    }
    return(
        datasRookies &&(
        <div>
            <div className="container__carouselRookies">
                    <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron' onClick={previousCard}  />
                        <BoxRookies  datas = {datasRookies[index]}/>
                    <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron' onClick={nextCard} />
                </div>
                <div className="container__carouselRookies-xl">
                    {datasRookies.map((data => (
                <BoxRookies datas = {data} key={`${data.alt}-${datasRookies.indexOf(data)}`}/>
                    
                    )))}
            </div>
        </div>
        )
        
    )
}
export default CarouselRookies;