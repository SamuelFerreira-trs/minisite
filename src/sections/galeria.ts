import type { GaleriaConfig } from '../types'

export function renderGaleria(config: GaleriaConfig, setaEsq: string, setaDir: string): string {
  const slides = config.imagens.map((url, i) => `
    <div class="galeria-slide">
      <img src="${url}" alt="Foto do espaço ${i + 1}" loading="lazy" />
    </div>
  `).join('')

  return `
    <section id="galeria" class="section section--surface3">
      <div class="section-header reveal">
        <p class="eyebrow--light">Nosso espaço</p>
        <h1 class="section-title--light">Um ambiente pensado para a sua evolução</h2>
      </div>
      <div class="galeria-slider reveal" id="galeria-slider">
        <div class="galeria-track" id="galeria-track">
          ${slides}
        </div>
      </div>
      <div class="galeria-nav">
        <button class="galeria-btn" id="galeria-prev" aria-label="Foto anterior">
          <i data-lucide="${setaEsq}"></i>
        </button>
        <button class="galeria-btn" id="galeria-next" aria-label="Próxima foto">
          <i data-lucide="${setaDir}"></i>
        </button>
      </div>
    </section>
  `
}
