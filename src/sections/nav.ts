// sections/nav.ts — Mobile-only: logo à esquerda, CTA WhatsApp à direita. Sem links de âncora.
import type { SiteConfig } from '../types'
import { wppLink } from '../utils'

export function renderNav(config: SiteConfig): string {
  const cta = wppLink(config.whatsapp, `Olá! Gostaria de ser Membership.`)

  const logoContent = config.logo
    ? `<img src="${config.logo}" alt="${config.nome}" class="nav-logo-img">`
    : config.nome

  return `
    <nav class="site-nav" role="navigation" aria-label="Menu principal">
      <a href="#hero" class="nav-logo" aria-label="${config.nome}">${logoContent}</a>
      <a href="${cta}" class="nav-cta" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">
        <img src="${config.iconeWhatsapp}" alt="WhatsApp" class="nav-cta-icon">
        Enviar mensagem 
      </a>
    </nav>
  `
}
