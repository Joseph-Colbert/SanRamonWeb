import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-white">
      {/* Title */}
      <div className="px-6 md:px-12 py-6">
        <h1 className="font-serif text-[#2d5a27] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          DELICIAS DE QUESO
        </h1>
      </div>

      {/* Hero Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image with Overlay Text */}
        <div className="relative h-[400px] md:h-[550px] bg-[#f5f0e8] flex items-center justify-center">
          <Image
            src="/images/hero-cheese.jpg"
            alt="Tabla de quesos artesanales con miel, almendras y arándanos secos"
            fill
            className="object-contain p-4"
          />
          {/* Overlay Card */}
          <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-xs">
            <div className="bg-[#f5f0e8]/95 backdrop-blur-sm rounded-full p-6 md:p-8">
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-4">
                Descubre la exquisitez de nuestras tablas de queso artesanales, elaboradas con los quesos más finos de la región. Únete a nosotros en este viaje gastronómico lleno de sabores únicos.
              </p>
              <Button className="bg-foreground text-white hover:bg-foreground/90 rounded-full px-6">
                Explorar Más
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[550px] overflow-hidden">
          <Image
            src="/images/tabla-principal.jpeg"
            alt="Tabla de quesos artesanales con kiwi, frutillas, jamón y queso"
            fill
            className="object-cover object-bottom scale-90"
          />
        </div>
      </div>

      {/* Scrolling Banner */}
      <div className="bg-[#f5a623] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
              FREE DELIVERY OVER 80 USD
              <span className="text-[#2d5a27]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
