import { ArrowRight, CalendarDays } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const PLANOS = [
  {
    titulo: "O poder da oração",
    imagem: "/images/devocional-oracao.png",
    dias: 11,
    descricao:
      "Aprofunde sua vida de oração e experimente uma comunhão mais íntima com Deus a cada dia.",
  },
  {
    titulo: "Conhecendo Jesus",
    imagem: "/images/devocional-biblia.png",
    dias: 17,
    descricao:
      "Uma jornada pelas Escrituras para conhecer quem é Jesus e o seu amor por você.",
  },
]

export function Devocional() {
  return (
    <section id="devocional" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-6">
          <h2 className="font-serif text-3xl font-black text-foreground sm:text-4xl">
            Devocional
          </h2>
          <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
          <a
            href="#devocional"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            Ver todos os devocionais
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Planos de leitura para fortalecer sua fé diariamente. Escolha um plano e
          comece a sua jornada com Deus.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANOS.map((plano) => (
            <article
              key={plano.titulo}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={assetPath(plano.imagem || "/placeholder.svg")}
                  alt={`Capa do plano devocional ${plano.titulo}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {plano.titulo}
                </h3>
                <span className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground">
                  <CalendarDays className="size-4 text-accent" />
                  Duração: {plano.dias} dias
                </span>
                <p className="text-pretty text-sm leading-relaxed text-foreground/70">
                  {plano.descricao}
                </p>
                <a
                  href="#devocional"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
                >
                  Ver plano
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
