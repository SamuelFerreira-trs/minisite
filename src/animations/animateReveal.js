import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateReveal() {
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  gsap.utils.toArray('.card-servico__img').forEach((img) => {
    gsap.fromTo(img,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          once: true,
        },
      }
    );
  });
}
