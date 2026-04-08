// sections/sobre.ts
import type { SobreConfig } from '../types'
import { nl2br } from '../utils'

export function renderSobre(config: SobreConfig, iconName: string): string {
  const diferenciais = config.diferenciais.map((d, i) => `
    <div class="card-diferencial reveal" style="transition-delay: ${i * 80}ms;">
      <div class="card-diferencial__icon"><i data-lucide="${iconName}"></i></div>
      <div>
        <p class="card-diferencial__titulo">${d.titulo}</p>
        <p class="card-diferencial__desc">${d.desc}</p>
      </div>
    </div>
  `).join('')

  return `
    <section id="sobre" class="section">
      <div class="section-header reveal">
        <p class="eyebrow">Sobre nós</p>
        <h2 class="section-title">${nl2br(config.titulo)}</h2>
        <p style="font-family: var(--f-body); font-size: var(--fs-body); color: var(--c-text-sub); line-height: var(--lh-body);">${config.texto}</p>
      </div>
      <div class="diferenciais-grid">
        ${diferenciais}
      </div>
    </section>
  `
}
