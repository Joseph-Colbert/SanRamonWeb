import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SpecialOffer() {
  return (
    <section className="bg-[#f5f0e8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic mb-2">
            Oferta Especial
          </h2>
          <p className="text-muted-foreground text-sm mb-8">Por Tiempo Limitado</p>
          
          <p className="text-foreground leading-relaxed mb-8 max-w-md">
            Disfruta de un 20% de descuento en nuestras tablas de queso selectas durante este mes.
          </p>
          
          <div>
            <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-6">
              Compra Ahora
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[400px] lg:h-[550px] overflow-hidden">
          <Image
            src="/images/tabla-principal.jpeg"
            alt="Tabla de quesos gourmet con todos nuestros ingredientes premium"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
