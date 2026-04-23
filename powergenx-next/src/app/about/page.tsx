import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* About Header */}
      <section className="pt-24 pb-12 bg-power-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold metallic-text mb-4">
              ABOUT POWERGENX
            </h1>
            <p className="text-power-silver text-lg max-w-2xl mx-auto">
              Elite Science Performance for serious users
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-power-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-power-white mb-8">
            Premium Research Compounds
          </h2>
          <p className="text-power-silver text-lg leading-relaxed mb-8">
            POWERGENX is dedicated to providing the highest quality research-grade compounds
            for serious users who demand excellence. Our products are sourced from premium
            suppliers and undergo rigorous testing to ensure purity and potency.
          </p>
          <p className="text-power-silver text-lg leading-relaxed">
            Based in the Netherlands, we serve a global community of elite performers,
            researchers, and professionals who require uncompromising quality.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}