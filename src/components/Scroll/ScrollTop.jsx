import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./useLenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollTop = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;

      if (target) {
        if (lenis?.current) {
          lenis.current.scrollTo(target, {
            duration: 1.2,
          });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else if (lenis?.current) {
        lenis.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      ScrollTrigger.refresh();
    });
  }, [pathname, hash, lenis]);

  return null;
};

export default ScrollTop;
