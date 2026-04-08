// sections/wpp.ts — Botão flutuante de WhatsApp
import { wppLink } from '../utils'

export function renderWppFloat(whatsapp: string, iconeWhatsapp: string): string {
  const link = wppLink(whatsapp, 'Olá! Gostaria de mais informações.')
  return `
    <div class="wpp-float">
      <a href="${link}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <img src="${iconeWhatsapp}" alt="WhatsApp" class="wpp-float-icon">
      </a>
    </div>
  `
}
