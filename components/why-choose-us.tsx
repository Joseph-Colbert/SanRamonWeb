import { Award, Sparkles, Heart, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Garantizamos quesos de la más alta calidad, seleccionados cuidadosamente de productores de confianza. Siente la diferencia con cada bocado.",
    iconColor: "text-[#f5a623]",
  },
  {
    icon: Sparkles,
    title: "Selección Única",
    description: "Descubre una variedad de quesos que no encontrarás en ningún otro lugar. Desde quesos curados hasta frescos, nuestra oferta tiene algo especial para cada amante del queso.",
    iconColor: "text-[#f5a623]",
  },
  {
    icon: Heart,
    title: "Satisfacción del Cliente",
    description: "Nuestro compromiso con tu satisfacción es inquebrantable. Experimenta un servicio de primera y quesos premium que superan tus expectativas.",
    iconColor: "text-[#f5a623]",
  },
  {
    icon: Leaf,
    title: "Beneficios del Queso",
    description: "Disfruta de la riqueza de nuestros quesos, que no solo deleitan tu paladar, sino que también aportan nutrientes esenciales a tu dieta.",
    iconColor: "text-[#f5a623]",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
            ¿Por Qué Elegirnos?
          </h2>
          <Button className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-6 w-fit">
            Calidad Primero
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <feature.icon className={`w-8 h-8 ${feature.iconColor} mb-4`} />
              <h3 className="font-medium text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
