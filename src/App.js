import './App.css';
import Canvas from "./components/Canvas/Canvas";
import {useEffect, useState} from "react";
import { SpinnerDotted } from 'spinners-react';

function App() {

  const [timer, setTimer] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setTimer(false),1200)
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
      timer?
          <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignContent:"center",background:"#001027"}}>
            <SpinnerDotted size={50} thickness={180} speed={99} color="#f3c9d0" />
          </div>
            :
            <Canvas/>
  );
}

export default App;
