import React/*, {useRef}*/ from 'react';
import Typical from 'react-typical';
import logo from '../assets/logo.png';
import './Header.css'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = () => {


    return(
                                        
        <div className={"header"}>
                <div className={"logo"}>
                    <img alt="" style={{justifySelf:"flex-start"}} src={logo}/>
                </div>
                <div style={{width:"40%",color:"white",display:"flex",justifyContent:"center",flexDirection:"row",fontSize:"30px",textAlign:"start"}}>
                    <Typical
                        steps={[
                        'EVOLUTION', 3000,
                        'CHANGE', 3000,
                        'ATLAS SOFTWARE', 3000,
                        'CARRYING THE WORLD FORWARD', 5000,
                        ]}
                        loop={Infinity}/>
                </div>
                <div className={"buttonContainer"}>
                    <a className="button" href='#whoWeAre' >Who we are</a>
                    <a className="button" href='#contactUs'>Contact us</a>
                </div>
        </div>
    );
};

export default Header;