import { MapPin, Phone, Navigation, Clock } from "lucide-react"

const unidades = [
  {
    nome: "ICM Sede",
    bairro: "Pizzolato",
    endereco: "R. Alfredo Batista Pizolato, 279",
    abertura: "Domingo às 15h00",
    telefone: null,
    maps: "https://www.google.com/maps/search/?api=1&query=R.+Alfredo+Batista+Pizolato,+279",
  },
  {
    nome: "ICM Poá",
    bairro: "Poá",
    endereco: "R. José de Oliveira Gomes, 770",
    abertura: "Quarta às 19h30",
    telefone: null,
    maps: "https://www.google.com/maps/search/?api=1&query=R.+José+de+Oliveira+Gomes,+770,+Poá",
  },
  {
    nome: "ICM Itaquaquecetuba",
    bairro: "Itaquaquecetuba",
    endereco: "Av. Italo Adami, 1250",
    abertura: "Quarta às 19h45",
    telefone: "(11) 98507-2876",
    maps: "https://www.google.com/maps/search/?api=1&query=Av.+Italo+Adami,+1250,+Itaquaquecetuba",
  },
]

export function Unidades() {
  return (
    <section id="unidades" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Onde estamos
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Encontre a unidade mais perto de você
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Estamos presentes em diferentes cidades para receber você e sua
            família. Escolha uma unidade e venha nos visitar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {unidades.map((u) => (
            <article
              key={u.nome}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <MapPin className="size-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                {u.nome}
              </h3>
              <span className="text-sm font-medium text-accent/80">
                {u.bairro}
              </span>

              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  {u.endereco}
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="size-4 shrink-0 text-primary" />
                  Abre {u.abertura}
                </p>
                {u.telefone && (
                  <p className="flex items-center gap-2.5">
                    <Phone className="size-4 shrink-0 text-primary" />
                    {u.telefone}
                  </p>
                )}
              </div>

              <a
                href={u.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="size-4" />
                Como chegar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
