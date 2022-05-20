import React from 'react';
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

const PageBinder = () => {
    return (
        <div style={{height:"250vh"}}>
            <div style={{height:"80%"}}>
                <AboutUs></AboutUs>
            </div>
            <div style={{height:"20%",display:"flex",justifyContent:"center"}}>
                <ContactUs></ContactUs>

            </div>

        </div>
    );
};

export default PageBinder;