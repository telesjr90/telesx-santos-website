import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (sectionId) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: sectionId,
      offsetY: 80
    },
    ease: "power3.inOut"
  });
};
