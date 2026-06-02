import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Sobre } from "@/components/sobre"
import { Cultos } from "@/components/cultos"
import { Eventos } from "@/components/eventos"
import { AoVivo } from "@/components/ao-vivo"
import { Devocional } from "@/components/devocional"
import { Noticias } from "@/components/noticias"
import { AppDownload } from "@/components/app-download"
import { Unidades } from "@/components/unidades"
import { Ministerios } from "@/components/ministerios"
import { Depoimentos } from "@/components/depoimentos"
import { Contato } from "@/components/contato"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Sobre />
      <Cultos />
      <AoVivo />
      <Eventos />
      <Devocional />
      <Noticias />
      <AppDownload />
      <Unidades />
      <Ministerios />
      <Depoimentos />
      <Contato />
      <SiteFooter />
    </main>
  )
}
