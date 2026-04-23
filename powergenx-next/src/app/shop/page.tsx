import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BestSellers from '@/components/BestSellers'

export default function Shop() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Shop Header */}
      <section className="pt-24 pb-12 bg-power-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold metallic-text mb-4">
              SHOP
            </h1>
            <p className="text-power-silver text-lg max-w-2xl mx-auto">
              Premium research-grade compounds for elite performance
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <BestSellers />

      <Footer />
    </main>
  )
}