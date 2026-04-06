"use client"

import Image from "next/image"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left Column */}
        <div className="relative h-[400px] lg:h-[650px] overflow-hidden">
          <Image
            src="/images/contact-detail.jpg"
            alt="Tabla gourmet artesanal"
            fill
            className="object-cover object-bottom scale-90"
          />

          <div className="absolute bottom-8 left-8 right-8 md:left-12 md:max-w-xs">
            <div className="bg-[#2d5a27] text-white rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-medium">Contáctanos</span>
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                ¿Tienes alguna pregunta o quieres hacer un pedido? Contáctanos y nuestro equipo estará encantado de ayudarte.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#f5f0e8]">

          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[#2d5a27]">
            Haz tu pedido por WhatsApp
          </h2>

          <p className="font-serif text-muted-foreground mb-6 leading-relaxed">
            Escríbenos directamente y te ayudamos a elegir la mejor tabla de quesos para ti.
          </p>

          <a
            href="https://wa.me/59176511219?text=Hola%20quiero%20informacion%20sobre%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d5a27] text-white px-6 py-3 rounded-full w-fit hover:opacity-90 transition font-medium"
          >
            Escribir por WhatsApp
          </a>

        </div>

      </div>
    </section>
  )
}