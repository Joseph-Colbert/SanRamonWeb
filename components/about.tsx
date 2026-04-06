import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="bg-[#f5a623]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column - Title */}
        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d5a27] leading-tight">
            Sobre<br />Nosotros
          </h2>
        </div>

        {/* Middle Column - Text and Button */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
          <p className="text-foreground leading-relaxed mb-6">
            En SP, nos apasiona ofrecer experiencias únicas a través de nuestras tablas de quesos. Seleccionamos quesos de alta calidad de pequeños productores locales, asegurando que cada tabla representa lo mejor de la tradición quesera. Ven y disfruta de una celebración de sabores y texturas.
          </p>
          <div>
            <Link href="/historia">
              <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-6">
                Descubre Más
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-4 relative h-[300px] lg:h-auto">
          <Image
            src="/images/about-kiwi.jpg"
            alt="Kiwi en rodajas con almendras y miel"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/about-figs.jpg"
            alt="Higos frescos cortados con arándanos secos"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/about-grapes.jpg"
            alt="Uvas rojas y verdes con frutillas frescas"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
