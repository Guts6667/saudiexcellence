import React from "react";
import CarouselRookies from "../CarouselRookies";
import './SectionRookies.scss'

const SectionRookies = () =>{

    return(
        <section className="container__rookies" id="portfolio">
        <div className="container__rookies-title">
                <span className="line"></span>
                <h2>Portfolio.</h2>
        </div>
            <div className="container__rookies-subtitle">
                <span>We empower founders to take on complex challenges, from smart logistics, blockchain protocol for DeFI, games, IIoT Futur Sensors, Drones, to Robotics. Our founders are creating solutions for AI governance, staffing, and transforming software development with machine learning. </span>
            </div>
        <CarouselRookies/>
    </section>
    )
}
export default SectionRookies;