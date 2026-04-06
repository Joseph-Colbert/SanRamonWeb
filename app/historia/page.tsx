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
          <span className="font-serif text-xl font-bold">Delicias de Queso</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/images/hero-cheese.jpg"
          alt="Nuestras tablas de queso artesanales"
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Delicias de Queso nació en 2018 de la pasión de nuestra fundadora por la gastronomía artesanal. 
              Lo que comenzó como un hobbie preparando tablas para reuniones familiares, se convirtió en un 
              emprendimiento que hoy lleva sabor y elegancia a cientos de hogares.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra misión siempre ha sido clara: ofrecer productos de la más alta calidad, seleccionando 
              cuidadosamente cada ingrediente para crear experiencias gastronómicas inolvidables.
            </p>
          </div>

          {/* Image Break */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/about-figs.jpg"
              alt="Ingredientes frescos seleccionados"
              fill
              className="object-cover"
            />
          </div>

          {/* Our Philosophy */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-6">
              Nuestra Filosofía
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Creemos que una buena tabla de quesos es más que un simple aperitivo; es una obra de arte 
              comestible que reúne a las personas. Por eso, cada tabla que creamos está diseñada para 
              deleitar tanto a la vista como al paladar.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
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
              src="/images/about-grapes.jpg"
              alt="Frutas frescas para nuestras tablas"
              fill
              className="object-cover"
            />
          </div>

          {/* Our Products */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-6">
              Nuestros Productos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nuestras tablas incluyen una cuidadosa selección de quesos artesanales acompañados de 
              frutillas frescas, higos maduros, kiwi jugoso, uvas dulces, almendras tostadas, 
              arándanos secos, miel de abeja pura, y una variedad de embutidos premium como salame 
              y jamón serrano.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ofrecemos diferentes tamaños de tablas para adaptarnos a cualquier ocasión, desde 
              una cena íntima para dos hasta grandes celebraciones familiares o eventos corporativos.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#f5a623] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d5a27] mb-4">
              ¿Listo para probar?
            </h2>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Descubre por qué cientos de clientes confían en nosotros para sus momentos especiales. 
              Haz tu pedido hoy y disfruta de una experiencia gastronómica única.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#special-offer">
                <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-8 py-6 text-lg">
                  Ver Ofertas
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
          © 2024 Delicias de Queso. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  )
}
