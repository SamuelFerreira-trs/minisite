// sections/hero.ts — Mobile-only: imagem de capa em cima, conteúdo textual embaixo, coluna única.
import type { HeroConfig } from '../types'
import { wppLink, nl2br } from '../utils'

export function renderHero(config: HeroConfig, whatsapp: string, nome: string): string {
  const cta = wppLink(whatsapp, `Olá! Quero ser Membership.`)

  const stats = config.stats.map(s => `
    <div class="stat">
      <span class="stat__num">${s.num}</span>
      <span class="stat__label">${s.label}</span>
    </div>
  `).join('')

  return `
    <section id="hero" class="section" style="padding-top: calc(var(--nav-height) + 40px);">
      <div class="reveal">
        <div class="hero-cover">
          <img
            id="image"
            src="./hero.png"
            alt="${nome}"
            loading="eager"
          />
        </div>
        <p class="eyebrow">${config.eyebrow}</p>
        <h1 id="hero-title" class="section-title" style="margin-top: 12px;">${nl2br(config.titulo)}</h1>
        <p style="font-family: var(--f-body); font-size: 15px; color: var(--c-text-sub); line-height: 1.5; margin-top: 12px;">${config.subtitulo}</p>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 24px;">
          <a href="${cta}" class="btn-primary" target="_blank" rel="noopener">${config.cta}</a>
          <a href="#servicos" class="btn-ghost">Ver serviços</a>
        </div>
        <div class="stats-grid" style="margin-top: 40px;">
          ${stats}
        </div>
      </div>
    </section>
  `
}
