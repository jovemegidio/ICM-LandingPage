import { ArrowRight, ArrowUpRight } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const DESTAQUE = {
  categoria: "Conferência",
  titulo: "Conferência de Família reúne milhares em quatro dias de palavra",
  resumo:
    "De 04 a 07 de junho, a Igreja Cristã Mundial recebe preletores de todo o país para uma temporada de ministração, restauração e comunhão sob o tema 'Família de Verdade'.",
  imagem: "/images/conferencia-familia.png",
  data: "02 de Junho de 2025",
}

const NOTICIAS = [
  {
    categoria: "Liderança",
    titulo: "Café para Pastores & Líderes abre inscrições gratuitas",
    imagem: "/images/evento-cafe-pastores.png",
    data: "28 de Maio de 2025",
  },
  {
    categoria: "Casais",
    titulo: "Jantar de Casais celebra o relacionamento no Apollo Grill",
    imagem: "/images/evento-jantar-casais.png",
    data: "25 de Maio de 2025",
  },
  {
    categoria: "Comunidade",
    titulo: "Corrida ICM movimenta a igreja em saúde e propósito",
    imagem: "/images/evento-corrida.png",
    data: "20 de Maio de 2025",
  },
  {
    categoria: "Voluntariado",
    titulo: "Equipe de voluntários é celebrada em culto especial",
    imagem: "/images/equipe-voluntarios.png",
    data: "18 de Maio de 2025",
  },
  {
    categoria: "Batismos",
    titulo: "Dezenas de vidas são batizadas nas águas neste mês",
    imagem: "/images/noticia-batismo.png",
    data: "12 de Maio de 2025",
  },
  {
    categoria: "Comunhão",
    titulo: "Churrasco + Copa ICM promete unir famílias e amigos",
    imagem: "/images/evento-churrasco-copa.png",
    data: "08 de Maio de 2025",
  },
]

export function Noticias() {
  return (
    <section id="noticias" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-6">
          <h2 className="font-serif text-3xl font-black text-foreground sm:text-4xl">
            Notícias
          </h2>
          <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
          <a
            href="#noticias"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            Ver todas as notícias
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Fique por dentro de tudo o que Deus tem feito na nossa comunidade.
          Acompanhe os destaques e novidades da Igreja Cristã Mundial.
        </p>

        {/* Destaque */}
        <a
          href="#noticias"
          className="group mt-10 grid overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-accent/50 lg:grid-cols-2"
        >
          <div className="relative aspect-video overflow-hidden lg:aspect-auto">
            <img
              src={assetPath(DESTAQUE.imagem || "/placeholder.svg")}
              alt={`Imagem da notícia: ${DESTAQUE.titulo}`}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              {DESTAQUE.categoria}
            </span>
            <h3 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              {DESTAQUE.titulo}
            </h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {DESTAQUE.resumo}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{DESTAQUE.data}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Ler matéria
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </a>

        {/* Grade */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NOTICIAS.map((noticia) => (
            <a
              key={noticia.titulo}
              href="#noticias"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={assetPath(noticia.imagem || "/placeholder.svg")}
                  alt={`Imagem da notícia: ${noticia.titulo}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-sm">
                  {noticia.categoria}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-balance font-serif text-lg font-bold leading-snug text-foreground">
                  {noticia.titulo}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">{noticia.data}</span>
                  <ArrowUpRight className="size-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
