

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  const cursorRef = useRef();

  useGSAP(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.7,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.7,
      ease: "power3.out",
    });

    const move = (e) => {
      xTo(e.clientX + 10);
      yTo(e.clientY + 60);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  });

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="
        fixed
        top-[-5%]
        left-0
        h-5
        w-5
        flex 
        items-center
        rounded-full
        justify-center
        text-cream
      
        pointer-events-none
         bg-black
        z-9999
      "
    />
  );
};

export default Cursor;
