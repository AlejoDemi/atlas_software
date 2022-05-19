import './App.css';
import Canvas from "./components/Canvas/Canvas";
import {useEffect, useState} from "react";
import { SpinnerDotted } from 'spinners-react';
import { css } from "@emotion/react";
import CanvasMobile from "./components/MobileVersion/Canvas/CanvasMobile";
import {ClimbingBoxLoader, ClipLoader, PacmanLoader} from "react-spinners";

function App() {

  const [timer, setTimer] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setTimer(false),2000)
  },[])

  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

  return (
      isDesktop?

              timer?
                  <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignContent:"center",background:"#001027"}}>
                      <div style={{margin:"auto"}}>
                          <PacmanLoader  color={"#E392BE"}  size={20} />

                      </div>
                  </div>
                  :
                  <Canvas/>

          :
          <CanvasMobile></CanvasMobile>
  );
}

export default App;
