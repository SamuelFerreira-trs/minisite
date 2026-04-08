// sections/footer.ts — Links de âncora ficam aqui (saíram do nav)
import type { SiteConfig } from '../types'
import { currentYear } from '../utils'

export function renderFooter(config: SiteConfig): string {
  const labels: Record<string, string> = {
    hero:        'Início',
    sobre:       'Sobre',
    servicos:    'Serviços',
    galeria:     'Galeria',
    depoimentos: 'Avaliações',
    localizacao: 'Localização',
    contato:     'Contato',
  }

  const links = config.secoes
    .map(id => `<a href="#${id}">${labels[id] ?? id}</a>`)
    .join('')

  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <p class="footer-logo">${config.nome}</p>
        <nav class="footer-links" aria-label="Links do rodapé">
          ${links}
        </nav>
        <p class="footer-copy">© ${currentYear()} ${config.nome} · ${config.cidade} · Todos os direitos reservados</p>
      </div>
    </footer>
  `
}
