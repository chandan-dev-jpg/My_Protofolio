import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { id: "01.", name: "Home", path: "/" },
    { id: "02.", name: "About", path: "/about" },
    { id: "03.", name: "Projects", path: "/project" },
    { id: "04.", name: "Journey", path: "/experience" },
    { id: "05.", name: "Contact", path: "/contact" },
  ];

  const [toggle, setToggle] = useState(false);

  const navRef = useRef(null);
  const linkRef = useRef(null);

  const menuClick = () => {
    setToggle((prev) => !prev);
  };

  useGSAP(
    () => {
      if (!toggle) return;

      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        {
          x: "100vw",
        },
        {
          x: 0,
          duration: 0.8,
          ease: "power4.out",
        }
      ).from(
        linkRef.current.querySelectorAll("a"),
        {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    },
    {
      dependencies: [toggle],
    }
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div
        className="
          fixed
          z-99
          w-full
          px-5
          lg:px-10
          py-4
          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setToggle(false)}
          className="
            text-black
            font-[FjallaOne]
            text-xl
            md:text-2xl
            uppercase
            tracking-wide
          "
        >
          Chandan Behera
        </Link>

        {/* Menu Button */}
        <button
          type="button"
          onClick={menuClick}
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
          className="
            relative
            w-12
            h-12
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            cursor-pointer
          "
        >
          {/* First Line */}
          <span
            className={`
              absolute
              w-7
              h-0.5
              bg-cream
              rounded-full
              transition-all
              duration-500
              ${toggle ? "rotate-45" : "-translate-y-1.5"}
            `}
          />

          {/* Second Line */}
          <span
            className={`
              absolute
              w-7
              h-0.5
              bg-cream
              rounded-full
              transition-all
              duration-500
              ${toggle ? "-rotate-45" : "translate-y-1.5"}
            `}
          />
        </button>
      </div>

      {/* ================= FULL SCREEN MENU ================= */}
      <div
        ref={navRef}
        className={`
          fixed
          inset-0
          z-90
          h-screen
          w-full
          bg-black
          text-cream
          ${toggle ? "flex" : "hidden"}
          flex-col
          justify-center
          px-6
          md:px-12
          lg:px-20
        `}
      >
        {/* Developer Name */}
        <div className="absolute top-8 left-6 md:left-12 lg:left-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-50">
            Full Stack Developer
          </p>

          <h2 className="mt-2 text-xl md:text-2xl font-[FjallaOne] uppercase">
            Chandan Behera
          </h2>
        </div>

        {/* Menu Links */}
        <div
          ref={linkRef}
          className="flex flex-col gap-3 md:gap-4"
        >
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setToggle(false)}
              className="nav-link group w-fit"
            >
              <div className="flex items-center gap-4 md:gap-8">
                {/* Number */}
                <span className="text-sm md:text-base opacity-40 font-[FjallaOne]">
                  {item.id}
                </span>

                {/* Name + Arrow */}
                <div className="flex items-center overflow-hidden">
                  <h1
                    className="
                      font-[MangoGro]
                      uppercase
                      text-6xl
                      sm:text-7xl
                      md:text-8xl
                      lg:text-[7vw]
                      leading-[0.9]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:translate-x-3
                    "
                  >
                    {item.name}
                  </h1>

                  <span
                    className="
                      ml-3
                      text-3xl
                      md:text-5xl
                      opacity-0
                      -translate-x-5
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* Underline */}
              <div
                className="
                  ml-8
                  md:ml-14
                  mt-2
                  lg:mt-0
                  h-[2px]
                  w-0
                  bg-cream
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </div>

        {/* ================= BOTTOM INFO ================= */}
        <div
          className="
            absolute
            bottom-8
            left-6
            right-6
            md:left-12
            md:right-12
            lg:left-20
            lg:right-20
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5
          "
        >
          {/* Tech Stack */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">
              Tech Stack
            </p>

            <p className="text-sm opacity-70">
              Java · Spring Boot · React · JavaScript · SQL
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:chandanbehera4598@gmail.com"
            className="
              text-sm
              md:text-base
              hover:underline
              transition-all
            "
          >
            chandanbehera4598@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;