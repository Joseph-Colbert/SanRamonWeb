import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Nuestra Historia - Delicias de Queso",
  description: "Conoce la historia detrás de nuestras tablas de queso artesanales y nuestra pasión por la calidad.",
}

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#2d5a27] text-white py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Volver al inicio</span>
          </Link>
          <div className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="Logo San Ramón"
              width={80}
              height={80}
            />
          </div>
          <span className="font-serif text-xl font-bold">Delicias de Queso</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/images/SR2.jpg"
          alt="San Ramon 2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            Nuestra Historia
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-6">
              El Comienzo de un Sueño
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
              El Origen de San Ramón:

              Nuestra historia y nuestros sabores nacen en Carandaytí, un rincón mágico en el corazón del Chaco chuquisaqueño. Esta tierra cálida, abrazada por la inmensidad del monte, es hogar de una profunda riqueza cultural y tradiciones ancestrales, fuertemente marcadas por la herencia del pueblo Guaraní. Es una comunidad rural pequeña pero llena de vida, donde la agricultura y la ganadería se llevan a cabo con el mismo respeto y amor de siempre. En San Ramón, honramos nuestras raíces y el trabajo de la región para llevar un pedacito de la esencia del Chaco directamente a tu mesa.
            </p>
          </div>

          {/* Image Break */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/SR3.jpeg"
              alt="San Ramon 3"
              fill
              className="object-cover"
            />
          </div>

          {/* Our Philosophy */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-6">
              ¿Cómo se hace nuestro queso?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">

              Elaboramos nuestro queso siguiendo celosamente las costumbres de antaño de las familias ganaderas del Chaco. La magia de su sabor y textura radica en un proceso totalmente natural y orgánico: no utilizamos cuajos químicos ni acelerantes industriales. Empleamos métodos tradicionales heredados de generación en generación, respetando los tiempos del campo para lograr un queso artesanal con un perfil de sabor único y verdaderamente nuestro.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Trabajamos directamente con productores locales de quesos artesanales, seleccionando
              variedades únicas que van desde quesos suaves y cremosos hasta opciones curadas y aromáticas.
              Complementamos cada tabla con frutas frescas de temporada, frutos secos premium y
              acompañamientos gourmet.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f5f0e8] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2d5a27] mb-3">Calidad</h3>
              <p className="text-muted-foreground">
                Solo utilizamos ingredientes de primera calidad, seleccionados cuidadosamente.
              </p>
            </div>
            <div className="bg-[#f5f0e8] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#f5a623] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2d5a27] mb-3">Pasión</h3>
              <p className="text-muted-foreground">
                Cada tabla es preparada con amor y dedicación por nuestro equipo.
              </p>
            </div>
            <div className="bg-[#f5f0e8] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">3</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2d5a27] mb-3">Frescura</h3>
              <p className="text-muted-foreground">
                Preparamos todo el mismo día para garantizar la máxima frescura.
              </p>
            </div>
          </div>

          {/* Image Break */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/SR4.jpeg"
              alt="San Ramon 4"
              fill
              className="object-cover"
            />
          </div>

          {/* Our Products */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-6">
              ¿Cómo se recolecta nuestra miel?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
              Nuestra miel no proviene de criaderos de abejas convencionales; es un verdadero tesoro silvestre. Te ofrecemos la auténtica "miel de palo", recolectada directamente de los troncos de los árboles nativos en el monte chaqueño. Este método de recolección rústica permite que la miel conserve absolutamente todos sus nutrientes y propiedades naturales, regalándote una textura pura y un sabor completamente distinto, con las notas florales y únicas de nuestra región.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#f5a623] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-4">
              ¿Listo para probar?
            </h2>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Descubre por qué confíar en nosotros para sus momentos especiales.
              Haz tu pedido hoy y disfruta de una experiencia gastronómica única.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#special-offer">
                <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-8 py-6 text-lg">
                  Comprar
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" className="border-[#2d5a27] text-[#2d5a27] hover:bg-[#2d5a27] hover:text-white rounded-full px-8 py-6 text-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5a27] text-white py-8 px-6 md:px-12 text-center">
        <p className="text-sm opacity-80">
          © 2026 San Ramón. Todos los derechos reservados.Tradición y sabor artesanal desde el corazón del Chaco. • v1.0.2
        </p>
      </footer>
    </main>
  )
}
