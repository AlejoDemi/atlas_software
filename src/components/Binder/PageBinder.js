import React from 'react';
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

const PageBinder = () => {
    return (
        <div style={{height:"300vh"}}>
            <div style={{height:"200vh"}}>
                <AboutUs></AboutUs>
            </div>
            <div style={{height:"100vh",display:"flex",justifyContent:"center"}}>
                <ContactUs></ContactUs>

            </div>

        </div>
    );
};

export default PageBinder;