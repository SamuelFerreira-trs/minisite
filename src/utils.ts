// utils.ts — Helpers do MiniSite Studio

export function wppLink(numero: string, mensagem = ''): string {
  const base = `https://wa.me/${numero}`
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base
}

export function nl2br(texto: string): string {
  return texto.replace(/\n/g, '<br>')
}

export function iniciais(nome: string): string {
  return nome.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

export function currentYear(): number {
  return new Date().getFullYear()
}
