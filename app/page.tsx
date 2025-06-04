export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Level Up Your Web Presence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional web development services that help businesses thrive in the digital world. 
            Modern, responsive, and user-friendly solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Get Started
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose LevelUp Web?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast & Modern</h3>
              <p className="text-gray-600">
                Built with the latest technologies for optimal performance and user experience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Responsive Design</h3>
              <p className="text-gray-600">
                Perfectly optimized for all devices - desktop, tablet, and mobile.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with security best practices and reliable hosting solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get in touch with us today and let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@maktubtechnologies.com"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="tel:7866411493"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 