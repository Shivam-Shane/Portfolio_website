// src/components/particles/ParticlesBackground.jsx
import { useEffect, useMemo, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
       
      }).catch((error) => {
        
      });

      // Debug canvas after a delay to ensure rendering
      setTimeout(() => {
        const canvas = containerRef.current?.querySelector("canvas");
      }, 1000);
    }
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: -1 }, // Disable full-screen
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: { quantity: 3 },
          repulse: { distance: 80, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#00BFFF" },
        links: {
          color: "#FF0000",
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 2.5,
          opacityAnimation: {
            enable: true,
            speed: 2,
            minimumValue: 0.3,
            sync: false,
          },
        },
        move: {
          direction: "right",
          enable: true,
          outModes: "bounce",
          random: false,
          speed: { min: 1, max: 3 },
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 100,
        },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return typeof window !== "undefined" ? (
    <div
      ref={containerRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
    >
      <Particles id="tsparticles-footer" options={options} container={containerRef} />
    </div>
  ) : null;
};

export default ParticlesBackground;