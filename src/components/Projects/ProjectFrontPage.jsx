import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectFrontPage = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // Initial reveal
      gsap.from(textRef.current.querySelectorAll("h1"), {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      });

      // Scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 5%",
          end: "bottom 20%",
          scrub: 2,
        },
      });

      tl.to(
        ".row1",
        {
          x: -600,
          ease: "none",
        },
        0
      );

      tl.to(
        ".row2",
        {
          x: 600,
          ease: "none",
        },
        0
      );

      tl.to(
        ".row3",
        {
          x: -500,
          ease: "none",
        },
        0
      );
    },
    {
      scope: textRef,
    }
  );

  useGSAP(
    () => {
      gsap.to(circleRef.current.querySelector("svg"), {
        y: 8,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    {
      scope: circleRef,
    }
  );

  return (
    <section className="min-h-screen w-full bg-[#F8F3E1] p-1 text-black">
      <div className="mt-28 overflow-hidden px-4 py-10 sm:px-6 md:mt-6 md:px-20">
        <div ref={textRef}>
          {/* ROW 1 */}
          <div className="row1 overflow-hidden">
            <h1
              className="
                select-none
                caret-transparent
                text-center
                text-[20vw]
                font-black
                uppercase
                leading-20
                tracking-[-0.05em]
                sm:text-[13vw]
                md:text-[12vw]
                md:leading-28
                lg:text-[10vw]
                lg:leading-36
                font-[MangoGro]
              "
            >
              THINGS I
            </h1>
          </div>

          {/* ROW 2 */}
          <div className="row2 overflow-hidden">
            <h1
              className="
                select-none
                caret-transparent
                text-center
                text-[20vw]
                font-black
                uppercase
                leading-20
                tracking-[-0.05em]
                text-[#B58A3C]
                sm:text-[13vw]
                md:text-[12vw]
                md:leading-28
                lg:text-[10vw]
                lg:leading-36
                font-[MangoGro]
              "
            >
              MADE
            </h1>
          </div>

          {/* ROW 3 */}
          <div className="row3 overflow-hidden">
            <h1
              className="
                select-none
                caret-transparent
                text-center
                text-[20vw]
                font-black
                uppercase
                leading-20
                tracking-[-0.05em]
                sm:text-[13vw]
                md:text-[12vw]
                md:leading-28
                lg:text-[10vw]
                lg:leading-36
                font-[MangoGro]
              "
            >
              ALONG THE WAY
            </h1>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="paragraph mx-auto mt-5 max-w-2xl text-center text-md leading-relaxed text-black/70 md:w-[50%]">
          A collection of things I&apos;ve built, explored, and brought to
          life — each one reflecting my journey as a developer.
        </p>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        ref={circleRef}
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-black
        "
      >
        <svg
          width="36"
          height="20"
          viewBox="0 0 36 16"
          fill="none"
          className="rotate-[90deg]"
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
      </div>
    </section>
  );
};

export default ProjectFrontPage;