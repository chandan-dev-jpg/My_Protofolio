import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const getRef = useRef(null);
  const paraRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // =========================
      // Split Big Text
      // =========================
      const footerText = textRef.current.querySelectorAll("h1");

      footerText.forEach((elem) => {
        const textData = elem.textContent;
        const splitText = textData.split("");

        let clutter = "";

        splitText.forEach((char) => {
          clutter += `<span style="display:inline-block">${
            char === " " ? "&nbsp;" : char
          }</span>`;
        });

        elem.innerHTML = clutter;
      });

      // =========================
      // GSAP Timeline
      // =========================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: getRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Heading Animation
      tl.from(getRef.current.querySelector("h1"), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        clearProps: "transform,opacity",
      })

        // Paragraph Animation
        .from(
          paraRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.2"
        )

        // Big Name Animation
        .from(
          textRef.current.querySelectorAll("h1 span"),
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.6,
            ease: "power4.out",
            stagger: 0.04,
          },
          "-=0.2"
        );
    },
    { scope: getRef }
  );

  // =========================
  // Social Links
  // =========================
  const socialLinks = [
    {
      name: "LINKEDIN",
      icon: <CiLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/chanadn123",
    },

    {
      name: "GITHUB",
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/chandan-dev-jpg",
    },

    {
      name: "EMAIL",
      icon: <FaEnvelope className="text-xl" />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=chandanbehera4598@gmail.com",
    },
  ];

  return (
    <footer
      className="
        min-h-[90vh]
        w-full
        bg-cream
        pt-16
        px-3
        md:px-20
        relative
        overflow-hidden
      "
    >
      {/* =========================
          Heading
      ========================= */}
      <div
        ref={getRef}
        className="w-fit group overflow-hidden"
      >
        <h1
          className="
            text-5xl
            lg:text-7xl
            cursor-pointer
            outline-none
            font-[FjallaOne]
          "
          tabIndex={0}
        >
          GET IN <span className="text-neutral-600">TOUCH</span>
        </h1>

        {/* Heading Underline */}
        <div
          className="
            h-1
            w-0
            mt-1
            bg-black
            rounded-full
            transition-all
            duration-500
            ease-in-out
            group-hover:w-full
            group-focus-within:w-full
          "
        />
      </div>

      {/* =========================
          Content
      ========================= */}
      <div
        ref={paraRef}
        className="
          mt-10
          lg:mt-15
          md:flex
          md:gap-20
          lg:gap-40
        "
      >
        {/* =========================
            Left Side
        ========================= */}
        <div className="md:w-1/2 lg:w-1/3">
          <p className="text-sm">
            Have an idea you'd like to bring to life? I'm always open to
            interesting projects, opportunities, and creative collaborations.
            Let's connect, exchange ideas, and build something meaningful
            together.
          </p>

          {/* Collaborate Button */}
          <Link to="/contact#contact">
            <span
              className="
                inline-block
                bg-cream
                cursor-pointer
                border
                px-8
                mt-10
                py-3
                font-semibold
                font-[FjallaOne]
                border-black
                relative
                overflow-hidden
                group
              "
            >
              {/* Hover Background */}
              <span
                className="
                  absolute
                  inset-0
                  bg-black
                  transform
                  -translate-x-full
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-0
                "
              />

              {/* Button Text */}
              <span
                className="
                  relative
                  transition-colors
                  duration-300
                  ease-out
                  group-hover:text-cream
                  flex
                  items-center
                  gap-3
                  text-lg
                "
              >
                LET'S COLLABORATE
              </span>
            </span>
          </Link>
        </div>

        {/* =========================
            Right Side
        ========================= */}
        <div
          className="
            mt-10
            md:mt-0
            md:w-1/2
            lg:w-1/3
          "
        >
          <p className="text-sm">
            I'm currently looking for opportunities as a Full Stack Developer.
            You can reach me through LinkedIn, GitHub, or email. I'd be happy
            to connect, collaborate, or discuss new opportunities.
          </p>

          {/* =========================
              Social Links
          ========================= */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              md:gap-5
              mt-7
            "
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit"
              >
                <h6 className="flex items-center gap-1 font-bold">
                  {item.icon}
                  {item.name}
                </h6>

                {/* Hover Underline */}
                <div
                  className="
                    h-0.5
                    w-0
                    bg-black
                    rounded-full
                    transition-all
                    duration-500
                    ease-in-out
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* =========================
              Email Address
          ========================= */}
          <a
            href="mailto:chandanbehera4598@gmail.com"
            className="
              inline-block
              mt-5
              text-sm
              font-semibold
              hover:underline
            "
          >
            chandanbehera4598@gmail.com
          </a>
        </div>
      </div>

      {/* =========================
          Big Name
      ========================= */}
      <div
        ref={textRef}
        className="
          absolute
          bottom-[-5%]
          left-0
          w-full
          overflow-hidden
          md:bottom-[-8%]
        "
      >
        {/* CHANDAN */}
        <h1
          className="
            select-none
            caret-transparent
            whitespace-nowrap
            text-[25vw]
            leading-[0.75]
            tracking-[-0.06em]
            md:text-[18vw]
            lg:text-[15vw]
          "
        >
          CHANDAN
        </h1>

        {/* BEHERA */}
        <h1
          className="
            select-none
            caret-transparent
            whitespace-nowrap
            text-[25vw]
            leading-[0.75]
            tracking-[-0.06em]
            md:text-[18vw]
            lg:text-[15vw]
          "
        >
          BEHERA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;