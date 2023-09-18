import React, { useEffect, useRef } from 'react';


const NumberIncrement = ({ initialValue, targetValue, duration }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const numberElement = numberRef.current;

    gsap.to(numberElement, {
      duration: duration || 2, // Duration of the animation in seconds (default: 2 seconds)
      innerHTML: targetValue, // Set the target value to the innerHTML
      onStart: () => {
        numberElement.innerText = initialValue; // Set the initial value
      },
      ease: 'power1.inOut', // Easing function for smoothness
      scrollTrigger: {
        trigger: '.moveRightElement',
        start: '20px 80%', // Adjust the start position as needed
        end: '+=300',   // Adjust the end position as needed
        toggleActions: 'restart none none reverse', // Play the animation on scroll down and reverse on scroll up
        // markers: true,
      },
    });
  }, [initialValue, targetValue, duration]);

  return (
    <span ref={numberRef}></span>
  );
};

export default NumberIncrement;
