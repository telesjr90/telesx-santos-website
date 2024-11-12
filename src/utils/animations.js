import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const fadeInUp = (element, delay = 0) => {
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const staggerFadeInUp = (elements, stagger = 0.2) => {
  return gsap.from(elements, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger,
    ease: 'power3.out'
  });
};

export const scaleIn = (element) => {
  return gsap.from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
};

export const createScrollTrigger = (element, animation) => {
  return ScrollTrigger.create({
    trigger: element,
    animation: animation,
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  });
};
