const ProjectCard = () => {
  return (
    <div className="m-2 rounded-xl border px-3 py-8">
      {/* Project Title */}
      <h2 className="font-[MangoGro] text-5xl">
        <span className="opacity-30">01.</span> Instagram Clone
      </h2>

      {/* Description */}
      <p className="my-8 text-xl font-normal leading-relaxed">
        A responsive Instagram-inspired web application built with a focus on
        modern UI, reusable components and interactive user experience.
      </p>

      {/* Tech Stack */}
      <h3 className="mb-3 font-bold">Tech Stack</h3>

      <div className="flex flex-wrap gap-2">
        <span className="w-fit rounded-full border px-6 py-2">
          Java
        </span>

        <span className="w-fit rounded-full border px-6 py-2">
          Spring Boot
        </span>

        <span className="w-fit rounded-full border px-6 py-2">
          React
        </span>

        <span className="w-fit rounded-full border px-6 py-2">
          SQL
        </span>
      </div>

      {/* Project Image */}
      <div className="mt-10 h-60 w-full overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover"
          src="/instagram.png"
          alt="Instagram Clone project"
        />
      </div>

      {/* Live Button */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-full border border-black bg-black px-8 py-2 text-cream"
      >
        Live
      </a>
    </div>
  );
};

export default ProjectCard;