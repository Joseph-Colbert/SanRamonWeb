import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#f5f0e8] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="Logo San Ramón"
              width={80}
              height={80}
            />
          </div>

          {/* Contact Info */}
          <br />
          <div className="space-y-2">
            <p className="text-sm text-foreground">+591 76511219</p>
            <p className="text-sm text-foreground">joseph97cm@gmail.com</p>
            <div className="pt-2">
              <p className="text-sm text-foreground">La Paz - Bolivia</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-start gap-4 md:justify-end">
            <Link href="#" className="text-foreground hover:text-[#2d5a27] transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-foreground hover:text-[#2d5a27] transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-foreground hover:text-[#2d5a27] transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 San Ramón — tradición y sabor artesanal desde el corazón del Chaco. v1.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
