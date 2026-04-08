// sections/localizacao.ts
import type { LocalizacaoConfig } from '../types'

export function renderLocalizacao(config: LocalizacaoConfig, iconLoc: string, iconPhone: string, iconMail: string): string {
  const horarios = config.horarios.map(h => `
    <div class="horario-row">
      <span>${h.dia}</span>
      <span>${h.hora}</span>
    </div>
  `).join('')

  const mapsUrl = `https://maps.google.com/?q=${config.maps_query}`

  return `
    <section id="localizacao" class="section">
      <div class="section-header reveal">
        <p class="eyebrow">Onde estamos</p>
        <h2 class="section-title">Venha nos visitar</h2>
      </div>
      <div class="localizacao-info reveal">
        <div class="localizacao-item">
          <div class="localizacao-item__icon"><i data-lucide="${iconLoc}"></i></div>
          <div>
            <p class="localizacao-item__label">Endereço</p>
            <p class="localizacao-item__value">
              <a href="${mapsUrl}" target="_blank" rel="noopener">
                ${config.endereco}<br>${config.cidade}
              </a>
            </p>
          </div>
        </div>
        <div class="localizacao-item">
          <div class="localizacao-item__icon"><i data-lucide="${iconPhone}"></i></div>
          <div>
            <p class="localizacao-item__label">Telefone e Whatsapp</p>
            <p class="localizacao-item__value">
              <a href="tel:${config.telefone.replace(/\D/g, '')}">${config.telefone}</a>
            </p>
          </div>
        </div>
        <div class="localizacao-item">
          <div class="localizacao-item__icon"><i data-lucide="${iconMail}"></i></div>
          <div>
            <p class="localizacao-item__label">E-mail</p>
            <p class="localizacao-item__value">
              <a href="mailto:${config.email}">${config.email}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="localizacao-divider" style="margin: 32px 0;"></div>
      <div class="reveal">
        <p class="horarios-titulo">Horário de funcionamento</p>
        <div class="horarios-list">
          ${horarios}
        </div>
      </div>
    </section>
  `
}
