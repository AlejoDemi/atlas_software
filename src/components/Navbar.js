import React from 'react';
import "./Navbar.css";
import { Parallax, ParallaxLayer /*, IParallax*/ } from '@react-spring/parallax'
import logo from '../assets/logo.png';
//import layer6 from '../assets/newLayer6.png'

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro


const Navbar = () => {
    return (

        <Parallax pages={2} className="header">
            <ParallaxLayer speed={0} offset={0} style={{backgroundImage: `url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ac35929aa1146b1afd954acbaa6fbc1~tplv-k3u1fbpfcp-watermark.awebp?")`,backgroundSize:"contain", repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={0} style={{backgroundImage: `url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true")`, backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.09} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true")`, backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true")`, backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true")`, backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.3} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true")`, backgroundPosition: 'center 40%', repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.3} offset={0.4} style={{backgroundImage:`url("https://i.ibb.co/RzdbSGM/new-Layer6.png")`, backgroundPosition:"center 1%", repeat:"true"}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.3} offset={0.75} style={{backgroundColor:"#2D112A",display:"flex",justifyContent:"center"}}>
                <img alt="" style={{height:"35%",width:"30%",minHeight:"100px",minWidth:"220px"}} src={logo}/> 
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={1} style={{backgroundColor:"#2D112A"}}>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Navbar;
