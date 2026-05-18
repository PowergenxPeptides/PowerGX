'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star } from 'lucide-react'

const bestSellers = [
  {
    id: 'retatutide',
    name: 'RETATUTIDE',
    description: 'Advanced GLP-1 Receptor Agonist',
    price: '€149.99',
    rating: 5,
    reviews: 24,
    badge: 'BESTSELLER',
    gradient: 'from-power-orange-cta/20 to-power-cyan-glow/20'
  },
  {
    id: 'ghk-cu',
    name: 'GHK-CU',
    description: 'Copper Peptide Complex',
    price: '€119.99',
    rating: 5,
    reviews: 18,
    badge: 'PREMIUM',
    gradient: 'from-power-electric-blue/20 to-power-royal-blue/20'
  },
  {
    id: 'hgh-10iu',
    name: 'HGH (10iu)',
    description: 'Human Growth Hormone',
    price: '€89.99',
    rating: 4,
    reviews: 32,
    badge: 'POPULAR',
    gradient: 'from-power-cyan-glow/20 to-power-electric-blue/20'
  },
  {
    id: 'melanotan-2',
    name: 'MELANOTAN 2',
    description: 'Advanced Melanin Stimulator',
    price: '€99.99',
    rating: 5,
    reviews: 15,
    badge: 'ELITE',
    gradient: 'from-power-royal-blue/20 to-power-electric-blue/20'
  }
]

export default function BestSellers() {
  return (
    <section className="py-20 bg-power-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 metallic-text">
            BEST SELLERS
          </h2>
          <p className="text-power-silver text-lg max-w-2xl mx-auto">
            Elite-grade compounds trusted by professionals worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card h-full flex flex-col relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-power-orange-cta text-power-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>

                {/* Product Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${product.gradient} rounded-t-xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-power-cyan-glow/5 group-hover:bg-power-cyan-glow/10 transition-colors duration-300"></div>
                  {/* Subtle molecule pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="20" cy="20" r="2" fill="#00D8FF" />
                      <circle cx="80" cy="30" r="1.5" fill="#007BFF" />
                      <circle cx="60" cy="70" r="1" fill="#0B3D91" />
                      <line x1="20" y1="20" x2="80" y2="30" stroke="#00D8FF" strokeWidth="0.5" opacity="0.3" />
                      <line x1="80" y1="30" x2="60" y2="70" stroke="#007BFF" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-power-white mb-2 group-hover:text-power-cyan-glow transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-power-silver text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? 'text-power-cyan-glow fill-current' : 'text-power-silver/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-power-silver text-sm ml-2">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-power-orange-cta mb-4">
                    {product.price}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full bg-power-royal-blue hover:bg-power-electric-blue text-power-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:shadow-lg group-hover:shadow-power-electric-blue/25"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/shop" className="btn-secondary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}