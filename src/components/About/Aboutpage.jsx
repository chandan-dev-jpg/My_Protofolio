import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Aboutpage = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  const location = useLocation();

  // =================================
  // IMAGE HOVER ANIMATION
  // =================================

  const mouseEnter = () => {
    const cursor = document.querySelector("#custom-cursor");

    if (!cursor) return;

    const isMobile = window.innerWidth < 768;

    gsap.to(cursor, {
      width: isMobile ? "14vh" : "20vh",
      height: isMobile ? "14vh" : "20vh",
      duration: 0.5,
      ease: "power3.out",
      border: "none",
    });

    cursor.style.backgroundColor = "black";
    cursor.innerHTML = "<p>It's Me</p>";

    const image = imageRef.current?.querySelector("img");

    if (image) {
      gsap.to(image, {
        scale: 1.08,
        duration: 3,
        ease: "power3.out",
      });
    }
  };

  const mouseLeave = () => {
    const cursor = document.querySelector("#custom-cursor");

    if (!cursor) return;

    gsap.to(cursor, {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      duration: 0.5,
      ease: "power3.out",
    });

    cursor.style.backgroundColor = "";
    cursor.innerHTML = "";

    const image = imageRef.current?.querySelector("img");

    if (image) {
      gsap.to(image, {
        scale: 1,
        duration: 3,
        ease: "power3.out",
      });
    }
  };

  // =================================
  // IMAGE + HEADING ANIMATION
  // =================================

  useGSAP(
    () => {
      // Image reveal
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 2,
        },
      });

      // Heading reveal
      gsap.from(headingRef.current.querySelectorAll("h1"), {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,

        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
          end: "top 55%",
        },
      });
    },
    {
      scope: imageRef,
    }
  );

  // =================================
  // TEXT REVEAL ANIMATION
  // =================================

  useGSAP(
    () => {
      const paragraphs = textRef.current?.querySelectorAll("p");

      if (!paragraphs) return;

      paragraphs.forEach((element) => {
        const textData = element.textContent;
        const splitText = textData.split("");

        let clutter = "";

        splitText.forEach((character) => {
          clutter += `<span>${character === " " ? "&nbsp;" : character}</span>`;
        });

        element.innerHTML = clutter;
      });

      gsap.to(textRef.current.querySelectorAll("p span"), {
        color: "black",
        stagger: 0.03,

        scrollTrigger: {
          trigger: textRef.current,
          start: "top 73%",
          end: "top 15%",
          scrub: 2,
        },
      });
    },
    {
      scope: textRef,
    }
  );

  return (
    <section className="min-h-screen w-full bg-cream px-5 py-10 lg:px-16">
      {/* =================================
          PAGE HEADING
      ================================= */}

      <h1
        className="
          py-10
          text-center
          text-5xl
          font-[FjallaOne]
          uppercase
          lg:py-16
          lg:text-6xl
        "
      >
        About
      </h1>

      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div
        className="
          flex
          flex-col-reverse
          items-center
          gap-10
          lg:flex-row
          lg:gap-10
          lg:pr-8
        "
      >
        {/* =================================
            LEFT IMAGE
        ================================= */}

        <div className="w-full md:w-1/2 lg:w-1/2 lg:p-16">
          <div
            ref={imageRef}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="
              h-[400px]
              overflow-hidden
              rounded-3xl
              md:h-[560px]
              lg:h-[640px]
            "
          >
           <img
  src="/myimg.png"
  alt="Chandan Behera - Full Stack Developer"
  className="
    h-full
    w-full
    object-cover
    object-center
  "
/>
          </div>
        </div>

        {/* =================================
            RIGHT CONTENT
        ================================= */}

        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            lg:w-1/2
          "
        >
          {/* =================================
              HEADING
          ================================= */}

          <div
            ref={headingRef}
            className="mb-10"
          >
            <div className="overflow-hidden">
              <h2
                className="
                  text-right
                  font-[voyage]
                  text-4xl
                  leading-none
                  md:text-5xl
                  lg:text-6xl
                "
              >
                The
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2
                className="
                  pr-6
                  text-right
                  font-[voyage]
                  text-4xl
                  leading-none
                  md:pr-10
                  md:text-5xl
                  lg:pr-16
                  lg:text-6xl
                "
              >
                Full Stack
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2
                className="
                  pr-2
                  text-right
                  font-[voyage]
                  text-4xl
                  leading-none
                  md:pr-4
                  md:text-5xl
                  lg:pr-6
                  lg:text-6xl
                "
              >
                Developer
              </h2>
            </div>
          </div>

          {/* =================================
              ABOUT TEXT
          ================================= */}

          <div ref={textRef}>
            <p
              className="
                text-right
                font-[FjallaOne]
                text-lg
                leading-relaxed
                text-background
                md:text-xl
                lg:text-2xl
              "
            >
              I'm Chandan Behera, a passionate Full Stack Developer and a
              fresher who enjoys turning ideas into interactive and meaningful
              web experiences. I work with Java, Spring Boot, SQL, JavaScript,
              React, HTML, and CSS to build responsive and user-friendly
              applications.
            </p>

            <p
              className="
                mt-6
                text-right
                font-[FjallaOne]
                text-lg
                leading-relaxed
                text-background
                md:text-xl
                lg:text-2xl
              "
            >
              My journey in development has been driven by curiosity,
              continuous learning, and hands-on projects. I enjoy solving
              problems, exploring new technologies, and understanding how
              things work behind the scenes — from designing clean interfaces
              to building reliable backend systems.
            </p>

            <p
              className="
                mt-6
                text-right
                font-[FjallaOne]
                text-lg
                leading-relaxed
                text-background
                md:text-xl
                lg:text-2xl
              "
            >
              As a fresher, I'm looking for opportunities where I can learn,
              contribute, and grow as a professional developer. I'm not just
              focused on making things work — I want to build experiences that
              are useful, simple, and memorable.
            </p>
          </div>
        </div>
      </div>

      {/* =================================
          MORE ABOUT ME BUTTON
      ================================= */}

      {location.pathname !== "/about" && (
        <div className="mt-20 flex justify-center">
          <Link to="/about">
            <button
              type="button"
              className="
                group
                relative
                flex
                cursor-pointer
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-black
                bg-black
                px-10
                py-2
                text-2xl
                text-cream
              "
            >
              {/* Hover Background */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  transform
                  bg-cream
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-0
                "
              />

              {/* Button Content */}

              <span
                className="
                  relative
                  flex
                  items-center
                  gap-3
                  text-lg
                  transition-colors
                  duration-300
                  ease-out
                  group-hover:text-black
                "
              >
                More About Me

                <FaArrowRight className="text-xl" />
              </span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Aboutpage;