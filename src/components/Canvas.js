import React/*, {useRef}*/ from 'react';
import "./Canvas.css";
//import {config, useSpring} from 'react-spring'
import { Parallax, ParallaxLayer, /*IParallax*/ } from '@react-spring/parallax'
import {ParticlesStars} from "./Particles";
import Header from "./Header.js";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro



const Canvas = () => {
        //const description="Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
        //    "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
        //    "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
        //    "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia "


    return (
        <div style={{overflow:"hidden"}}>                
                <div >
                    <Parallax config={{precision:10000,tension:10000,clamp:true}} pages={4} className="parallax" innerStyle={{backgroundColor:"#001027"}}>
                                <ParallaxLayer speed={-0.35} offset={0} innerStyle={{display:"flex",flexDirection:"column",backgroundImage: 'url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ac35929aa1146b1afd954acbaa6fbc1~tplv-k3u1fbpfcp-watermark.awebp?")',backgroundSize:"contain", repeat:"true"}}>
                                        <ParticlesStars style={{height:"10px",width:"10px", position: "absolute"}}/>
                                </ParallaxLayer>

                                <ParallaxLayer speed={-0.35} offset={0.065} style={{backgroundImage: 'url("https://i.ibb.co/n7VH21j/logo-White.png)', backgroundPosition: 'center 5%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={-0.35} offset={0.15} style={{backgroundImage: 'url("https://i.ibb.co/y50x5H5/layer1.png)', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={-0.25} offset={0.1} style={{backgroundImage:'url("https://i.ibb.co/M6ycpyd/layer2.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={-0.2} offset={0.1} style={{backgroundImage:'url("https://i.ibb.co/M8xNCvZ/layer3.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.1} offset={0.1} style={{backgroundImage:'url("https://i.ibb.co/YNT5hnM/layer4.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.15} offset={0.1} style={{backgroundImage:'url("https://i.ibb.co/X2q0F05/layer5.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.35} offset={0.5} style={{backgroundImage:'url("https://i.ibb.co/LZnHyJ7/layer6.png")', backgroundPosition:"center 0%", repeat:"true"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0.35} offset={1} style={{background:"#001027"}}>
                                </ParallaxLayer>
                                <ParallaxLayer speed={0} offset={1}>

                                </ParallaxLayer>

                                <ParallaxLayer sticky={{start:0,end:3}}>
                                        <Header/>
                                </ParallaxLayer>

                                <ParallaxLayer id="whoWeAre" offset={2} style={{color:"white"}}>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                <p>WHO WE ARE</p>
                                </ParallaxLayer>

                                <ParallaxLayer id="contactUs" offset={3} style={{color:"white"}}>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                <p>CONTACT US</p>
                                </ParallaxLayer>

                        </Parallax>
                </div>
        </div>
    );
};

export default Canvas;
