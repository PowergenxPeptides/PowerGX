'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Users, Star, Truck, Heart } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Premium Sourcing',
    description: 'Only the highest quality research compounds from verified suppliers worldwide.'
  },
  {
    icon: Shield,
    title: 'Elite Branding',
    description: 'Designed for serious users who demand excellence and discretion.'
  },
  {
    icon: Users,
    title: 'Trusted Quality',
    description: 'Every batch tested and verified for purity and potency.'
  },
  {
    icon: Star,
    title: 'Repeat Customer Focused',
    description: 'Built for long-term relationships with elite performers.'
  },
  {
    icon: Truck,
    title: 'Premium Service',
    description: 'Fast, discreet shipping with white-glove customer care.'
  },
  {
    icon: Heart,
    title: 'Performance Driven',
    description: 'Formulas optimized for maximum results and safety.'
  }
]

export default function WhyChoosePowerGenX() {
  return (
    <section className="py-20 bg-power-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Luxury product image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-power-dark to-power-black rounded-2xl overflow-hidden border border-power-silver/20">
              {/* Premium product display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-power-silver/30 to-power-dark/50 rounded-t-full border-2 border-power-cyan-glow/40 backdrop-blur-sm relative mx-auto mb-8">
                    <div className="absolute inset-2 bg-gradient-to-b from-power-cyan-glow/20 to-transparent rounded-t-full"></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-14 bg-power-cyan-glow/30 rounded-full"></div>
                  </div>
                  <div className="metallic-text text-2xl font-bold mb-2">PREMIUM GRADE</div>
                  <div className="text-power-cyan-glow text-sm font-medium">RESEARCH COMPOUNDS</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border border-power-cyan-glow/30 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-power-orange-cta/20 rounded-full"></div>
              <div className="absolute top-1/2 right-12 w-2 h-2 bg-power-electric-blue rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 metallic-text">
              WHY CHOOSE<br />
              <span className="glow-text">POWERGENX</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-power-cyan-glow/20 to-power-electric-blue/20 rounded-lg flex items-center justify-center border border-power-cyan-glow/30">
                      <feature.icon className="w-6 h-6 text-power-cyan-glow" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-power-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-power-silver leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}