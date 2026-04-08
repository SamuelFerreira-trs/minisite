// sections/servicos.ts
import type { ServicoItem } from '../types'

export function renderServicos(servicos: ServicoItem[]): string {
  const cards = servicos.map((s, i) => `
    <div class="card-servico reveal" style="transition-delay: ${i * 60}ms;">
      <p class="card-servico__num">${String(i + 1).padStart(2, '0')}</p>
      <div>
        <div>
          <p class="card-servico__nome">${s.nome}</p>
          <p class="card-servico__desc">${s.desc}</p>
        </div>
        <div class="card-servico__divider" style="margin: 16px 0;"></div>
        <p class="card-servico__preco">${s.preco}</p>
      </div>
    </div>
  `).join('')

  return `
    <section id="servicos" class="section section--surface">
      <div class="section-header reveal">
        <p class="eyebrow">O que oferecemos</p>
        <h2 class="section-title">Serviços que transformam</h2>
      </div>
      <div class="servicos-grid">
        ${cards}
      </div>
    </section>
  `
}
