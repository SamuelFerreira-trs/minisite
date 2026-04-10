import { gsap } from "gsap";

export function animateImage() {
  const img = document.querySelector('#image');
  if (!img) return;

  gsap.from(img, {
    opacity: 0,
    y: 100,
    transformOrigin: 'center',
    borderRadius: '24px',
    duration: 2,
    ease: 'expo.inOut',
  });
}
