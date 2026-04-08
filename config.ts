// config.ts — ÚNICO arquivo editado por cliente
// Troque apenas os valores abaixo para cada novo cliente

import type { SiteConfig } from './src/types'

export const CONFIG = {

  // ─── Identidade ────────────────────────────────────────────
  nome:      "Clínica Vitória Rocha",
  slogan:    "Estética & Beleza",
  logo:      "/logo.png", // Coloque o arquivo em /public/logo.png — null = exibe o nome em texto
  whatsapp:  "5585985121230",
  iconeWhatsapp: "/whatsapp.svg",
  cidade:    "Fortaleza, CE",
  instagram: "@clinicavitoriarocha",

  // ─── Cores ─────────────────────────────────────────────────
  cores: {
    fundoPrincipal:  "#faf8f5",   // Fundo principal da página
    fundoSecundario: "#f0efe9",   // Fundo secundário (para seções levemente escuras)
    fundoTerciario:  "#1c1c1c",   // Fundo terciário (para seções escuras)
    textoPrimario:   "#0c0c0c",   // Textos Primários
    textoSecundario: "#fefefeff",   // Textos Secundários
    botaoPrimario:   "#f6b718ff",   // Cor do botão primário
    botaoSecundario: "#f6b718ff",   // Cor do botão secundário
  },

  // ─── Fontes ─────────────────────────────────────────────────
  // Nome exato do Google Fonts. Exemplos:
  //   Títulos: "Playfair Display" | "IBM Plex Serif" | "DM Sans" | "Fraunces" | "Cormorant"
  //   Corpo:   "Inter" | "DM Sans" | "Lato" | "Nunito" | "Source Sans 3"
  fontes: {
    titulos: "Albert Sans",
    corpo:   "Inter",
  },

  // ─── Estilo de bordas (imagens e botões) ───────────────────
  // "sharp" → 0px   (geométrico, editorial)
  // "soft"  → 4px   (neutro, profissional)
  // "round" → 12px  (amigável, wellness)
  // "pill"  → pill  (moderno, apps)
  estilo: "pill" as const,

  // ─── Seções ativas (ordem = ordem no site) ─────────────────
  secoes: [
    "hero",
    "sobre",
    "servicos",
    "galeria",
    "depoimentos",
    "localizacao",
    "contato",
  ] as const,

  // ─── Conteúdo por seção ────────────────────────────────────

  hero: {
    eyebrow:   "ECOSSISTEMA DE SAÚDE E PERFORMANCE",
    titulo:    "O padrão all-inclusive que eleva o significado de treinar",
    subtitulo: "O Complexo Queiroga é a primeira academia boutique de São Luís, pensada para quem busca excelência, método e evolução real com ciência e propósito.",
    cta:       "Quero ser Membership",
    stats: [
      { num: "8+",   label: "Anos de experiência" },
      { num: "1.2k", label: "Clientes atendidas"  },
      { num: "4.9", label: "Avaliações no Google"               },
      { num: "100%", label: "Satisfação"             },
    ],
  },

  sobre: {
    titulo:    "Especialistas em realçar\nsua beleza natural",
    texto:     "Fundada em 2016, a Clínica Vitória Rocha nasceu da paixão por transformar vidas através da estética. Nossa equipe é formada por profissionais certificadas e em constante atualização, garantindo os tratamentos mais modernos do mercado.",
    tag:       "Desde 2016",
    iconeDiferencial: "star",
    diferenciais: [
      { titulo: "Profissionais certificadas", desc: "Equipe com formação e cursos internacionais" },
      { titulo: "Produtos premium",           desc: "Marcas selecionadas com resultados comprovados" },
      { titulo: "Ambiente aconchegante",      desc: "Espaço projetado para seu conforto e relaxamento" },
      { titulo: "Resultados reais",           desc: "Protocolos personalizados para cada cliente" },
    ],
  },

  servicos: [
    { nome: "Limpeza de pele profunda",  desc: "Tratamento completo para pele radiante e purificada, com análise cutânea personalizada.",            preco: "A partir de R$ 180" },
    { nome: "Radiofrequência facial",    desc: "Firmeza e rejuvenescimento com tecnologia de ponta. Resultados visíveis desde a 1ª sessão.",          preco: "A partir de R$ 250" },
    { nome: "Design de sobrancelhas",    desc: "Mapeamento facial e técnicas exclusivas para o design perfeito para o seu rosto.",                    preco: "A partir de R$ 90"  },
    { nome: "Massagem relaxante",        desc: "1 hora de relaxamento profundo com óleos essenciais e técnicas terapêuticas.",                        preco: "A partir de R$ 150" },
    { nome: "Peeling químico",           desc: "Renovação celular controlada para manchas, acne e textura irregular.",                                preco: "A partir de R$ 200" },
    { nome: "Drenagem linfática",        desc: "Técnica manual certificada para redução de inchaço e bem-estar geral.",                               preco: "A partir de R$ 130" },
  ],

  galeria: {
    imagens: [
      "/img1.png",
      "/img2.png",
      "/img3.png",
      "/img4.png",
    ],
    iconeAnterior: "chevron-left",
    iconeProximo: "chevron-right",
  },

  depoimentos: {
    itens: [
      { texto: "Melhor clínica que já fui! A Vitória é super atenciosa e os resultados da radiofrequência foram incríveis. Me sinto 10 anos mais jovem.", autor: "Mariana S.", cargo: "Cliente há 3 anos" },
      { texto: "Fui para uma limpeza de pele e saí apaixonada. Ambiente maravilhoso, profissionais excelentes. Com certeza voltarei!",                   autor: "Fernanda L.", cargo: "Cliente há 1 ano"  },
      { texto: "O design de sobrancelhas mudou minha vida. Nunca pensei que esse detalhe fizesse tanta diferença no rosto. Recomendo demais!",           autor: "Camila R.",   cargo: "Cliente há 2 anos" },
    ],
    iconeEstrela: "star"
  },

  localizacao: {
    iconeEndereco: "map-pin",
    endereco:   "Rua das Flores, 142 — Meireles",
    cidade:     "Fortaleza, CE — 60165-080",
    iconeTelefone: "phone",
    telefone:   "(85) 9 8512-1230",
    iconeEmail: "mail",
    email:      "contato@clinicavitoriarocha.com.br",
    maps_query: "Clínica+Vitória+Rocha+Fortaleza",
    horarios: [
      { dia: "Segunda a Sexta", hora: "08h às 19h" },
      { dia: "Sábado",          hora: "08h às 14h" },
      { dia: "Domingo",         hora: "Fechado"    },
    ],
  },

  contato: {
    titulo:    "Pronto para viver essa experiência exclusiva?",
    subtitulo: "Agende sua visita, conheça a estrutura, experimente o método e dê o primeiro passo da sua evolução no Complexo Queiroga.",
    iconeWhatsapp: "message-circle"
  },

} satisfies SiteConfig
