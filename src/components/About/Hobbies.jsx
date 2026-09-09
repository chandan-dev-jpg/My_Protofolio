
import gsap from "gsap";

const Hobbies = () => {
  const hobbies = [
  {
    id: 1,
    title: "Gaming",
    image: "/gaming.avif",
    description:
      "Enjoying games, exploring new worlds, and improving problem-solving skills through gameplay.",
  },

  {
    id: 2,
    title: "Travel",
    image: "/travel.avif",
    description:
      "Exploring new places, experiencing different environments, and discovering new perspectives.",
  },

  {
    id: 3,
    title: "Writing",
    image: "/writing.avif",
    description:
      "Putting thoughts, ideas, and experiences into words through creative writing.",
  },

  ];

  // =================================
  // CURSOR RESET
  // =================================

  const mouseLeave = () => {
    const cursor = document.querySelector("#custom-cursor");

    if (!cursor) return;

    gsap.to(cursor, {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      duration: 0.1,
      ease: "power3.out",
    });

    cursor.style.backgroundImage = "";
    cursor.style.backgroundSize = "";
    cursor.style.backgroundPosition = "";
    cursor.style.border = "1px solid black";
    cursor.style.backgroundColor = "black";
  };

  // =================================
  // CURSOR IMAGE PREVIEW
  // =================================

  const mouseEnter = (hobby) => {
    const cursor = document.querySelector("#custom-cursor");

    if (!cursor) return;

    const isMobile = window.innerWidth < 768;

    gsap.to(cursor, {
      width: isMobile ? "70vw" : "20vw",
      height: isMobile ? "35vh" : "40vh",
      borderRadius: 0,
      duration: 0.1,
      ease: "power3.out",
    });

    cursor.style.backgroundImage = `url(${hobby.image})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.border = "none";
    cursor.style.backgroundColor = "transparent";
  };

  return (
    <div className="min-h-screen w-full bg-cream px-4 py-10 md:px-22">

      {/* =================================
          SECTION TITLE
      ================================= */}

      <h1
        className="
          text-2xl
          font-bold
          uppercase
          font-[FjallaOne]
        "
      >
        Something interesting about me other than tech
      </h1>

      {/* =================================
          HOBBIES LIST
      ================================= */}

      <div className="mt-20">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            onMouseEnter={() => mouseEnter(hobby)}
            onMouseLeave={mouseLeave}
            className="
              group
              relative
              overflow-hidden
              border-b-2
              first:border-t-2
            "
          >
            {/* Hover Background */}

            <div
              className="
                absolute
                inset-0
                bg-black
                scale-y-0
                origin-center
                transition-transform
                duration-500
                group-hover:scale-y-100
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                flex
                justify-between
                px-5
                py-6
                md:px-12
                md:py-8
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              {/* Number */}

              <h1
                className="
                  text-3xl
                  w-[40%]
                  flex
                  items-center
                  font-[FjallaOne]
                "
              >
                {String(hobby.id).padStart(2, "0")}
              </h1>

              {/* Hobby Content */}

              <div className="w-[60%]">
                <h1
                  className="
                    text-3xl
                    font-[FjallaOne]
                  "
                >
                  {hobby.title}
                </h1>

                <p className="mt-4">
                  {hobby.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hobbies;
