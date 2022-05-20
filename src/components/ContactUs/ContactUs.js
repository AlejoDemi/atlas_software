import "./ContactUs.css"

import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {PacmanLoader} from "react-spinners";
import {ParticlesStars} from "../Canvas/Particles";

const ContactUs = (effect, deps) => {

    const [fullName, setFullName ] = useState("");
    const [email, setEmail ] = useState("");
    const [phone, setPhone ] = useState("");
    const [message, setMessage ] = useState("");
    const [showError , setShowError] = useState(false);
    const [showSuccess , setShowSuccess] = useState(false);
    const [loading , setLoading] = useState(false);


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    if (fullName!=="" && email!=="" && message!==""){
        emailjs.sendForm('service_y521b0g', 'template_20sozcf', form.current, 'wX92O6_gcyV1wAX7j')
            .then((result) => {
                setLoading(false)
                setShowError(false)
               setShowSuccess(true)

            }, (error) => {
                console.log(error.text);
            });
    }
    else {
        setLoading(false)
        setShowError(true);
    }

  };

  useEffect(()=>{
      setLoading(false)
          setShowSuccess(false);
          setShowError(false);
  },[]);

  return (
          <div className={"contactUsBox"} style={{zIndex:"1"}} >
              <h1 className={"title"}>CONTACT US</h1>
              <form ref={form} onSubmit={sendEmail} className={"form"}>
                  <div className={"text"}>
                      <input name = "user_name" className={"input"} style={{color:showError && fullName===""?"red":"white" }} type="text" placeholder={"Full Name (*)"} onChange={e=>setFullName(e.target.value)}/>
                      <input name = "user_email" className={"input"} style={{color:showError && email===""?"red":"white" }} type="email" placeholder={"Email (*)"} onChange={e=>setEmail(e.target.value)}/>
                      <input name = "user_phone" className={"input"}  type="text" placeholder={"Phone"} onChange={e=>setPhone(e.target.value)}/>
                      <textarea name = "message" className={"input"} style={{color:showError && message===""?"red":"white",height:"80px" }}  placeholder={"Message (*)"} onChange={e=>setMessage(e.target.value)}/>
                  </div>
                  <div className={"formButtonContainer"}>
                      <input type="submit" value="Send" className={"button"} />

                  </div>
              </form>

              <div style={{margin:"auto",display:"flex",justifyContent:"center",alignContent:"center",textAlign:"center"}}>
                  {loading?
                      <PacmanLoader  color={"#E392BE"}  size={20} />:
                      showError?
                          <h3 style={{color:"red"}}>You must complete all the obligatory fields (*)</h3> :
                          showSuccess?<h3 style={{color:"green"}}>Thanks for choosing us, we will contact you as soon as possible!</h3>:
                              null}
              </div>
          </div>

);
};
export default ContactUs;