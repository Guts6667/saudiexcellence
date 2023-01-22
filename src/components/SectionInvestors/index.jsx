import React from "react";
import CarouselInvestors from "../CarouselInvestors";
import './SectionInvestors.scss'


/**
 * SectionInvestors
 * @returns {JSX} React Component
 */
const SectionInvestors = () => {
    return(

        <section className="container__investors" id="partners">
            <div className="container__investors-title">
                    <span className="line"></span>
                    <h2>Strategic Partners.</h2>
                </div>
                <div className="container__investors-subtitle">
                        <span>Saudi Excellence & Co is actively collaborating with SDAIA.</span>
                </div>
            <CarouselInvestors />
        </section>
    )
}
export default SectionInvestors;