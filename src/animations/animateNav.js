import { gsap } from "gsap";

export function animateNav() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  // Salva os valores finais antes de sobrescrever
  const finalWidth = nav.offsetWidth;
  const finalPadding = getComputedStyle(nav).padding;

  // 1. Nav expande do centro
  gsap.from(nav, {
    width: 5,           // largura inicial pequena
    borderRadius: '999px', // começa como pílula
    duration: 0.8,
    ease: 'expo.inOut',
  });

  // 2. Conteúdo interno aparece depois
  gsap.from(['.nav-logo', '.nav-cta'], {
    y: -8,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out',
    stagger: 0.1,
    delay: 0.6,
  });
}
