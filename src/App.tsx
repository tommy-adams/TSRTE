import React from "react";
import RTE from "./RTE";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: [
                "#3998D0",
                "#2EB6AF",
                "#A9BD33",
                "#FEC73B",
                "#F89930",
                "#F45623",
                "#D62E32",
                "#EB586E",
                "#9952CF"
              ]
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200
                },
                distance: 250
              },
              direction: "none",
              enable: true,
              outModes: {
                default: "out"
              },
              random: false,
              speed: 3,
              size: true,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 25
            },
            opacity: {
              value: 0.4
            },
            shape: {
              type: ["circle"]
            },
            rotate: {
              value: 0,
              direction: "random",
              animation: {
                enable: true,
                speed: 5
              }
            },
            size: {
              random: {
                enable: true,
                minimumValue: 5
              },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 5
              },
              value: 15
            }
          },
          detectRetina: true
        }}
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 z-40">
        <div className="px-10 mb-8 w-screen">
          <h1>TypeScript Rich Text Editor</h1>
          <p>This is a simple rich text editor project to practice TypeScript with React!</p>
        </div>
        <div className="mx-6 border border-gray-300 rounded-md p-4 bg-white">
          <RTE />
        </div>
      </div>
    </>
  );
}

export default App;
