import React, { useEffect, useState } from "react";
import './CarouselInvestors.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BoxInvestor from "../BoxInvestor";


const CarouselInvestors = () => {
    let [index, setIndex] = useState(0)
    let [datasInvestors, setDatasInvestors] = useState([]);
    let [length, setLength] = useState(undefined);
    useEffect(() => {
        fetch('/datas/investors.json')
        .then((res) => res.json())
        .then((res) => setDatasInvestors(res));

        if(datasInvestors === '' || datasInvestors === null || datasInvestors === undefined){
            setDatasInvestors(false)
        }
        setLength(datasInvestors.length);
    }, [ ])
    
    const previousCard = () =>{
        if(index === 0){
            setIndex(5);
        }
        else{
            setIndex((index -=1))
        }
    }
    const nextCard = () =>{
        if(index === 5){
            setIndex(0);
        }
        else{
            setIndex((index +=1))
        }
    }
    return(
        datasInvestors && (
            <div>
                <div className="container__carouselInvestors">
                    <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron' onClick={previousCard}  />
                        <BoxInvestor datas = {datasInvestors[index]} />
                    <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron' onClick={nextCard} />
                </div>
                <div className="container__carouselInvestors-xl">
                    {datasInvestors.map((data => (
                <BoxInvestor datas = {data} key={`${data.alt}-${datasInvestors.indexOf(data)}`}/>
                    
                    )))}
                        
                   
                    
                
            </div>
            </div>
        
        
        )
        
        
        
    )
}

export default CarouselInvestors;