import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ingredients = [
  {
    name: "Queso",
    description: "Queso orgánico seleccionado, cortado en cubos. Suave, cremoso y de sabor inigualable.",
    icon: "🧀",
  },
  {
    name: "Kiwi",
    description: "Kiwi fresco cortado en rodajas, aportando un toque ácido y refrescante que equilibra los sabores.",
    icon: "🥝",
  },
  {
    name: "Frutillas",
    description: "Frutillas frescas de temporada, dulces y jugosas, seleccionadas en su punto óptimo de madurez.",
    icon: "🍓",
  },
  {
    name: "Jamón",
    description: "Jamón premium delicadamente enrollado, suave y con el punto justo de sal.",
    icon: "🍖",
  },
  {
    name: "Salame",
    description: "Salame artesanal de primera calidad, con el sabor y aroma característico de los embutidos curados.",
    icon: "🥩",
  },
  {
    name: "Higos",
    description: "Higos frescos cortados, dulces y aromáticos, un clásico acompañante de los quesos.",
    icon: "🍈",
  },
  {
    name: "Uvas",
    description: "Uvas rojas frescas y jugosas, perfectas para limpiar el paladar entre bocado y bocado.",
    icon: "🍇",
  },
  {
    name: "Arándanos Secos",
    description: "Arándanos deshidratados con un sabor dulce-ácido intenso, que aportan textura y color a la tabla.",
    icon: "🫐",
  },
]

export default function ProductoPage() {
  return (
    <main className="min-h-screen bg-background font-sans">

      {/* Header */}
      <header className="bg-white border-b border-border px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="Logo San Ramón"
            width={90}
            height={90}
          />
        </div>
        <Link href="/">
          <Button variant="ghost" className="text-sm text-foreground hover:text-[#2d5a27] rounded-full">
            ← Volver al inicio
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f5f0e8] px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="text-[#f5a623] font-sans text-sm font-semibold uppercase tracking-widest mb-3">
              Nuestra Tabla Básica
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#2d5a27] leading-tight text-balance mb-6">
              Delicias de Queso
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-md">
              Una tabla cuidadosamente armada con los mejores ingredientes frescos y artesanales. Ideal para compartir en cualquier ocasión, desde una reunión íntima hasta una celebración especial a tan solo 190 Bs.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="#ingredientes">
                <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-8 py-5 text-base">
                  Ver Ingredientes
                </Button>
              </Link>
              <Link href="https://wa.me/59176511219?text=Hola%20😊%20estoy%20interesado%20en%20sus%20tablas%20de%20quesos,%20¿podrían%20brindarme%20información%20sobre%20precios%20y%20disponibilidad?" target="_blank">
                <Button variant="outline" className="rounded-full px-8 py-5 text-base border-[#2d5a27] text-[#2d5a27] hover:bg-[#2d5a27]/10">
                  Hacer un Pedido
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/tabla-principal.jpeg"
              alt="Tabla de quesos artesanales con kiwi, frutillas, jamón, salame, higos, uvas y arándanos secos"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredientes" className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest mb-2">
            Lo que incluye
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2d5a27] text-balance">
            Ingredientes de la Tabla
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Cada ingrediente es seleccionado a mano para garantizar la mejor calidad y frescura en cada tabla.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="bg-[#f5f0e8] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{ingredient.icon}</span>
              <h3 className="font-serif text-xl font-bold text-[#2d5a27]">
                {ingredient.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2d5a27] py-16 px-6 md:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-balance mb-4">
          ¿Listo para pedir tu tabla?
        </h2>
        <p className="text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
          Contactanos y armamos tu tabla a medida. Envíos disponibles centro y zona sur.
        </p>
        <Link href="https://wa.me/59176511219?text=Hola%20😊%20estoy%20interesado%20en%20sus%20tablas%20de%20quesos,%20¿podrían%20brindarme%20información%20sobre%20precios%20y%20disponibilidad?" target="_blank">
          <Button className="bg-[#f5a623] text-[#1a1a1a] hover:bg-[#f5a623]/90 rounded-full px-10 py-5 text-base font-semibold">
            Hacer un Pedido
          </Button>
        </Link>
      </section>
      {/* Footer */}
      <footer className="bg-[#2d5a27] text-white py-8 px-6 md:px-12 text-center">
        <p className="text-sm opacity-80">
          © 2026 San Ramón. Todos los derechos reservados.Tradición y sabor artesanal desde el corazón del Chaco. • v1.0.1
        </p>
      </footer>
    </main>
  )
}
