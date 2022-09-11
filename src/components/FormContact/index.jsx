import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './FormContact.scss'

const FormContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return(
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name"  defaultValue={'Name'}  placeholder={'John Doe'}/>
        <input type="email" name="user_email" defaultValue={'Email'} placeholder={'johndoe@gmail.com'} />
        <input type="text" name="user_subject" defaultValue={'Subject'} placeholder={"Let's have a meeting"}/>
        <textarea name="message"  defaultValue={'Message'} placeholder={'Hello! Is it possible to schedule a meeting on Thursday?'} />
        <input type="submit" value="Send" className="submit-btn" />
      </form>
    )
}
export default FormContact;