import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './CarouselCoreTeam.scss';
import CardCoreTeam from "../CardCoreTeam";
function CarouselCoreTeam(){
    let [index, setIndex] = useState(0)
    const [datasCoreTeam, setDatasCoreTeam] = useState([]);
    const [isDesktop, setIsDesktop] = useState(false);
    
  
    useEffect(() => {
        fetch('/datas/coreTeam.json')
        .then((res) => res.json())
        .then((res) => setDatasCoreTeam(res))
        
    }, [])
    const previousCard = () =>{
        if(index === 0){
            setIndex(2);
        }
        else{
            setIndex(index -1)
        }
    }
    const nextCard = () =>{
        if(index === 2){
            setIndex(0);
        }
        else{
            setIndex(index +1)
        }
    }
   
     window.addEventListener('resize', (e) => {
        e.preventDefault()
        if(window.visualViewport.width >= 1024){
            setIsDesktop(true)
        }else{setIsDesktop(false)}
     })
       
    return(
        datasCoreTeam && (
        <section >
            <div className="container__carouselCoreTeam">
            <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron' onClick={previousCard}  />
            <CardCoreTeam datas={datasCoreTeam[index]} />
            <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron' onClick={nextCard} />
            </div>
            <div className="container__carouselCoreTeam-xl">
                {datasCoreTeam.map(data => (
                    <CardCoreTeam datas = {data} key={`${data.role}-${datasCoreTeam.indexOf(data)}`}/>
                ))}
            </div>
         </section>
        )
            
        
        
        )
        
    
}

export default CarouselCoreTeam;