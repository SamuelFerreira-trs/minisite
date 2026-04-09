// types.ts — Todos os tipos do sistema MiniSite Studio

export type Estilo = 'sharp' | 'soft' | 'round' | 'pill'

export interface Cores {
  fundoPrincipal:  string
  fundoSecundario: string
  fundoTerciario:  string
  textoPrimario:   string
  textoSecundario: string
  botaoPrimario:   string
  botaoSecundario: string
}

export interface Fontes {
  titulos: string  // fonte dos títulos/headings — nome Google Fonts
  corpo:   string  // fonte do corpo/parágrafos — nome Google Fonts
}

export type SecaoId =
  | 'hero'
  | 'sobre'
  | 'servicos'
  | 'galeria'
  | 'depoimentos'
  | 'localizacao'
  | 'contato'

export interface SiteConfig {
  nome:        string
  slogan:      string
  logo:        string | null
  whatsapp:    string
  iconeWhatsapp: string
  cidade:      string
  instagram:   string
  cores:       Cores
  fontes:      Fontes
  estilo:      Estilo
  secoes:      readonly SecaoId[]
  hero:        HeroConfig
  sobre:       SobreConfig
  servicos:    ServicoItem[]
  galeria:     GaleriaConfig
  depoimentos: DepoimentosConfig
  localizacao: LocalizacaoConfig
  contato:     ContatoConfig
}

export interface HeroConfig {
  eyebrow:   string
  titulo:    string
  subtitulo: string
  cta:       string
  stats:     StatItem[]
}

export interface StatItem {
  num:   string
  label: string
}

export interface SobreConfig {
  titulo:       string
  texto:        string
  tag:          string
  iconeDiferencial: string
  diferenciais: DiferencialItem[]
}

export interface DiferencialItem {
  titulo: string
  desc:   string
}

export interface ServicoItem {
  images: string[] // Array de imagens
  nome:  string
  desc:  string
  preco: string
}

export interface DepoimentoItem {
  texto: string
  autor: string
  cargo: string
}

export interface GaleriaConfig {
  imagens: string[]
  iconeAnterior: string
  iconeProximo: string
}

export interface DepoimentosConfig {
  itens: DepoimentoItem[]
  iconeEstrela: string
}

export interface LocalizacaoConfig {
  iconeEndereco: string
  endereco:   string
  cidade:     string
  iconeTelefone: string
  telefone:   string
  iconeEmail: string
  email:      string
  maps_query: string
  horarios:   HorarioItem[]
}

export interface HorarioItem {
  dia:  string
  hora: string
}

export interface ContatoConfig {
  titulo:    string
  subtitulo: string
  iconeWhatsapp: string
}
