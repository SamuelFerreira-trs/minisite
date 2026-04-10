import Lenis from 'lenis';

export function initScrollSmoother() {
  const lenis = new Lenis({
    duration: 2,
    smoothTouch: false,
    autoRaf: true,
  });
}