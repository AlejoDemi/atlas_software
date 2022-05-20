import React from 'react';
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

const PageBinder = () => {
    return (
        <div style={{height:"350vh"}}>
            <div style={{height:"250vh"}}>
                <AboutUs></AboutUs>
            </div>
            <div style={{height:"100vh",display:"flex",justifyContent:"center"}}>
                <ContactUs></ContactUs>

            </div>

        </div>
    );
};

export default PageBinder;