import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import BestSellers from '@/components/BestSellers'
import FeaturedStacks from '@/components/FeaturedStacks'
import WhyChoosePowerGenX from '@/components/WhyChoosePowerGenX'
import Reviews from '@/components/Reviews'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <BestSellers />
      <FeaturedStacks />
      <WhyChoosePowerGenX />
      <Reviews />
      <EmailCapture />
      <Footer />
    </main>
  )
}