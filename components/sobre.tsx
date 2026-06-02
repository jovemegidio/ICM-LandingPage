import { Heart, BookOpen, Users } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const pilares = [
  {
    icon: Heart,
    title: "Acolhimento",
    desc: "Cada pessoa é recebida com amor. Você não precisa se encaixar para pertencer — aqui há lugar para você.",
  },
  {
    icon: BookOpen,
    title: "Palavra objetiva",
    desc: "Ensino bíblico claro e prático, que transforma vidas e fortalece a fé no dia a dia.",
  },
  {
    icon: Users,
    title: "Comunidade",
    desc: "Mais que cultos, somos uma família que caminha junto, ora junto e cresce em Cristo junto.",
  },
]

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={assetPath("/images/adoracao-congregacao.png")}
                alt="Congregação da Igreja Cristã Mundial em momento de oração e adoração"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[14rem] rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl sm:-right-6">
              <p className="font-serif text-lg leading-snug">
                “Onde estiverem dois ou três reunidos em meu nome, ali eu estou.”
              </p>
              <span className="mt-3 block text-xs uppercase tracking-widest text-primary-foreground/70">
                Mateus 18:20
              </span>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Quem somos
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Uma igreja viva, fundamentada no amor de Cristo
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              A Igreja Cristã Mundial nasceu do desejo de ver vidas
              transformadas pelo evangelho. Somos uma comunidade de fé que
              acredita no poder da oração, na importância da Palavra e no calor
              de uma família espiritual que acolhe a todos.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-1">
              {pilares.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                    <p.icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
