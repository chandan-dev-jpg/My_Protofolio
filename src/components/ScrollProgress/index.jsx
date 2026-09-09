import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="fixed top-0 left-0 z-[9999] h-0.5 w-full origin-left rounded-full bg-black"
    />
  );
};

export default ScrollProgress;