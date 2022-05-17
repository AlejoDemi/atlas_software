import React/*, {useRef}*/ from 'react';
import logo from '../../assets/Canvas/logo.png';
import './Header.css'

const Header = (props) => {


    return(
                                        
        <div className={"header"}>
                <div className={"logo"}>
                    <img onClick={props.goToTop} alt="" style={{cursor:"pointer",justifySelf:"flex-start"}} src={logo}/>
                </div>
                <div className={"text"}>
                   
                </div>
                <div className={"buttonContainer"}>
                    <button className="button" onClick={props.goToAboutUs}>Who we are</button>
                    <button className="button" onClick={props.goToContact}>Contact us</button>
                </div>
        </div>
    );
};

export default Header;