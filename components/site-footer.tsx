import { Instagram, Facebook, Youtube, MapPin } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cultos", label: "Cultos" },
  { href: "#unidades", label: "Unidades" },
  { href: "#ministerios", label: "Ministérios" },
  { href: "#contato", label: "Contato" },
]

const unidades = [
  "R. Alfredo Batista Pizolato, 279 — Pizzolato",
  "R. José de Oliveira Gomes, 770 — Poá",
  "Av. Italo Adami, 1250 — Itaquaquecetuba",
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={assetPath("/images/logo-icm-branca.png")}
              alt="Igreja Cristã Mundial"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Um lugar abençoado, cheio da presença de Deus. Venha fazer parte
              da nossa família.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Unidades
            </h3>
            <ul className="mt-4 space-y-3">
              {unidades.map((u) => (
                <li
                  key={u}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Igreja Cristã Mundial. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com fé e dedicação.
          </p>
        </div>
      </div>
    </footer>
  )
}
