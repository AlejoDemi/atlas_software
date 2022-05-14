import React from 'react';
import "./Navbar.css";
import { Parallax, ParallaxLayer /*, IParallax*/ } from '@react-spring/parallax'
import logo from '../assets/logo.png';
//import layer6 from '../assets/newLayer6.png'

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro

const Navbar = () => {
        const description="Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia" +
            "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia" +
            "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia" +
            "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia"


    return (

        <Parallax pages={2} className="header">
            <ParallaxLayer speed={0} offset={0} style={{backgroundImage: 'url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ac35929aa1146b1afd954acbaa6fbc1~tplv-k3u1fbpfcp-watermark.awebp?")',backgroundSize:"contain", repeat:"true"}}>
                    <div className="buttonContainer">
                            <button className="button">Who we are</button>
                            <button className="button">Contact us</button>
                            <button className="button">Nose que mas poner</button>
                    </div>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={0} style={{backgroundImage: 'url("https://i.ibb.co/NSr3YBz/layer1.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.0} offset={0} style={{backgroundImage:'url("https://i.ibb.co/41T2gHt/layer2.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} offset={0} style={{backgroundImage:'url("https://i.ibb.co/D9VmBQ0/layer3.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} offset={0} style={{backgroundImage:'url("https://i.ibb.co/cJ3Q0gQ/layer4.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.7} offset={0} style={{backgroundImage:'url("https://i.ibb.co/NrJtcpK/layer5.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.7} offset={0.4} style={{backgroundImage:'url("https://i.ibb.co/xCtFBL2/layer6.png")', backgroundPosition:"center 0%", repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={0.75} style={{backgroundColor:"#011133",display:"flex",justifyContent:"center"}}>
                <img alt="" style={{height:"35%",width:"30%",minHeight:"20px",minWidth:"220px",position:"sticky",marginBottom:"20px"}} src={logo}/>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={1} style={{backgroundColor:"#011133",display:"flex",textAlign:"center",position:"sticky",margin:"auto",alignContent:"center",alignItems:"center"}}>
                    <div style={{display:"flex",textAlign:"center",position:"sticky",margin:"30px auto auto auto",width:"60vw",flexDirection:"column"}}>
                            <p style={{color:"white",justifySelf:"center",margin:"auto"}}>{description} </p>
                            <p style={{color:"white",justifySelf:"center",margin:"auto"}}>{description} </p>
                            <p style={{color:"white",justifySelf:"center",margin:"auto"}}>{description} </p>
                    </div>

            </ParallaxLayer>
        </Parallax>
    );
};

export default Navbar;
