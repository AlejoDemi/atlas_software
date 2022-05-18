import "./ContactUs.css"

import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const [fullName, setFullName ] = useState("");
    const [email, setEmail ] = useState("");
    const [message, setMessage ] = useState("");


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (fullName!=="" && email!=="" && message!==""){
        emailjs.sendForm('service_y521b0g', 'template_20sozcf', form.current, 'wX92O6_gcyV1wAX7j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    else console.log("error bolu")

  };

  return (
    <div className={"contactUsBox"} style={{zIndex:"3"}} >
        <h1 className={"title"}>CONTACT US</h1>
        <form ref={form} onSubmit={sendEmail} className={"form"}>
            <div className={"text"}>
                <input name = "user_name" className={"input"} type="text" placeholder={"Full Name"} onChange={e=>setFullName(e.target.value)}/>
                <input name = "user_email" className={"input"} type="email" placeholder={"Email"} onChange={e=>setEmail(e.target.value)}/>
                <textarea name = "message" className={"input"} style={{height:"80px"}} placeholder={"Message"} onChange={e=>setMessage(e.target.value)}/>
            </div>
            <div className={"formButtonContainer"}>
                <input type="submit" value="Send" className={"button"} />

            </div>
        </form>
    </div>
);
};
export default ContactUs;