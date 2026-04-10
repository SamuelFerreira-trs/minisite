// engine.ts — Lê o CONFIG e monta o DOM
import { CONFIG } from '../config'
import { renderNav }         from './sections/nav'
import { renderHero }        from './sections/hero'
import { renderSobre }       from './sections/sobre'
import { renderServicos }    from './sections/servicos'
import { renderGaleria }     from './sections/galeria'
import { renderDepoimentos } from './sections/depoimentos'
import { renderLocalizacao } from './sections/localizacao'
import { renderContato }     from './sections/contato'
import { renderFooter }      from './sections/footer'
import { renderWppFloat }    from './sections/wpp'
import { animateHeroTitle } from './animations/textAnimations'
import { initScrollSmoother } from './animations/scrollSmoother'
import { animateNav } from './animations/animateNav'
import { animateImage } from './animations/animeteImage'

function applyTheme(): void {
  const { fundoPrincipal, fundoSecundario, fundoTerciario, textoPrimario, textoSecundario, botaoPrimario, botaoSecundario } = CONFIG.cores
  const { titulos, corpo } = CONFIG.fontes

  // Carrega as fontes via Google Fonts
  const fontNames = [...new Set([titulos, corpo])]
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?${fontNames.map(f => `family=${f.replace(/ /g, '+')}:wght@400;500;600;700&`).join('')}display=swap`
  document.head.appendChild(link)

  // Deriva todas as variáveis a partir das cores base
  const root = document.documentElement
  const s = (v: string, val: string) => root.style.setProperty(v, val)

  s('--c-bg',           fundoPrincipal)
  s('--c-surface',      fundoSecundario)
  s('--c-surface2',     darken(fundoSecundario, 0.05))
  s('--c-border',       mix(fundoPrincipal, textoPrimario, 0.15))
  s('--c-surface3',     fundoTerciario)
  s('--c-accent',       botaoPrimario)
  s('--c-accent2',      darken(botaoPrimario, 0.15))
  s('--c-accent-secondary', botaoSecundario)
  s('--c-accent-bg',    mix(fundoPrincipal, botaoPrimario, 0.05))
  s('--c-accent-muted', mix(botaoPrimario, fundoPrincipal, 0.35))
  s('--c-text',         textoPrimario)
  s('--c-text-sub',     mix(textoPrimario, fundoPrincipal, 0.12))
  s('--c-muted',        mix(textoPrimario, fundoPrincipal, 0.45))
  s('--c-muted2',       mix(textoPrimario, fundoPrincipal, 0.60))
  s('--c-text-secondary', textoSecundario)
  s('--c-white',        fundoPrincipal)
  s('--c-dark',         fundoTerciario)
  s('--c-dark2',        darken(fundoTerciario, 0.12))
  s('--c-dark-border',  mix(fundoTerciario, fundoPrincipal, 0.45))
  s('--f-display',      `'${titulos}', serif`)
  s('--f-body',         `'${corpo}', sans-serif`)
}

/** Interpola dois hexadecimais. ratio=0 → a puro, ratio=1 → b puro */
function mix(a: string, b: string, ratio: number): string {
  const [ar, ag, ab] = hexToRgb(a)
  const [br, bg, bb] = hexToRgb(b)
  const r = Math.round(ar + (br - ar) * ratio)
  const g = Math.round(ag + (bg - ag) * ratio)
  const bl = Math.round(ab + (bb - ab) * ratio)
  return rgbToHex(r, g, bl)
}

/** Escurece um hex em `amount` (0–1) */
function darken(hex: string, amount: number): string {
  const [r, g, b] = hexToRgb(hex)
  return rgbToHex(
    Math.round(r * (1 - amount)),
    Math.round(g * (1 - amount)),
    Math.round(b * (1 - amount)),
  )
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}

const RENDERERS: Record<string, () => string> = {
  hero:        () => renderHero(CONFIG.hero, CONFIG.whatsapp, CONFIG.nome),
  sobre:       () => renderSobre(CONFIG.sobre, CONFIG.sobre.iconeDiferencial),
  servicos:    () => renderServicos(CONFIG.servicos),
  galeria:     () => renderGaleria(CONFIG.galeria, CONFIG.galeria.iconeAnterior, CONFIG.galeria.iconeProximo),
  depoimentos: () => renderDepoimentos(CONFIG.depoimentos, CONFIG.depoimentos.iconeEstrela),
  localizacao: () => renderLocalizacao(CONFIG.localizacao, CONFIG.localizacao.iconeEndereco, CONFIG.localizacao.iconeTelefone, CONFIG.localizacao.iconeEmail),
  contato:     () => renderContato(CONFIG.contato, CONFIG.whatsapp, CONFIG.nome, CONFIG.iconeWhatsapp),
}

export function mount(): void {
  // 0. Garante que a página comece no topo (evita scroll restoration do navegador)
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 1. Aplica cores, fontes e estilo
  applyTheme()
  document.documentElement.setAttribute('data-estilo', CONFIG.estilo)

  // 2. Título da página
  document.title = `${CONFIG.nome} — ${CONFIG.slogan}`

  // 4. Nav
  const navEl = document.getElementById('nav')
  if (navEl) navEl.innerHTML = renderNav(CONFIG)

  // 5. Seções na ordem do CONFIG
  const mainEl = document.getElementById('main')
  if (mainEl) {
    mainEl.innerHTML = CONFIG.secoes
      .map(id => RENDERERS[id]?.() ?? '')
      .join('')
  }

  // 6. Footer
  const footerEl = document.getElementById('footer')
  if (footerEl) footerEl.innerHTML = renderFooter(CONFIG)

  // 7. WhatsApp float
  const wppEl = document.getElementById('wpp-float')
  if (wppEl) wppEl.innerHTML = renderWppFloat(CONFIG.whatsapp, CONFIG.iconeWhatsapp)

  // 8. Comportamentos interativos
  initReveal()
  initGaleria()
  animateHeroTitle()
  initScrollSmoother()
  animateNav()
  animateImage()
  
  // 9. Inicializa ícones do lucide
  import('lucide').then(({ createIcons, icons }) => {
    createIcons({ icons })
  })
}


function initReveal(): void {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observer.unobserve(e.target)
      }
    }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

function initGaleria(): void {
  const track = document.getElementById('galeria-track')
  const prevBtn = document.getElementById('galeria-prev')
  const nextBtn = document.getElementById('galeria-next')
  if (!track || !prevBtn || !nextBtn) return

  let current = 0
  const slides = track.querySelectorAll('.galeria-slide')
  const total = slides.length

  function goTo(index: number): void {
    current = ((index % total) + total) % total
    const slideWidth = (slides[0] as HTMLElement).offsetWidth + 14 // gap 14px
    ;(track as HTMLElement).style.transform = `translateX(-${current * slideWidth}px)`
  }

  prevBtn.addEventListener('click', () => goTo(current - 1))
  nextBtn.addEventListener('click', () => goTo(current + 1))

  // Recalcula ao redimensionar
  window.addEventListener('resize', () => goTo(current), { passive: true })
}
