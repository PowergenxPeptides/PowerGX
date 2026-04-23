'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-power-black/80 backdrop-blur-md border-b border-power-silver/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold metallic-text">POWERGENX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
              Home
            </Link>
            <Link href="/shop" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
              Shop
            </Link>
            <Link href="/stacks" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
              Stacks
            </Link>
            <Link href="/about" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-power-silver hover:text-power-cyan-glow transition-colors duration-300">
              Contact
            </Link>
            <button className="btn-primary text-sm px-6 py-2">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-power-silver hover:text-power-cyan-glow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-power-dark/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/stacks"
                className="block px-3 py-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Stacks
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-power-silver hover:text-power-cyan-glow transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <button className="btn-primary w-full text-sm">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}