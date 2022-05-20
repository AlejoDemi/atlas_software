import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesStars = (props) => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <Particles
            style={{zIndex:"-1"}}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000E21"
                    },
                    size:{
                        value: "10px 10px"
                    }
                },
                fpsLimit: 120,


                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push"
                        },
                        onHover: {
                            enable: props.interact,
                            mode: "grab"
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 1
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 0.3,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 1
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 2 }
                    }
                },
                detectRetina: true
            }}
        />
    );
};

