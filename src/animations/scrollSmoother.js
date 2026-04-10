import Lenis from 'lenis';

export function initScrollSmoother() {
  const lenis = new Lenis({
    duration: 0.5,
    smoothTouch: false,
    autoRaf: true,
  });
}