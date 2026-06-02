"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function Contato() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-background to-secondary py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Fale conosco
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Quer dar o seu primeiro passo conosco?
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-foreground/80">
              Deixe sua mensagem ou pedido de oração. Nossa equipe terá imensa
              alegria em receber você e caminhar ao seu lado.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+5511985072876"
                className="block text-lg font-medium transition-colors hover:text-accent"
              >
                (11) 98507-2876
              </a>
              <p className="text-foreground/70">
                Atendimento de segunda a sexta, das 9h às 18h.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-foreground/5 p-7 ring-1 ring-foreground/10 sm:p-9">
            {enviado ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-accent" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Mensagem enviada!
                </h3>
                <p className="mt-2 text-foreground/80">
                  Obrigado por entrar em contato. Que Deus abençoe você!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Campo label="Nome" name="nome" placeholder="Seu nome" />
                  <Campo
                    label="Telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <Campo
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                />
                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium"
                  >
                    Mensagem ou pedido de oração
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    placeholder="Escreva aqui..."
                    className="w-full rounded-xl border border-foreground/20 bg-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="size-4" />
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Campo({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-foreground/20 bg-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  )
}
