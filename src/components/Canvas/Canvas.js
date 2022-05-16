import "./Canvas.css";
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import {ParticlesStars} from "./Particles";
import Header from "./Header.js";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import {useEffect, useRef, useState} from "react";

//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import {config, useSpring} from 'react-spring'

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro



const Canvas = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
    console.log(window.innerWidth)

    const updateMedia = () => {
        setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    const ref=useRef();


    return (
                <Parallax ref={ref} config={{precision:10000,tension:10000,clamp:true}} pages={3} className="parallax" style={{backgroundColor:"#001027",scrollBehavior:"smooth"}}>

                        <ParallaxLayer speed={-0.35} offset={0} innerStyle={{display:"flex",flexDirection:"column",backgroundImage: 'url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ac35929aa1146b1afd954acbaa6fbc1~tplv-k3u1fbpfcp-watermark.awebp?")',backgroundSize:"contain", repeat:"true"}}>
                                        <ParticlesStars style={{height:"10px",width:"10px", position: "absolute"}} interact={isDesktop}/>
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

                        <ParallaxLayer sticky={{start:0,end:1.9}} >
                                <Header goToContact={()=>ref.current.scrollTo(1.9)}
                                        goToAboutUs={()=>ref.current.scrollTo(1)}
                                        goToTop={()=>ref.current.scrollTo(0, {behavior:'auto'})}/>
                        </ParallaxLayer>

                        <ParallaxLayer id="whoWeAre" offset={1} style={{color:"white"}}>
                            <AboutUs></AboutUs>
                        </ParallaxLayer>

                        <ParallaxLayer   offset={2} >
                           <ContactUs></ContactUs>
                        </ParallaxLayer>

                        </Parallax>


    );
};

export default Canvas;
