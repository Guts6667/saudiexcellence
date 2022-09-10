import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './CarouselCoreTeam.scss';
// import ctoPic from '../../assets/placeholder-cto.png';
// import cooPic from '../../assets/placeholder-coo.png';
// import cfoPic from '../../assets/placeholder-cfo.png';
import CardCoreTeam from "../CardCoreTeam";
function CarouselCoreTeam(){
    let [index, setIndex] = useState(0)
    const [datasCoreTeam, setDatasCoreTeam] = useState([]);

    
    useEffect(() => {

        fetch('/datas/coreTeam.json')
        .then((res) => res.json())
        .then((res) => setDatasCoreTeam(res))
        
    }, [])

    const nextCard = () => {
        if(index === datasCoreTeam.lenght -1){
            setIndex(0)
        }else{
            setIndex(index += 1)
        }
    }
    const previousCard = () => {
        if(index === 0){
            setIndex(datasCoreTeam.length -1)
        }else{
            setIndex(index += 1)
        }
    }
       
    return(
    <section className="container__carouselCoreTeam">
       <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron-left chevron' onClick={previousCard}  />
       <CardCoreTeam datas = {datasCoreTeam[index]} />
       <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron-left chevron' onClick={nextCard}  />
    </section>
    )
}

export default CarouselCoreTeam;