import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SpecialOffer() {
  return (
    <section id="special-offer" className="bg-[#f5f0e8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic mb-2">
            Nuestra Tabla Básica
          </h2>
          <p className="text-muted-foreground text-sm mb-8">Pidela Ahora</p>

          <p className="text-foreground leading-relaxed mb-8 max-w-md">
            Disfruta nuestro queso 100% orgánico.
          </p>

          <div>
            <Link href="/producto">
              <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-6">
                Compra Ahora
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[400px] lg:h-[550px] overflow-hidden">
          <Image
            src="/images/special-offer-detail.jpg"
            alt="Detalle de tabla de quesos gourmet con ingredientes premium"
            fill
            className="object-cover object-bottom scale-90"
          />
        </div>
      </div>
    </section>
  )
}
