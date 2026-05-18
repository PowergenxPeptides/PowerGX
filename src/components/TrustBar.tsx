import { Shield, Truck, Award, MapPin } from 'lucide-react'

export default function TrustBar() {
  const trustItems = [
    { icon: Shield, text: '>99% Purity', color: 'text-power-cyan-glow' },
    { icon: Award, text: 'Verified Tested', color: 'text-power-electric-blue' },
    { icon: MapPin, text: 'Based in Netherlands', color: 'text-power-royal-blue' },
    { icon: Truck, text: 'Fast Shipping', color: 'text-power-silver' },
  ]

  return (
    <section className="bg-power-dark border-y border-power-silver/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
              <item.icon className={`w-6 h-6 ${item.color}`} />
              <span className="text-power-silver font-medium text-sm lg:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}