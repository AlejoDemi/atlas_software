import React, {useRef} from 'react';
import "./Navbar.css";
import {config, useSpring} from 'react-spring'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import logo from '../assets/logo.png';
import {ParticlesStars} from "./Particles";
import Typical from 'react-typical';


//import layer6 from '../assets/newLayer6.png'

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro



const Navbar = () => {
        const description="Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
            "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
            "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
            "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia "


    return (
        <div style={{overflow:"hidden"}}>
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
                            loop={Infinity}
                        />
                    </div>

                    <div className={"buttonContainer"}>
                        <button className="button" >Who we are</button>
                        <button className="button">Contact us</button>
                    </div>
                </div>
                
                <div >
                    <Parallax config={{precision:10000,tension:10000000,clamp:true}} pages={2} className="parallax" innerStyle={{backgroundColor:"#001027"}}>
                                <ParallaxLayer speed={-0.35} offset={0} innerStyle={{display:"flex",flexDirection:"column",backgroundImage: 'url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ac35929aa1146b1afd954acbaa6fbc1~tplv-k3u1fbpfcp-watermark.awebp?")',backgroundSize:"contain", repeat:"true"}}>
                                        <ParticlesStars style={{height:"10px",width:"10px", position: "absolute"}}/>
                                </ParallaxLayer>

                                <ParallaxLayer speed={-0.35} offset={0} style={{backgroundImage: 'url("https://i.ibb.co/n7VH21j/logo-White.png)', backgroundPosition: 'center 5%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={-0.35} offset={0.15} style={{backgroundImage: 'url("https://i.ibb.co/y50x5H5/layer1.png)', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={-0.25} offset={0.05} style={{backgroundImage:'url("https://i.ibb.co/M6ycpyd/layer2.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={-0.2} offset={0.05} style={{backgroundImage:'url("https://i.ibb.co/M8xNCvZ/layer3.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.1} offset={0.05} style={{backgroundImage:'url("https://i.ibb.co/YNT5hnM/layer4.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.15} offset={0.05} style={{backgroundImage:'url("https://i.ibb.co/X2q0F05/layer5.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.35} offset={0.45} style={{backgroundImage:'url("https://i.ibb.co/LZnHyJ7/layer6.png")', backgroundPosition:"center 0%", repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.35} offset={1} style={{background:"#001027"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0} offset={1}>

                                </ParallaxLayer>
                        </Parallax>
                </div>


        </div>
    );
};

export default Navbar;
