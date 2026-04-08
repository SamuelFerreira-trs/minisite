import type { DepoimentosConfig } from '../types'

export function renderDepoimentos(config: DepoimentosConfig, iconStar: string): string {
  const stars = Array(5).fill(`
    <i data-lucide="${iconStar}"></i>
  `).join('')

  const cards = config.itens.map((d, i) => `
    <div class="card-depoimento reveal" style="transition-delay: ${i * 100}ms;">
      <div>
        <div class="card-depoimento__stars">${stars}</div>
        <p class="card-depoimento__texto" style="margin-top: 16px;">"${d.texto}"</p>
      </div>
      <p class="card-depoimento__autor">${d.autor}</p>
    </div>
  `).join('')

  return `
    <section id="depoimentos" class="section section--dark">
      <div class="section-header reveal">
        <p class="eyebrow eyebrow--light">Avaliações</p>
        <h2 class="section-title section-title--light">O que nossos clientes dizem</h2>
      </div>
      <div class="depoimentos-grid">
        ${cards}
      </div>
    </section>
  `
}
