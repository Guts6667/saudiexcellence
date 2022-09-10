import React from "react";
import './SectionHome.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const SectionHome = () => {
    return(
        <section className="section__home">
                <h2>AI will impact every industry all over <strong>the world.</strong></h2>
                <a href="#about">
                    <FontAwesomeIcon icon= {faChevronDown} size={'2x'} className = "chevron" />
                </a>
            </section>
    )
}
export default SectionHome;