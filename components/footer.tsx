import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f5f0e8] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <Link href="/" className="text-[#2d5a27] font-medium text-lg">
              J. Chen
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <p className="text-sm text-foreground">123-456-7890</p>
            <p className="text-sm text-foreground">info@mysite.com</p>
            <div className="pt-2">
              <p className="text-sm text-foreground">500 Terry Francine St, San</p>
              <p className="text-sm text-foreground">Francisco, CA 94158</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <Link href="#" className="block text-sm text-foreground hover:text-[#2d5a27] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="block text-sm text-foreground hover:text-[#2d5a27] transition-colors">
              Accessibility Statement
            </Link>
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
            © 2025 by J. Chen. Powered and secured by v0.
          </p>
        </div>
      </div>
    </footer>
  )
}
