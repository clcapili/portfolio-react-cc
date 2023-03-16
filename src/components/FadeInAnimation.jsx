// component for fade in animation
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FadeInAnimation = ({
  children,
  wrapperElement = "div",
  direction = null,
  ...props
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 0;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    const triggers = document.querySelectorAll('.trigger');
    triggers.forEach((element, i) => {
      let isEven = i % 2 == 0;

      gsap.to(element, {
        duration: 1,
        ...fadeDirection,
        opacity: 1,
        scrollTrigger: {
            trigger: element
        },
        delay: isEven ? 0.3 : 0.9
      });
    }, [compRef, fadeDirection]);
  });
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeInAnimation;