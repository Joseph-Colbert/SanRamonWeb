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
          <p className="text-foreground leading-relaxed mb-6 text-justify justify-center">
            En el corazón de la tierra chaqueña, envuelta en los aromas del mistol, los lapachos y los quebrachos, donde el calor del monte funde culturas y forja tradiciones ganaderas junto al valor de su gente, se levanta Carandaytí: un pueblo benemérito, guardián de la educación de nuevas generaciones y de la historia de una nación construida por sus habitantes.
            De esta tierra fértil y vigorosa, sus pobladores han sabido extraer el aroma y la fuerza del Chaco para transformarlos en sabores únicos.
            Así nace el queso chaqueño, una expresión auténtica que llega a su paladar con la intensidad y el carácter de la tierra de Carandaytí.
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
            src="/images/SR1.jpeg"
            alt="San Ramon 1"
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
