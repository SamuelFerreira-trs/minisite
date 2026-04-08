// sections/contato.ts
import type { ContatoConfig } from '../types'
import { wppLink } from '../utils'

export function renderContato(config: ContatoConfig, whatsapp: string, nome: string, iconeWhatsapp: string): string {
  const cta = wppLink(whatsapp, `Olá! Gostaria de agendar uma consulta na ${nome}.`)

  return `
    <section id="contato" class="section section--surface2">
      <div class="section-header reveal">
        <p class="eyebrow">Fale Conosco</p>
        <h2 class="section-title">${config.titulo}</h2>
        <p style="font-family: var(--f-body); font-size: var(--fs-body); color: var(--c-text-sub); line-height: var(--lh-body);">${config.subtitulo}</p>
      </div>
      <div class="reveal">
        <a href="${cta}" class="btn-wpp" target="_blank" rel="noopener">
          <img src="${iconeWhatsapp}" alt="WhatsApp" class="wpp-float-icon">
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  `
}
