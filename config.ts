// config.ts — ÚNICO arquivo editado por cliente
// Troque apenas os valores abaixo para cada novo cliente

import type { SiteConfig } from './src/types'

export const CONFIG = {

  // ─── Identidade ────────────────────────────────────────────
  nome:      "Complexo Queiroga",
  slogan:    "Saúde & Performance",
  logo:      "./logo.png", // Coloque o arquivo em /public/logo.png — null = exibe o nome em texto
  whatsapp:  "5598981115033",
  iconeWhatsapp: "./whatsapp.svg",
  cidade:    "São Luís, MA",
  instagram: "@complexoqueiroga",

  // ─── Cores ─────────────────────────────────────────────────
  cores: {
    fundoPrincipal:  "#faf8f5",   // Fundo principal da página
    fundoSecundario: "#f0efe9",   // Fundo secundário (para seções levemente escuras)
    fundoTerciario:  "#1c1c1c",   // Fundo terciário (para seções escuras)
    textoPrimario:   "#0c0c0c",   // Textos Primários
    textoSecundario: "#fefefeff",   // Textos Secundários
    botaoPrimario:   "#88c780ff",   // Cor do botão primário
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
    titulo:    "Somos uma academia de alto padrão localizada em São Luís, Maranhão",
    texto:     "O Complexo Queiroga é a primeira academia all-inclusive de São Luís, pensada para quem busca excelência, método e evolução real com ciência e propósito.",
    tag:       "Desde 2016",
    iconeDiferencial: "badge-check",
    diferenciais: [
      { titulo: "Profissionais qualificados", 
        desc: "Equipe com formação e cursos internacionais" },

      { titulo: "Equipamentos premium",           
        desc: "Equipamentos de última geração" },

      { titulo: "Ambiente para evoluir seu networking",      
        desc: "Espaço projetado para seu atingir seus objetivos" },

      { titulo: "Resultados reais",          
        desc: "Protocolos personalizados para cada cliente" },
    ],
  },

  servicos: [
    { images: ["./img1.png"],
      nome: "Protocolo 180º",  
      desc: "Para pessoas que buscam resultados reais e duradouros",            
      preco: "R$ 1080/mês" },

    { images: ["./img2.png"],
      nome: "Protocolo 180º PRO",    
      desc: "Para pessoas que buscam resultados reais e duradouros",          
      preco: "R$ 1280/mês" },

    { images: ["./img3.png"],
      nome: "Protocolo 360º",    
      desc: "Para pessoas que buscam resultados reais e duradouros",                    
      preco: "R$ 1480/mês"  },

    { images: ["./img4.png"],
      nome: "Protocolo 360º PRO",        
      desc: "Para pessoas que buscam resultados reais e duradouros",                        
      preco: "R$ 1680/mês" },
  ],

  galeria: {
    imagens: [
      "./img1.png",
      "./img2.png",
      "./img3.png",
      "./img4.png",
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
    endereco:   "Av. dos Holandeses, 1000 — Quadra 01, Lote 01 — Calhau",
    cidade:     "São Luís, MA",
    iconeTelefone: "phone",
    telefone:   "(98) 9 8512-1230",
    iconeEmail: "mail",
    email:      "complexoqueiroga@gmail.com",
    maps_query: "Complexo+Queiroga",
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

  footer: {
    logo_white: "./logo_white.png",
  }
} satisfies SiteConfig
