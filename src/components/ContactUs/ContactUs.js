import React from 'react';
import "./ContactUs.css"
import * as emailjs from "emailjs-com";

const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_gbt78fb', '__ejs-test-mail-service__', e.target, 'ZXtGxlcLxQ26uoMyZvvFk')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={"contactUsBox"} style={{zIndex:"3"}} >
            <h1 className={"tittle"}>CONTACT US</h1>
            <div className={"form"} onSubmit={()=>sendEmail}>
                <input className={"input"} type={"text"} placeholder={"Full Name"}/>
                <input className={"input"} type={"email"} placeholder={"Email"}/>
                <textarea className={"input"} type={"text"} style={{height:"80px"}} placeholder={"Message"}/>
                <input type={"submit"} value={"Send"} className={"button"} />
            </div>
        </div>
    );
};

export default ContactUs;