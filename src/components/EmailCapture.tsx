'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-power-royal-blue to-power-electric-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-power-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-power-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-power-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail className="w-16 h-16 text-power-white mx-auto mb-6" />

          <h2 className="text-4xl lg:text-5xl font-bold text-power-white mb-4">
            JOIN THE ELITE LIST
          </h2>

          <p className="text-power-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Get exclusive access to drops, launches, VIP offers, and cutting-edge research insights.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-power-white/10 border border-power-white/20 rounded-lg text-power-white placeholder-power-white/60 focus:outline-none focus:border-power-cyan-glow focus:ring-2 focus:ring-power-cyan-glow/20 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-power-orange-cta hover:bg-orange-600 text-power-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-power-orange-cta/25 group"
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-power-white/10 backdrop-blur-sm border border-power-cyan-glow/30 rounded-lg p-8 max-w-md mx-auto"
            >
              <div className="text-power-cyan-glow text-2xl font-bold mb-2">✓ Welcome to the Elite</div>
              <div className="text-power-white">Check your email for confirmation</div>
            </motion.div>
          )}

          <div className="mt-8 text-power-white/60 text-sm">
            No spam. Unsubscribe anytime. Your privacy is protected.
          </div>
        </motion.div>
      </div>
    </section>
  )
}