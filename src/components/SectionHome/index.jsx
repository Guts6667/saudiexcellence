import React from "react";
import './SectionHome.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * SectionHome
 * @returns {JSX} React Component
 */
const SectionHome = () => {
    return(
        <section className="section__home">
            <video autoPlay loop muted playsInline >
                <source src="/assets/desert.mp4" type="video/mp4"/>
            </video>
            <h2>AI will impact every industry all over <strong>the world.</strong></h2>
                <a href="#about">
                    <FontAwesomeIcon icon= {faChevronDown} size={'2x'} className = "chevron" />
                </a>
            </section>
    )
}
export default SectionHome;