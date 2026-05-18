import Link from 'next/link'
import { Instagram, MessageCircle, HelpCircle, Truck, FileText, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-power-black border-t border-power-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold metallic-text">POWERGENX</span>
            </Link>
            <p className="text-power-silver text-sm leading-relaxed mb-6">
              Elite Science Performance. Premium research-grade compounds for serious users who demand excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-power-dark border border-power-silver/20 rounded-lg flex items-center justify-center hover:border-power-cyan-glow hover:bg-power-cyan-glow/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-power-silver hover:text-power-cyan-glow transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-power-dark border border-power-silver/20 rounded-lg flex items-center justify-center hover:border-power-cyan-glow hover:bg-power-cyan-glow/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-power-silver hover:text-power-cyan-glow transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-power-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/stacks" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  Stacks
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-power-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  <HelpCircle className="w-4 h-4" />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  <Truck className="w-4 h-4" />
                  <span>Shipping Info</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>Policies</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-power-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="text-power-silver">
                <div className="font-medium text-power-white mb-1">Email</div>
                <a href="mailto:support@powergenx.com" className="hover:text-power-cyan-glow transition-colors duration-300">
                  support@powergenx.com
                </a>
              </div>
              <div className="text-power-silver">
                <div className="font-medium text-power-white mb-1">Location</div>
                <div>Netherlands</div>
              </div>
              <div className="text-power-silver">
                <div className="font-medium text-power-white mb-1">Business Hours</div>
                <div>Mon-Fri: 9AM-6PM CET</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-power-silver/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-power-silver text-sm">
              © {currentYear} POWERGENX. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}