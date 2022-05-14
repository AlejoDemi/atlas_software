import React from 'react';
import "./Navbar.css";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import logo from '../assets/logo.png';

const Navbar = () => {
    return (

        <Parallax pages={2} className="header">
            <ParallaxLayer speed={0} offset={0} style={{backgroundImage: `url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true")`}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.02} offset={0} style={{backgroundImage: `url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true")`}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.08} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true")`}}>
            </ParallaxLayer>
            <ParallaxLayer  speed={0.08} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true")`}}>
            </ParallaxLayer>
             <ParallaxLayer speed={0.09} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true")`}}>
             </ParallaxLayer>
             <ParallaxLayer speed={0.3} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true")`}}>
             </ParallaxLayer>
             <ParallaxLayer speed={0.7} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true")`}}>

             </ParallaxLayer>
            <ParallaxLayer speed={0.7} offset={0.45} style={{backgroundColor:"#2D112A",display:"flex",justifyContent:"center" }}>
                <img style={{height:"30vh"}} src={logo}/>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={1} style={{backgroundColor:"#2D112A"}}>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Navbar;
