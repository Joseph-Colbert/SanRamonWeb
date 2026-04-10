import Link from "next/link"
import { InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react"
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
            <p className="text-sm text-foreground">sanramonlpz@gmail.com</p>
            <div className="pt-2">
              <p className="text-sm text-foreground">La Paz - Bolivia</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-start gap-4 md:justify-end">
            <Link href="#" className="text-foreground hover:text-[#2d5a27] transition-colors">
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>

            <Link href="https://www.facebook.com/share/18PWraeQF7/" className="text-foreground hover:text-[#2d5a27] transition-colors">
              <FacebookIcon className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link href="https://www.tiktok.com/@sanramon.bo?_r=1&_t=ZS-95P2xXXYCob" className="text-foreground hover:text-[#2d5a27] transition-colors">
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 San Ramón. Todos los derechos reservados.Tradición y sabor artesanal desde el corazón del Chaco. • v1.0.1
          </p>
        </div>
      </div>
    </footer>
  )
}
