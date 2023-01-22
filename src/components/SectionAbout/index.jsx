import React from "react";
import './SectionAbout.scss'

/**
 * SectionAbout
 * @returns {JSX} React Component
 */
const SectionAbout = () => {

    return(
            <section className="container__about" id="about">
                <div className="container__about-title">
                    <span className="line"></span>
                    <div>
                    <h2>About.</h2>
                    <span>OUR COMPANY.</span>
                    </div>
                    
                </div>
                <div className="box-about box-about-left">
                    <p>
                    Saudi Excellence Holding Company is part of <strong>Al-Ramez International Group</strong>, which was Established in 1991 with diversified business areas.
                    </p>
                </div>
                <div className="box-about box-about-right">
                    <p>

                    Saudi Excellence Holding Company is one of the leading companies in the region, providing the latest technologies in the field of <strong>security</strong> and <strong>defense</strong> to Saudi Government and Enterprises in Saudi Arabia.
                    The company has taken upon itself the challenges facing the region that can be eliminated by <strong>Advanced Technologies.</strong>
                    </p>
                </div>
                <div className="box-about box-about-left">
                    <p>
                    We participated with decision-makers <strong>AAA project</strong>, engaging and participating in the discussions of the <strong>National Transition Plan</strong> in Saudi Arabia 2020/2030, Vision 2030.
Our core expertise focuses on Ai, Cybersecurity, Data Mining, Data Analytics, intelligence, and more
                    </p>
                </div>
            </section>
    )
}

export default SectionAbout;