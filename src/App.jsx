import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Nav";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/Scroll/ScrollTop";
import SmoothScroll from "./components/Scroll/SmoothScroll";

import About from "./components/About";
import Contact from "./components/Contact";
import ExperiencePage from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <SmoothScroll>
      <ScrollTop />

      <div className="relative overflow-x-clip">
        <Cursor />
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </SmoothScroll>
  );
}

export default App;
