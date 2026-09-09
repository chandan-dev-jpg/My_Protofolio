import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    number: "01",
    title: "FRONTEND",
    description:
      "Building modern, responsive and interactive user interfaces with clean design and smooth user experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    number: "02",
    title: "BACKEND",
    description:
      "Building backend applications, REST APIs and server-side functionality using Java and Spring Boot.",
    skills: ["Java", "Spring Boot", "JDBC", "REST API","Node.js"],
  },

  {
    number: "03",
    title: "DATABASE",
    description:
      "Working with databases to store, manage and retrieve application data efficiently.",
    skills: ["SQL", "Oracle", "MySQL", "MongoDB"],
  },

  {
    number: "04",
    title: "ANIMATION",
    description:
      "Creating smooth and engaging interactions that make web experiences feel dynamic and memorable.",
    skills: ["GSAP", "ScrollTrigger", "Framer Motion", "Lenis"],
  },

  {
    number: "05",
    title: "TOOLS",
    description:
      "Tools I use to write code, test APIs, manage projects and collaborate during development.",
    skills: ["Git", "GitHub","Eclipse", "VS Code"],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 80px",
          endTrigger: cards[index + 1],
          end: "top 80px",
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress;

            gsap.to(card, {
              scale: 1 - progress * 0.08,
              y: -progress * 25,
              duration: 0.1,
              overwrite: true,
            });
          },
        });
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-cream px-5 py-14 md:px-10"
    >
      {/* HEADER */}
      <div className="mb-28 mt-16">
        <p className="mb-4 text-sm tracking-[0.25em] opacity-50">
          (05) MY TECHNOLOGIES
        </p>

        <h2
          className="
            select-none
            caret-transparent
            text-[15vw]
            font-black
            leading-[0.8]
            tracking-[-0.06em]
            md:text-[8vw]
          "
        >
          SKILLS
        </h2>

        <p className="mt-8 max-w-xl text-sm opacity-60 md:text-base">
          Technologies and tools I use to design, develop and build modern
          full-stack web applications.
        </p>
      </div>

      {/* CARDS */}
      <div className="mx-auto max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={skill.number}
            className="sticky top-[80px] mb-10 h-[70vh]"
          >
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                relative
                flex
                h-full
                w-full
                flex-col
                justify-between
                overflow-hidden
                rounded-[30px]
                border
                border-black
                bg-[#111]
                p-7
                text-[#f1eee7]
                shadow-2xl
                md:p-12
              "
            >
              {/* TOP */}
              <div className="flex items-start justify-between">
                <span className="text-sm tracking-widest md:text-base">
                  / {skill.number}
                </span>

                <span className="text-sm tracking-widest">SKILL</span>
              </div>

              {/* CENTER */}
              <div>
                <h3
                  className="
                    mb-6
                    text-[12vw]
                    font-extrabold
                    leading-[0.8]
                    tracking-[-0.06em]
                    text-cream
                    md:text-[8vw]
                  "
                >
                  {skill.title}
                </h3>

                <p
                  className="
                    max-w-xl
                    text-base
                    leading-relaxed
                    opacity-70
                    md:text-lg
                  "
                >
                  {skill.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="flex flex-wrap gap-3">
                {skill.skills.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/30
                      px-4
                      py-2
                      text-sm
                      transition-all
                      duration-300
                      hover:bg-cream
                      hover:text-black
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;