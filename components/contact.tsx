"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Image with Overlay */}
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src="/images/contact-board.jpg"
            alt="Tabla gourmet con quesos, jamón, salame, kiwi, higos y uvas"
            fill
            className="object-cover"
          />
          {/* Contact Card Overlay */}
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

        {/* Right Column - Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#f5f0e8]">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm text-foreground mb-2">
                  Nombre *
                </label>
                <Input
                  id="nombre"
                  type="text"
                  required
                  className="bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#2d5a27]"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-foreground mb-2">
                  Correo Electrónico *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#2d5a27]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm text-foreground mb-2">
                Mensaje *
              </label>
              <Textarea
                id="mensaje"
                required
                rows={4}
                className="bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-[#2d5a27]"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                className="bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 rounded-full px-8"
              >
                Enviar
              </Button>
              <p className="text-muted-foreground text-sm mt-4">Ponte en Contacto</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
