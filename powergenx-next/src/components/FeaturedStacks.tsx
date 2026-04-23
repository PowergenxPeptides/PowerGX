'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Shield, Target } from 'lucide-react'

const featuredStacks = [
  {
    id: 'wolverine-recovery',
    name: 'WOLVERINE RECOVERY STACK',
    description: 'Accelerated recovery and tissue repair protocol',
    products: ['BPC-157', 'TB-500', 'GHK-CU'],
    price: '€279.99',
    savings: 'Save €39.98',
    icon: Shield,
    gradient: 'from-power-cyan-glow/20 to-power-electric-blue/20'
  },
  {
    id: 'summer-lean',
    name: 'SUMMER LEAN STACK',
    description: 'Fat loss and muscle preservation formula',
    products: ['RETATUTIDE', 'CJC-1295', 'Ipamorelin'],
    price: '€349.99',
    savings: 'Save €49.98',
    icon: Target,
    gradient: 'from-power-orange-cta/20 to-power-royal-blue/20'
  },
  {
    id: 'elite-growth',
    name: 'ELITE GROWTH STACK',
    description: 'Maximum muscle growth and strength gains',
    products: ['HGH Fragment', 'IGF-1', 'GHRP-6'],
    price: '€399.99',
    savings: 'Save €59.98',
    icon: Zap,
    gradient: 'from-power-electric-blue/20 to-power-cyan-glow/20'
  }
]

export default function FeaturedStacks() {
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
            FEATURED STACKS
          </h2>
          <p className="text-power-silver text-lg max-w-2xl mx-auto">
            Synergistic combinations designed for maximum results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredStacks.map((stack, index) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card h-full flex flex-col relative overflow-hidden">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stack.gradient} rounded-full flex items-center justify-center`}>
                    <stack.icon className="w-8 h-8 text-power-cyan-glow" />
                  </div>
                </div>

                {/* Stack Info */}
                <h3 className="text-xl font-bold text-power-white mb-3 text-center group-hover:text-power-cyan-glow transition-colors duration-300">
                  {stack.name}
                </h3>
                <p className="text-power-silver text-sm mb-6 text-center">
                  {stack.description}
                </p>

                {/* Products List */}
                <div className="mb-6">
                  <h4 className="text-power-silver font-semibold mb-3 text-sm uppercase tracking-wide">
                    Includes:
                  </h4>
                  <div className="space-y-2">
                    {stack.products.map((product, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-power-cyan-glow rounded-full"></div>
                        <span className="text-power-silver text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 text-center">
                  <div className="text-2xl font-bold text-power-orange-cta mb-1">
                    {stack.price}
                  </div>
                  <div className="text-power-cyan-glow text-sm font-medium">
                    {stack.savings}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/stack/${stack.id}`}
                  className="w-full bg-gradient-to-r from-power-royal-blue to-power-electric-blue hover:from-power-electric-blue hover:to-power-cyan-glow text-power-white py-4 px-6 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:shadow-lg group-hover:shadow-power-electric-blue/25"
                >
                  Get Stack
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Stack CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-power-white mb-4">
              Need a Custom Stack?
            </h3>
            <p className="text-power-silver mb-6">
              Our experts can create personalized combinations based on your specific goals and needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Consult Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}