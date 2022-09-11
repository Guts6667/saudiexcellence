import React from "react";
import CarouselRookies from "../CarouselRookies";
import './SectionRookies.scss'

const SectionRookies = () =>{

    return(
        <section className="container__investors">
        <div className="container__investors-title">
                <span className="line"></span>
                <div>
                    <h2>Our First Rookies.</h2>
                    <span>We empower founders to take on complex challenges, from smart logistics, blockchain protocol for DeFI, games, IIoT Futur Sensors, Drones, to Robotics. Our founders are creating solutions for AI governance, staffing, and transforming software development with machine learning. </span>
                </div>
            </div>
        <CarouselRookies/>
    </section>
    )
}
export default SectionRookies;