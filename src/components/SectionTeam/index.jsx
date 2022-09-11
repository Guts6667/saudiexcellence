import React, { useEffect, useState } from "react";
import CardFounder from "../CardFounder";
import CarouselCoreTeam from "../CarouselCoreTeam";
import './SectionTeam.scss'

const SectionTeam = () => {
    const [datasFounders, setDatasFounders] = useState([]);
useEffect(() => {
    
    fetch('/datas/founder.json')
    .then(res => res.json())
    .then(res => setDatasFounders(res));

}, [])


    return(
        <section className="container__team">
            <div className="container__team-title">
                <span className="line"></span>
                <h2>Team</h2>
            </div>
            <div className="container__team-subtitle">
                <h3>
                Founders.<br/>
                <strong>A WORD FROM OUR FOUNDERS</strong>
                </h3>
            </div>
            <div className="container__founder">
                {datasFounders.map(data => {
                    return (
                    <CardFounder data = {data} key={`${data.name}-${datasFounders.indexOf(data)}`}  />)
                })}
            </div>
            <div className="container__team-subtitle">
                <h3>
                Core Team.<br/>
                </h3>
            </div>
            <div className="container__coreTeam">
                <CarouselCoreTeam />
            </div>
        </section>
    )
}

export default SectionTeam;