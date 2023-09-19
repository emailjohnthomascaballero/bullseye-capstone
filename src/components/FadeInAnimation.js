import { useEffect } from "react";

const FadeInAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.fadeElement', {
      y: '-20px', // Adjust the distance to move to the right
      duration: 1, // Duration of the animation in seconds
      ease: 'power1.inOut', // Easing function for smoothness
      stagger: '0.24',
      scrollTrigger: {
        trigger: '.fadeElement',
        start: '20px 80%', // Adjust the start position as needed
        end: '+=300',   // Adjust the end position as needed
        toggleActions: 'restart none none reverse', // Play the animation on scroll down and reverse on scroll up
        // markers: true,
      },
    });
  }, []);
};

export default FadeInAnimation;
