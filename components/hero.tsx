import { MapPin, ArrowRight } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={assetPath("/images/fachada-igreja.png")}
        alt="Fachada da Igreja Cristã Mundial com grande cruz espelhada"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/65 to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,oklch(0.16_0.022_264/0.7)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-accent" />
          Bem-vindo à nossa família
        </span>

        <h1 className="max-w-4xl text-balance font-serif text-5xl font-black leading-[1.02] text-foreground sm:text-7xl lg:text-[5.5rem]">
          Um lugar abençoado, cheio da{" "}
          <span className="text-accent italic">presença de Deus</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          Somos a Igreja Cristã Mundial. Aqui você encontra acolhimento,
          palavra objetiva e uma comunidade pronta para caminhar com você na fé.
          Venha como você é.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#cultos"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Horários de culto
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#unidades"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 bg-foreground/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/15"
          >
            <MapPin className="size-4" />
            Encontre uma unidade
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-foreground/15 pt-8">
          {[
            { n: "3", l: "Unidades" },
            { n: "+20", l: "Anos de história" },
            { n: "100%", l: "Acolhimento" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-serif text-3xl font-bold text-accent sm:text-4xl">
                {s.n}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-foreground/60">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
