"use client"

import { Play, Radio, Calendar, Share2, Bell } from "lucide-react"
import { assetPath } from "@/lib/asset-path"

const PROGRAMACAO = [
  { dia: "Domingo", titulo: "Culto da Família", hora: "10h e 18h", aoVivo: true },
  { dia: "Quarta", titulo: "Culto da Fé", hora: "20h", aoVivo: false },
  { dia: "Sexta", titulo: "Culto de Libertação", hora: "20h", aoVivo: false },
  { dia: "Sábado", titulo: "Culto dos Jovens", hora: "19h30", aoVivo: false },
]

export function AoVivo() {
  return (
    <section id="ao-vivo" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            <Radio className="size-4" />
            Canal ao vivo
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl font-black text-foreground sm:text-5xl">
            Assista de onde estiver
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Acompanhe nossos cultos e eventos ao vivo. Adore com a gente em
            qualquer lugar, em qualquer dispositivo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Player */}
          <div className="lg:col-span-2">
            <div className="group relative aspect-video overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img
                src={assetPath("/images/ao-vivo-cover.png")}
                alt="Transmissão ao vivo do culto da Igreja Cristã Mundial"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-destructive px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-destructive-foreground">
                <span className="size-2 animate-pulse rounded-full bg-destructive-foreground" />
                Ao vivo
              </span>

              <button
                type="button"
                aria-label="Reproduzir transmissão ao vivo"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-transform group-hover:scale-110">
                  <Play className="ml-1 size-9 fill-current" />
                </span>
              </button>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Culto da Família
                </h3>
                <p className="mt-1 text-sm text-foreground/70">
                  Transmitindo agora • Igreja Cristã Mundial
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                <Play className="size-4 fill-current" />
                Assistir agora
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
              >
                <Bell className="size-4 text-accent" />
                Receber lembrete
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
              >
                <Share2 className="size-4 text-accent" />
                Compartilhar
              </button>
            </div>
          </div>

          {/* Programação */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-2">
              <Calendar className="size-5 text-accent" />
              <h3 className="font-serif text-lg font-bold text-foreground">
                Programação da semana
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {PROGRAMACAO.map((item) => (
                <li
                  key={item.dia}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-secondary px-4 py-3.5"
                >
                  <div>
                    <p className="flex items-center gap-2 font-semibold text-foreground">
                      {item.titulo}
                      {item.aoVivo && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-destructive">
                          <span className="size-1.5 animate-pulse rounded-full bg-destructive" />
                          Ao vivo
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.dia}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-accent">
                    {item.hora}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
              Horários no fuso de Brasília. Reprises disponíveis no nosso canal a
              qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
