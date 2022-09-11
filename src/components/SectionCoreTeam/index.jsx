import React from "react";
import CarouselCoreTeam from "../CarouselCoreTeam";
import './SectionCoreTeam.scss'

const SectionCoreTeam = () => {
    return (
        <section className="container__coreTeam">
             <div className="container__coreTeam-subtitle">
                <h3>
               Core Team.<br/>
                </h3>
             </div>
                 <CarouselCoreTeam />
         </section>
    )
}
export default SectionCoreTeam;