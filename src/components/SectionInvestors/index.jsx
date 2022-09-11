import React from "react";
import CarouselInvestors from "../CarouselInvestors";
import './SectionInvestors.scss'



const SectionInvestors = () => {
    return(

        <section className="container__investors">
            <div className="container__investors-title">
                    <span className="line"></span>
                    <div>
                        <h2>Our Investors.</h2>
                        <span>Saudi Excellence &co is backed with $100 million in the capital by SDAIA and Saudi Banks and Private Family Offices.</span>
                    </div>
                </div>
            <CarouselInvestors />
        </section>
    )
}
export default SectionInvestors;