import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className={"contactUsBox"} >
            <h1 className={"tittle"}>CONTACT US</h1>
            <div className={"form"}>
                <input className={"input"} type={"text"} placeholder={"Full Name"}/>
                <input className={"input"} type={"text"} placeholder={"Email"}/>
                <textarea className={"input"} type={"text"} style={{height:"80px"}} placeholder={"Message"}/>
                <button className={"button"}>SEND</button>
            </div>
        </div>
    );
};

export default ContactUs;