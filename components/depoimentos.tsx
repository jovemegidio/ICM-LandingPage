import { Star, Quote } from "lucide-react"

const depoimentos = [
  {
    texto:
      "Lugar abençoado, cheio da presença de Deus, palavra objetiva. Saio de cada culto renovado.",
    autor: "Visitante",
    local: "ICM Sede",
  },
  {
    texto:
      "Recepção maravilhosa, culto muito abençoado. Fui acolhido como família desde o primeiro dia.",
    autor: "Membro",
    local: "ICM Poá",
  },
  {
    texto:
      "Dá pra sentir verdadeiramente a presença de Deus nesse lugar. Recomendo a todos.",
    autor: "Visitante",
    local: "ICM Itaquaquecetuba",
  },
]

export function Depoimentos() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Testemunhos
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Vidas tocadas pela presença de Deus
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="size-8 text-accent" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {d.texto}
              </blockquote>
              <div className="mt-6 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <span className="block font-semibold text-foreground">
                  {d.autor}
                </span>
                <span className="text-sm text-muted-foreground">{d.local}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
