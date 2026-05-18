'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Star, Minus, Plus, Shield, Truck, Award, ArrowLeft } from 'lucide-react'

interface Product {
  id: string
  name: string
  title: string
  description: string
  price: string
  originalPrice?: string
  purity: string
  quantity: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  benefits: string[]
  specs: { label: string; value: string }[]
  description_full: string
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    // Main product image placeholder
    `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#101010"/>
        <rect x="150" y="150" width="100" height="100" fill="url(#gradient)"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#00D8FF;stop-opacity:0.3"/>
            <stop offset="100%" style="stop-color:#007BFF;stop-opacity:0.3"/>
          </linearGradient>
        </defs>
      </svg>
    `)}`
  ]

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-power-silver mb-8">
          <Link href="/" className="hover:text-power-cyan-glow transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-power-cyan-glow transition-colors duration-300">
            Shop
          </Link>
          <span>/</span>
          <span className="text-power-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-square bg-power-dark rounded-2xl overflow-hidden border border-power-silver/20">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-power-cyan-glow'
                      : 'border-power-silver/20 hover:border-power-silver/40'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="text-power-cyan-glow text-sm font-medium mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-power-white mb-4">
                {product.title}
              </h1>
              <p className="text-power-silver text-lg">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-power-cyan-glow fill-current' : 'text-power-silver/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-power-silver">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-power-orange-cta">
                {product.price}
              </div>
              {product.originalPrice && (
                <div className="text-power-silver line-through">
                  {product.originalPrice}
                </div>
              )}
              <div className="bg-power-cyan-glow/10 text-power-cyan-glow px-3 py-1 rounded-full text-sm font-medium">
                Lab Verified
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-power-dark/50 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-power-cyan-glow" />
                <span className="text-power-silver text-sm">{product.purity} Purity</span>
              </div>
              <div className="flex items-center space-x-2 bg-power-dark/50 px-3 py-2 rounded-lg">
                <Award className="w-4 h-4 text-power-cyan-glow" />
                <span className="text-power-silver text-sm">Verified Tested</span>
              </div>
              <div className="flex items-center space-x-2 bg-power-dark/50 px-3 py-2 rounded-lg">
                <Truck className="w-4 h-4 text-power-cyan-glow" />
                <span className="text-power-silver text-sm">Fast Shipping</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-power-white font-medium">Quantity:</span>
              <div className="flex items-center border border-power-silver/20 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-power-silver/10 transition-colors duration-300"
                >
                  <Minus className="w-4 h-4 text-power-silver" />
                </button>
                <span className="px-4 py-3 text-power-white font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-power-silver/10 transition-colors duration-300"
                >
                  <Plus className="w-4 h-4 text-power-silver" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button className="w-full btn-primary py-4 text-lg">
                Add to Cart - {(parseFloat(product.price.replace('€', '')) * quantity).toFixed(2)}€
              </button>
              <button className="w-full btn-secondary py-4 text-lg">
                Buy Now
              </button>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-power-cyan-glow' : 'bg-power-orange-cta'}`}></div>
              <span className={`text-sm ${product.inStock ? 'text-power-cyan-glow' : 'text-power-orange-cta'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="border-b border-power-silver/20 mb-8">
            <nav className="flex space-x-8">
              <button className="text-power-cyan-glow border-b-2 border-power-cyan-glow pb-4 font-medium">
                Description
              </button>
              <button className="text-power-silver hover:text-power-cyan-glow pb-4 font-medium transition-colors duration-300">
                Specifications
              </button>
              <button className="text-power-silver hover:text-power-cyan-glow pb-4 font-medium transition-colors duration-300">
                Benefits
              </button>
            </nav>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Description */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-power-white mb-4">Product Description</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-power-silver leading-relaxed mb-4">
                  {product.description_full}
                </p>
                <p className="text-power-silver leading-relaxed">
                  All products are manufactured in state-of-the-art facilities under strict quality control standards.
                  Each batch undergoes comprehensive testing for purity, potency, and sterility before release.
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-bold text-power-white mb-4">Specifications</h3>
              <div className="space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-power-silver/10">
                    <span className="text-power-silver">{spec.label}:</span>
                    <span className="text-power-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-power-white mb-6">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-power-cyan-glow rounded-full"></div>
                  <span className="text-power-silver">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-power-silver/20"
        >
          <h3 className="text-2xl font-bold text-power-white mb-8 text-center">
            Related Products
          </h3>
          <div className="text-center">
            <Link href="/shop" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}