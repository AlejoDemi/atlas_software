import "./Canvas.css";
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import {ParticlesStars} from "./Particles";
import Header from "./Header.js";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import {useEffect, useRef, useState} from "react";
import PageBinder from "../Binder/PageBinder";

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro

const Canvas = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    const ref=useRef();


    return (
                <Parallax ref={ref} config={{tension:10000,clamp:true}} pages={4} className="parallax" style={{backgroundColor:"#000723",scrollBehavior:"smooth"}}>

                        <ParallaxLayer speed={-0.35} offset={0} style={{display:"flex",flexDirection:"column",backgroundSize:"contain", repeat:"true"}}>
                            <ParticlesStars style={{height:"10px",width:"10px", position: "absolute"}} interact={isDesktop}/>
                        </ParallaxLayer>

                        <ParallaxLayer speed={-0.35} offset={0.07} style={{backgroundImage: 'url("https://i.ibb.co/0D0MGTz/light-Logo.png")', backgroundPosition: 'center 5%', repeat:"true", backgroundSize:"400px 410px"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={-0.35} offset={0.35} style={{backgroundImage: "url('https://svgshare.com/i/hYk.svg')", backgroundPosition: 'center 30%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={-0.25} offset={0.25} style={{backgroundImage:'url("https://svgur.com/i/hYm.svg")', backgroundPosition: 'center 70%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={-0.2} offset={0.25} style={{backgroundImage:'url("https://svgur.com/i/hYD.svg")', backgroundPosition: 'center 40%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.1} offset={0.25} style={{backgroundImage:'url("https://svgur.com/i/hWu.svg")', backgroundPosition: 'center 50%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.1} offset={1} style={{background:"#000723"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.15} offset={0.25} style={{backgroundImage:'url("https://svgur.com/i/hYa.svg")', backgroundPosition: 'center 70%', repeat:"true"}}>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.35} offset={0.65} style={{backgroundImage:'url("https://svgur.com/i/hXM.svg")', backgroundPosition:"center 0%", repeat:"true"}}>
                        </ParallaxLayer>

                        <ParallaxLayer speed={0.3} offset={0.9}>
                            <section id="scrollIcon" >
                                <scrollIcon/>
                            </section>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} style={{"background":"#000723"}}>
                            <h1 className={"slogan"}>MOVING THE WORLD<div style={{"color": "#E392BE", "fontStyle":"italic"}}> FORWARD.</div></h1>
                        </ParallaxLayer>
                        <ParallaxLayer speed={0.35} offset={1.6} style={{background:"#000723"}}>
                        </ParallaxLayer>

                        <ParallaxLayer sticky={{start:0,end:2}} >
                                <Header goToContact={()=>ref.current.scrollTo(3)}
                                        goToAboutUs={()=>ref.current.scrollTo(1.9)}
                                        goToTop={()=>ref.current.scrollTo(0, {behavior:'auto'})}/>
                        </ParallaxLayer>


                        <ParallaxLayer id="whoWeAre" offset={1.5} >
                            <PageBinder></PageBinder>
                        </ParallaxLayer>
                </Parallax>
    );
};

export default Canvas;
