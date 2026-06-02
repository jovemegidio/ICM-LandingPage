import { Clock } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const cultos = [
  {
    dia: "Domingo",
    nome: "Culto da Família",
    horario: "18h00",
    desc: "Um encontro especial para toda a família celebrar e adorar a Deus.",
    destaque: true,
  },
  {
    dia: "Quarta-feira",
    nome: "Culto de Ensino",
    horario: "19h30",
    desc: "Aprofundamento na Palavra com ensino bíblico prático.",
    destaque: false,
  },
  {
    dia: "Sexta-feira",
    nome: "Culto de Libertação",
    horario: "19h45",
    desc: "Noite de oração, fé e busca pela presença de Deus.",
    destaque: false,
  },
]

export function Cultos() {
  return (
    <section
      id="cultos"
      className="relative overflow-hidden bg-secondary py-20 text-foreground lg:py-28"
    >
      <img
        src={assetPath("/images/adoracao-congregacao.png")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-10"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Programação
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Nossos horários de culto
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-foreground/80">
            Reserve um tempo para estar na presença de Deus. Todos são
            bem-vindos em qualquer um dos nossos encontros.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cultos.map((c) => (
            <div
              key={c.nome}
              className={`flex flex-col rounded-3xl border p-7 transition-colors ${
                c.destaque
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-foreground/15 bg-foreground/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <Clock
                  className={`size-4 ${c.destaque ? "text-accent-foreground" : "text-accent"}`}
                />
                <span className="text-sm font-medium uppercase tracking-wider">
                  {c.dia}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold">{c.nome}</h3>
              <p
                className={`mt-1 text-4xl font-semibold ${
                  c.destaque ? "" : "text-accent"
                }`}
              >
                {c.horario}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  c.destaque
                    ? "text-accent-foreground/80"
                    : "text-foreground/70"
                }`}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
