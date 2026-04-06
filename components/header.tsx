"use client"

import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
      <Link href="/" className="text-[#2d5a27] font-medium text-lg">
        RM
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
          Home
        </Link>
        <Link href="#about" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
          Sobre Nosotros
        </Link>
        <Link href="#contact" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
          Contáctanos
        </Link>
        <Link href="#" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
          Comprar
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-[#2d5a27] hover:opacity-70 transition-opacity">
          <ShoppingBag className="w-5 h-5" />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2d5a27]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
          <Link href="/" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="#contact" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
            Contáctanos
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-[#2d5a27] transition-colors">
            Comprar
          </Link>
        </nav>
      )}
    </header>
  )
}
