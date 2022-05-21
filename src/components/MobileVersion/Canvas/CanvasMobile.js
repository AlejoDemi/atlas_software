import React from 'react';
import PageBinder from "../../Binder/PageBinder";
import AboutUs from "../../AboutUs/AboutUs";
import ContactUs from "../../ContactUs/ContactUs";
import "./CanvasMobile.css"
import {ParticlesStars} from "../../Canvas/Particles";

const CanvasMobile = () => {

    return (
        <div style={{width:"100%",background:"lightgray",height:"410vh",display:"flex",justifyContent:"center",textAlign:"center"}}>
            <div >
                <ParticlesStars></ParticlesStars>
                <div className={"headerMobile"} style={{position:"relative",height:"100vh",zIndex:"1"}}>

                </div>
                <div style={{height:"210vh"}}>
                    <AboutUs></AboutUs>
                </div>
                <div style={{height:"100vh",display:"flex",justifyContent:"center"}}>
                    <ContactUs></ContactUs>

                </div>

            </div>
        </div>
    );
};

export default CanvasMobile;