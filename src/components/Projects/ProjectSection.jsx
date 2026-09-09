import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "Lumora Estates",
    description:
      "A modern and responsive real-estate web application for exploring properties and locations, featuring property listings, filtering, galleries, testimonials, contact forms and a schedule visit experience.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML", "CSS"],
    liveLink: "https://lumora-estates-kappa.vercel.app/",
    image: "/lumora-estates.png",
    linkType: "live",
  },

  {
    title: "YBT Digital Product",
    description:
      "A modern digital product website focused on presenting digital products through a clean, responsive and engaging user interface.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    liveLink: "https://ybt-digital-product.vercel.app/",
    image: "/ybt-digital-product.png",
    linkType: "live",
  },
  {
    title: "3D Website",
    description:
      "An interactive 3D website focused on immersive visuals, modern UI and engaging web interactions.",
    techStack: ["HTML", "CSS", "Spline"],
    liveLink: "https://3d-website-one-beta.vercel.app/",
    image: "/3d_website.png",
    linkType: "live",
  },
];

const ProjectSection = () => {
  const location = useLocation();

  const projectsToShow =
    location.pathname === "/project" ? projectData : projectData.slice(0, 3);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });
  });

  const mouseEnter = (e) => {
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
    cursor.innerHTML = "<p>Project</p>";

    const img = e.currentTarget.querySelector("img");

    if (img) {
      gsap.to(img, {
        scale: 1.09,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  };

  const mouseLeave = (e) => {
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

    const img = e.currentTarget.querySelector("img");

    if (img) {
      gsap.to(img, {
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  };

  return (
    <section className="min-h-screen w-full bg-cream py-10">
      {/* HEADER */}
      <h1 className="pt-14 text-center font-[FjallaOne] text-4xl md:text-5xl">
        Selected <span className="text-[#B58A3C]">Projects</span>
      </h1>

      {/* PROJECTS */}
      <div className="w-full px-3 pb-20 sm:px-5 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        {projectsToShow.map((project, index) => (
          <div
            key={project.title}
            className="
              project-card
              mt-18
              rounded-xl
              px-3
              py-8
              text-black
              shadow-xl
              sm:px-5
              md:px-10
              md:py-8
              lg:flex
              lg:items-center
              lg:gap-10
              xl:gap-16
            "
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <div
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className="
                  h-60
                  w-full
                  overflow-hidden
                  sm:h-72
                  md:h-90
                  lg:h-84
                  xl:h-96
                "
              >
                <img
                  className="h-full w-full object-cover object-center"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2">
              <h2 className="mt-4 font-[mangoGro] text-5xl md:text-6xl lg:mt-0">
                <span className="opacity-50">
                  {String(index + 1).padStart(2, "0")}.
                </span>{" "}
                {project.title}
              </h2>

              <p className="my-6 text-md font-normal leading-relaxed opacity-50">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div>
                <h3 className="mb-4 inline-flex items-center gap-2 font-bold">
                  Tech Stack <FaArrowRight />
                </h3>

                <div className="flex w-full flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        w-fit
                        rounded-full
                        border
                        px-6
                        py-1
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINK */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div
                  className="
                    group
                    relative
                    mt-6
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    overflow-hidden
                    border
                    border-black
                    bg-cream
                    px-10
                    py-2
                    font-[FjallaOne]
                    text-2xl
                    text-black
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-black
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:translate-x-0
                    "
                  />

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
                      group-hover:text-cream
                    "
                  >
                    {project.linkType === "github"
                      ? "View GitHub"
                      : "Live Link"}

                    <FaArrowRight className="text-xl" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MORE PROJECTS */}
      {location.pathname !== "/project" && (
        <div className="mt-5 flex justify-center">
          <Link to="/project">
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
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-cream
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-0
                "
              />

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
                More Projects
              </span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
