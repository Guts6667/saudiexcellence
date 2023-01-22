import React from "react";
import FormContact from "../FormContact";
import './SectionContact.scss'
// import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

/**
 * SectionContact
 * @returns {JSX} React Component
 */
const SectionContact = () => {
    return(
        <section className="container__contact" id="contact">
            <div className="container__contact-title">
                <span className="line"></span>
                <div>
                    <h2>Candidates and contact.</h2>
                    <h3>Let’s Work together</h3>
                </div>
            </div>
            <FormContact />
            {/* <div className="container__contact-network">
            </div> */}
        </section>
    )
}

export default SectionContact;