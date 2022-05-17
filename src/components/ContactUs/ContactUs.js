import "./ContactUs.css"

//const ContactUs = () => {
//
//    function sendEmail(e) {
//        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
//
//        emailjs.sendForm('service_gbt78fb', '__ejs-test-mail-service__', e.target, 'ZXtGxlcLxQ26uoMyZvvFk')
//            .then((result) => {
//                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
//            }, (error) => {
//                console.log(error.text);
//            });
//    }
//
//    return (
//        <div className={"contactUsBox"} style={{zIndex:"3"}} >
//            <h1 className={"tittle"}>CONTACT US</h1>
//            <div className={"form"} onSubmit={()=>sendEmail}>
//                <input className={"input"} type={"text"} placeholder={"Full Name"}/>
//                <input className={"input"} type={"email"} placeholder={"Email"}/>
//                <textarea className={"input"} type={"text"} style={{height:"80px"}} placeholder={"Message"}/>
//                <input type={"submit"} value={"Send"} className={"button"} />
//            </div>
//        </div>
//    );
//};
//
//
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y521b0g', 'template_20sozcf', form.current, 'wX92O6_gcyV1wAX7j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={"contactUsBox"} style={{zIndex:"3"}} >
        <h1 className={"tittle"}>CONTACT US</h1>
        <div className={"form"} >
        <form ref={form} onSubmit={sendEmail}>
            <input name = "user_name" className={"input"} type="text" placeholder={"Full Name"}/>
            <input name = "user_email" className={"input"} type="email" placeholder={"Email"}/>
            <textarea name = "message" className={"input"} type="text" style={{height:"80px"}} placeholder={"Message"}/>
            <input type="submit" value="Send" className={"button"} />
        </form>
        </div>
    </div>
);

  //return (
  //  <form ref={form} onSubmit={sendEmail}>
  //    <label>Name</label>
  //    <input type="text" name="user_name" />
  //    <label>Email</label>
  //    <input type="email" name="user_email" />
  //    <label>Message</label>
  //    <textarea name="message" />
  //    <input type="submit" value="Send" />
  //  </form>
  //);
};
export default ContactUs;