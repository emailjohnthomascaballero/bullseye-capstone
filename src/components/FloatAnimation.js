import { useEffect } from "react";

const FloatAnimation = () => {
  useEffect(() => {
    gsap.to(".floatElement", {
      duration: 1.5,
      y: 10, // Adjust this value for the desired float height
      ease: "power1.inOut",
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
    });
  }, []);
};

export default FloatAnimation;
