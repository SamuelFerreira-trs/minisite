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
        <img src="${config.footer.logo_white}" class="footer-logo" alt="${config.nome}">
        <p class="footer-copy">© ${currentYear()} ${config.nome} · ${config.cidade} · Todos os direitos reservados</p>
        <p class="footer-copy">MiniSite desenvolvido por <a href="https://samuelferreira.co" target="_blank">Samuel Ferreira</a></p>
      </div>
    </footer>
  `
}
