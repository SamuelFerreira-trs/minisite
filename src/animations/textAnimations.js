import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function animateHeroTitle() {
  const el = document.getElementById("hero-title");
  if (!el) return;

  const split = new SplitText(el, { type: "words" });

  gsap.from(split.words, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0.2,
  });
}