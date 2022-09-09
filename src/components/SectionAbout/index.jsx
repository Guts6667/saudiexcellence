import React from "react";
import './SectionAbout.scss'

const SectionAbout = () => {

    return(
            <section className="section__about" id="about">
                <div className="section__about-title">
                    <span className="line"></span>
                    <h2>About.</h2>
                </div>
                <div className="box-about box-about-left">
                    <p>
                    We are passionate people, that building a <strong>unique environment</strong> for those who dare to innovate,
                     break the rules of gravity, think out of the box and contribute to the human legacy of technology. 
                     AI, Robotics, Blockchain, Industry 4.0, Gaming, Web 3.0, and IIoT became such prevalent that it is shaping our vision of the future.
                    </p>
                </div>
                <div className="box-about box-about-right">
                    <p>
                    At Saudi Excellence we spot at early stage talents and start up certainly designing tomorrow’s landscape. 
                    This raising economy requires overcoming unique challenges, and we want to support you on your journey. 
                    Our focus is in the <strong>earliest stages of a startup</strong> (seed, pre-seed, and even pre-pitch deck) where we hope our help can make the biggest difference.
                    </p>
                </div>
                <div className="box-about box-about-left">
                    <p>
                    To build <strong>the next generation</strong> of tech giants, your team will require both industry know-how and new technology expertise. 
                    Saudi Excellence walk by your side with ethical manner, strong expertise and AAA network to scout the “Outstanding”.
                    </p>
                </div>
            </section>
    )
}

export default SectionAbout;