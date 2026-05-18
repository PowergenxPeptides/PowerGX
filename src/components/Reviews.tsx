'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Marcus R.',
    role: 'Professional Athlete',
    content: 'The quality and purity of POWERGENX products is unmatched. My recovery time has decreased significantly, and the results are consistent.',
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: 'Dr. Sarah L.',
    role: 'Research Scientist',
    content: 'As someone in the field, I can attest to the exceptional quality control and research-grade purity. POWERGENX sets the standard.',
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: 'Alex K.',
    role: 'Elite Performer',
    content: 'Discreet packaging, fast shipping, and products that actually work. POWERGENX has become my go-to source for premium compounds.',
    rating: 5,
    verified: true
  },
  {
    id: 4,
    name: 'Jennifer M.',
    role: 'Fitness Professional',
    content: 'The customer service is outstanding. They take the time to understand your needs and provide expert guidance. Highly recommended.',
    rating: 5,
    verified: true
  }
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-power-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 metallic-text">
            ELITE REVIEWS
          </h2>
          <p className="text-power-silver text-lg max-w-2xl mx-auto">
            Trusted by professionals worldwide
          </p>
        </motion.div>

        <div className="relative">
          {/* Main testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card max-w-4xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-power-cyan-glow mx-auto mb-6 opacity-50" />

            <blockquote className="text-xl lg:text-2xl text-power-white mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-power-cyan-glow fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div>
                <div className="font-bold text-power-white text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-power-silver text-sm">
                  {testimonials[currentIndex].role}
                </div>
              </div>
              {testimonials[currentIndex].verified && (
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-power-cyan-glow rounded-full"></div>
                  <span className="text-power-cyan-glow text-sm font-medium">Verified</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-power-cyan-glow'
                    : 'bg-power-silver/30 hover:bg-power-silver/50'
                }`}
              />
            ))}
          </div>

          {/* Side testimonials preview */}
          <div className="hidden lg:flex justify-center space-x-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`card p-4 text-left transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-power-cyan-glow bg-power-cyan-glow/5'
                    : 'hover:border-power-silver/50'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-power-cyan-glow/20 to-power-electric-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-power-cyan-glow font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-power-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-power-silver text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-power-cyan-glow fill-current" />
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}