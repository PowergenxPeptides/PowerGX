'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-power-black">
      {/* Background particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-power-cyan-glow rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-power-electric-blue rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-power-royal-blue rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-power-cyan-glow rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Subtle biotech energy lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00D8FF" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="url(#energyGradient)" strokeWidth="0.5" fill="none" />
          <path d="M0,70 Q25,50 50,70 T100,70" stroke="url(#energyGradient)" strokeWidth="0.3" fill="none" />
          <path d="M0,30 Q25,50 50,30 T100,30" stroke="url(#energyGradient)" strokeWidth="0.3" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Headline and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              POWER YOUR<br />
              <span className="glow-text">NEXT EVOLUTION</span>
            </h1>
            <p className="text-xl text-power-silver mb-8 max-w-lg">
              Premium research-grade performance formulas built for the elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/shop" className="btn-primary">
                Shop Best Sellers
              </Link>
              <Link href="/collections" className="btn-secondary">
                View Collections
              </Link>
            </div>
          </motion.div>

          {/* Right side - Premium 3D vial products */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              {/* Floating vials */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main vial */}
                <div className="w-32 h-48 bg-gradient-to-b from-power-silver/20 to-power-dark/40 rounded-t-full border-2 border-power-cyan-glow/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-2 bg-gradient-to-b from-power-cyan-glow/10 to-transparent rounded-t-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-power-cyan-glow/20 rounded-full animate-pulse"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-power-cyan-glow/10 rounded-t-full blur-xl scale-110"></div>
              </motion.div>

              {/* Secondary floating vials */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -left-8 opacity-60"
              >
                <div className="w-20 h-32 bg-gradient-to-b from-power-electric-blue/20 to-power-dark/30 rounded-t-full border border-power-electric-blue/20"></div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 -right-6 opacity-50"
              >
                <div className="w-24 h-36 bg-gradient-to-b from-power-royal-blue/20 to-power-dark/30 rounded-t-full border border-power-royal-blue/20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}