import React from 'react';
import "./Navbar.css";
import { Parallax, ParallaxLayer /*, IParallax*/ } from '@react-spring/parallax'
import logo from '../assets/logo.png';
//import layer6 from '../assets/newLayer6.png'

//I was able to center the images, but cant add the file ../assets/newLayer6.png in line 25 - Pedro

const Navbar = () => {
    return (

        <Parallax pages={2} className="header">
            <ParallaxLayer speed={0} offset={0} style={{backgroundImage: `url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true")`, backgroundPosition: 'center 40%'}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.02} offset={0} style={{backgroundImage: `url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true")`, backgroundPosition: 'center 40%'}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.08} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true")`, backgroundPosition: 'center 40%'}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.08} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true")`, backgroundPosition: 'center 40%'}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.09} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true")`, backgroundPosition: 'center 40%'}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.3} offset={0} style={{backgroundImage:`url("https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true")`, backgroundPosition: 'center 40%'}}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.7} offset={0} style={{background:`url(../assets/newLayer6.png)`}}>
             </ParallaxLayer>
            <ParallaxLayer speed={0.7} offset={0.8} style={{backgroundColor:"#2D112A",display:"flex",justifyContent:"center"}}>
                <img alt="" style={{height:"30vh"}} src={logo}/>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={1} style={{backgroundColor:"#2D112A"}}>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Navbar;
