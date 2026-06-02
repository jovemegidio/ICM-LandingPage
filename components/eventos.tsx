import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const PRELETORES = [
  "Julio Vertullo",
  "Erika Vertullo",
  "Leandro Faria",
  "Fran",
  "Jucelio de Souza",
  "Bp. Alex Pontes",
  "Bpa. Jeiza Pontes",
  "Eliezer de Tarsis",
  "Juliana Purgatto",
]

const EVENTOS = [
  {
    titulo: "Café para Pastores & Líderes",
    imagem: "/images/evento-cafe-pastores.png",
    data: "10 de Junho",
    hora: "09h",
    local: "Com Julio Vertullo • Gratuito",
  },
  {
    titulo: "Jantar de Casais",
    imagem: "/images/evento-jantar-casais.png",
    data: "15 de Junho",
    hora: "18h30",
    local: "Apollo Grill — Unidade Shibata",
  },
  {
    titulo: "Churrasco + Copa ICM",
    imagem: "/images/evento-churrasco-copa.png",
    data: "Em breve",
    hora: null,
    local: "Comunhão, futebol e churrasco",
  },
  {
    titulo: "Corrida ICM",
    imagem: "/images/evento-corrida.png",
    data: "Em breve",
    hora: null,
    local: "Saúde e propósito em movimento",
  },
  {
    titulo: "CI — Curso de Integração",
    imagem: "/images/evento-curso-integracao.png",
    data: "Turmas mensais",
    hora: null,
    local: "Somente para voluntários",
  },
]

export function Eventos() {
  return (
    <section id="eventos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Agenda
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl font-black text-foreground sm:text-5xl">
            Próximos eventos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Participe da vida da nossa comunidade. Confira o que está por vir e
            garanta a sua presença.
          </p>
        </div>

        {/* Evento em destaque */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img
                src={assetPath("/images/conferencia-familia.png")}
                alt="Banner da Conferência de Família - Família de Verdade, de 04 a 07 de Junho"
                className="size-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Destaque
              </span>
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                  <Calendar className="size-4" />
                  04 a 07 de Junho
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground/80">
                  <MapPin className="size-4 text-accent" />
                  Sede — Pizzolato
                </span>
              </div>

              <h3 className="font-serif text-3xl font-black italic text-foreground">
                Conferência de Família
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Quatro dias de palavra, ministração e comunhão para fortalecer a
                sua família de verdade. Não fique de fora.
              </p>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Preletores
                </p>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {PRELETORES.map((nome) => (
                    <li
                      key={nome}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {nome}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contato"
                className="group mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Garantir minha vaga
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Demais eventos */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTOS.map((evento) => (
            <article
              key={evento.titulo}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={assetPath(evento.imagem || "/placeholder.svg")}
                  alt={`Banner do evento ${evento.titulo}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {evento.titulo}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-4 text-accent" />
                    {evento.data}
                  </span>
                  {evento.hora && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4 text-accent" />
                      {evento.hora}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground/70">{evento.local}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
