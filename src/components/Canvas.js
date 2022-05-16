import React/*, {useRef}*/ from 'react';
import "./Canvas.css";
import { Parallax, ParallaxLayer, /*IParallax*/ } from '@react-spring/parallax'
import {ParticlesStars} from "./Particles";
import Header from "./Header.js";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import {config, useSpring} from 'react-spring'

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro



const Canvas = () => {
        //const description="Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
        //    "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
        //    "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia " +
        //    "Aca tiene que haber una descripcion basica flayera de los valores y propositos de la compañia "


    return (
        <div style={{overflow:"hidden"}}>                
                <div >

                    <Parallax config={{precision:10000,tension:10000,clamp:true}} pages={3} className="parallax" style={{backgroundColor:"#001027"}}>

                        <ParallaxLayer speed={-0.35} offset={0} innerStyle={{display:"flex",flexDirection:"column",backgroundImage: 'url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ac35929aa1146b1afd954acbaa6fbc1~tplv-k3u1fbpfcp-watermark.awebp?")',backgroundSize:"contain", repeat:"true"}}>
                                        <ParticlesStars style={{height:"10px",width:"10px", position: "absolute"}}/>
                        </ParallaxLayer>

                        <ParallaxLayer speed={-0.35} offset={0.07} style={{backgroundImage: 'url("https://i.ibb.co/4V615ZS/logoBig.png")', backgroundPosition: 'center 9%', repeat:"true", backgroundSize:"400px 410px"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={-0.35} offset={0.35} style={{backgroundImage: 'url("https://i.ibb.co/ZgTGD80/layer1.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={-0.25} offset={0.25} style={{backgroundImage:'url("https://i.ibb.co/YNhntph/layer2.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={-0.2} offset={0.25} style={{backgroundImage:'url("https://i.ibb.co/ZmfhRNP/layer3.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.1} offset={0.25} style={{backgroundImage:'url("https://i.ibb.co/sCYZtPh/layer4.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.1} offset={1} style={{background:"#001027"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.15} offset={0.25} style={{backgroundImage:'url("https://i.ibb.co/Ws7ZZwn/layer5.png")', backgroundPosition: 'center 40%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.35} offset={0.65} style={{backgroundImage:'url("https://i.ibb.co/jD0s68h/layer6.png")', backgroundPosition:"center 0%", repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.35} offset={1.6} style={{background:"#001027"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0} offset={1.6}>

                        </ParallaxLayer>

                        <ParallaxLayer sticky={{start:0,end:4}}>
                                <Header/>
                        </ParallaxLayer>

                        <ParallaxLayer id="whoWeAre" offset={1.3} style={{color:"white"}}>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        <p>WHO WE ARE</p>
                        </ParallaxLayer>

                        <ParallaxLayer id="contactUs" offset={2} style={{borderBottomRadius:"20px" , color:"white", background:"read"}}>
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
