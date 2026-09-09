
import Hero from "../Hero";
import AnimateScrollbar from "../AnimateScrollbar";
import Aboutpage from "../About/Aboutpage";
import Experience from "../Experience/Experience";
import Skills from "../Skills";
import Footer from "../Footer";
import ProjectSection from "../Projects/ProjectSection";

const Home = () => {
  return (
    <div className="relative">
      <Hero />

      <AnimateScrollbar />

      <ProjectSection />

      <Experience />

      <Skills />

      <Aboutpage />

      <Footer />
    </div>
  );
};

export default Home;

