import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const AnimateScrollbar = () => {
  const scrollerRef = useRef(null);

  const marqueeText = [
    "Creative Developer",
    "Full Stack Developer",
    "Interactive Experiences",
    "Smooth Animations",
    "Clean UI",
    "Responsive Design",
    "Problem Solver",
    "Java & Spring Boot",
    "React Developer",
  ];

  useGSAP(() => {
    gsap.to(scrollerRef.current, {
      x: "-50%",
      duration: 50,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div className="relative isolate max-w-full overflow-x-clip border-y bg-cream py-4 md:py-6 contain-[paint]">
      <div ref={scrollerRef} className="flex whitespace-nowrap w-max">
        {/* First Copy */}
        {[...marqueeText, ...marqueeText].map((text, i) => (
          <h1
            key={`first-${i}`}
            className="inline-flex items-center gap-10 text-3xl md:text-4xl mx-6"
          >
            <svg
              width="36"
              height="16"
              viewBox="0 0 36 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 8H33M33 8L27 2M33 8L27 14"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {text}
          </h1>
        ))}

        {/* Second Copy */}
        {[...marqueeText, ...marqueeText].map((text, i) => (
          <h1
            key={`second-${i}`}
            className="inline-flex items-center gap-10 text-3xl md:text-4xl mx-6"
          >
            <svg
              width="36"
              height="16"
              viewBox="0 0 36 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 8H33M33 8L27 2M33 8L27 14"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default AnimateScrollbar;
