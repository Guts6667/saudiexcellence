import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './FormContact.scss'

/**
 * Form Contact
 * @returns {JSX} React Component
 */
const FormContact = () => {
    const form = useRef();
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o9la0j9', 'template_etlq19i', form.current, 'k0r8Xh3hPq24PCw8F')
        .then((result) => {
            console.log(result.text);
            setDisplayForm(false);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
            setEmailSent(false);
            displayForm(true)
        });
    };
  
    return(

        (displayForm && emailSent === false) ?(
            <section>
                <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name"  placeholder={'Name'}/>
            <input type="email" name="user_email" placeholder={'Email'} />
            <input type="text" name="user_subject" placeholder={"Subject"}/>
            <textarea name="message" placeholder={'Message'} />
            
            {/* <input type="submit" value="Send" className="submit-btn" /> */}
            <button onClick={sendEmail} className="submit-btn">Send</button>
        </form>
            </section>
            
    ) : (
            <div className="form-thanks">
                <span>Your emails has been sent!<br/>Thanks for reaching out!</span>
            </div>
    )
            
      
        
    )
}
export default FormContact;