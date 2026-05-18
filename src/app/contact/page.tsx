import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Contact Header */}
      <section className="pt-24 pb-12 bg-power-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold metallic-text mb-4">
              CONTACT US
            </h1>
            <p className="text-power-silver text-lg max-w-2xl mx-auto">
              Get in touch with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-power-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-power-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-power-silver mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-power-black border border-power-silver/20 rounded-lg text-power-white focus:border-power-cyan-glow focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-power-silver mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-power-black border border-power-silver/20 rounded-lg text-power-white focus:border-power-cyan-glow focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-power-silver mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-power-black border border-power-silver/20 rounded-lg text-power-white focus:border-power-cyan-glow focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-power-silver mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-power-black border border-power-silver/20 rounded-lg text-power-white focus:border-power-cyan-glow focus:outline-none resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-power-white mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-power-cyan-glow font-semibold mb-2">Email</h3>
                  <p className="text-power-silver">support@powergenx.com</p>
                </div>
                <div>
                  <h3 className="text-power-cyan-glow font-semibold mb-2">Location</h3>
                  <p className="text-power-silver">Netherlands</p>
                </div>
                <div>
                  <h3 className="text-power-cyan-glow font-semibold mb-2">Business Hours</h3>
                  <p className="text-power-silver">Mon-Fri: 9AM-6PM CET</p>
                </div>
                <div>
                  <h3 className="text-power-cyan-glow font-semibold mb-2">Response Time</h3>
                  <p className="text-power-silver">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}