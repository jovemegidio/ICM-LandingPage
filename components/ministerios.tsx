import { Baby, Music, HandHeart, Sparkles, Users2, BookMarked } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const ministerios = [
  {
    icon: Baby,
    title: "Ministério Infantil",
    desc: "Ensino bíblico lúdico e seguro para as crianças durante os cultos.",
  },
  {
    icon: Music,
    title: "Louvor e Adoração",
    desc: "Conduzindo a igreja à presença de Deus por meio da música.",
  },
  {
    icon: Users2,
    title: "Jovens e Adolescentes",
    desc: "Encontros que fortalecem a fé e criam amizades verdadeiras.",
  },
  {
    icon: HandHeart,
    title: "Ação Social",
    desc: "Levando amor e apoio às famílias e à comunidade ao redor.",
  },
  {
    icon: BookMarked,
    title: "Discipulado",
    desc: "Acompanhamento para crescer e amadurecer na caminhada cristã.",
  },
  {
    icon: Sparkles,
    title: "Intercessão",
    desc: "Grupos dedicados à oração e ao cuidado espiritual da igreja.",
  },
]

export function Ministerios() {
  return (
    <section id="ministerios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Faça parte
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Nossos ministérios
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Há um lugar para você servir, crescer e usar os seus dons. Conheça
            algumas das frentes em que atuamos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ministerios.map((m) => (
            <div
              key={m.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 transition-colors group-hover:bg-accent">
                <m.icon className="size-5 text-primary transition-colors group-hover:text-accent-foreground" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="grid items-center md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src={assetPath("/images/equipe-voluntarios.png")}
                alt="Equipe de voluntários da Igreja Cristã Mundial reunida e sorrindo"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-8 sm:p-10 lg:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Seja voluntário
              </span>
              <h3 className="text-balance font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                Faça parte do nosso time de servos
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Servir é uma das formas mais lindas de viver o evangelho. Junte-se
                a uma equipe apaixonada por Deus e pelas pessoas, e descubra o seu
                lugar para abençoar a igreja.
              </p>
              <a
                href="#contato"
                className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Quero servir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
