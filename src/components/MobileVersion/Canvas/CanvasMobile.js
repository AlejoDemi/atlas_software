import React from 'react';
import PageBinder from "../../Binder/PageBinder";
import AboutUs from "../../AboutUs/AboutUs";
import ContactUs from "../../ContactUs/ContactUs";
import "./CanvasMobile.css"

const CanvasMobile = () => {

    return (
        <div style={{width:"100%",background:"lightgray",height:"410vh",display:"flex",justifyContent:"center",textAlign:"center"}}>
            <div >
                <div className={"headerMobile"} style={{height:"100vh"}}>

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