import React/*, {useRef}*/ from 'react';
//import Typical from 'react-typical';
import logo from '../assets/Canvas/logo.png';
import './Header.css'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

/* <Typical
        steps={[
        'BORN TO CREATE',1000,
        'ATLAS SOFTWARE', 1000,
        'CARRYING THE WORLD FORWARD', 2000,
        ]}
        loop={Infinity}/>
*/


const Header = () => {


    return(
                                        
        <div className={"header"}>
                <div className={"logo"}>
                    <img alt="" style={{cursor:"pointer",justifySelf:"flex-start"}} src={logo}/>
                </div>
                <div className={"text"}>
                   
                </div>
                <div className={"buttonContainer"}>
                    <a className="button" onClick={()=>console.log("hola")}>Who we are</a>
                    <a className="button">Contact us</a>
                </div>
        </div>
    );
};

export default Header;