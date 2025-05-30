import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CTASection from '../components/ui/CTASection'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Us | Norivane'
  }, [])
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-900">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
                About Norivane
              </h1>
              <p className="text-xl text-primary-100">
                Expert guidance for business owners looking to maximize their exit value
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-6">Our Story</h2>
              <p className="text-lg text-secondary-700 mb-8">
                Norivane was founded with a clear mission: to help business owners achieve the best possible outcome when selling their companies. With decades of combined experience in mergers and acquisitions, business valuation, and exit planning, our team understands the complexities and emotional challenges of selling a business you've built from the ground up.
              </p>
              
              <p className="text-lg text-secondary-700 mb-8">
                We specialize in working with businesses with annual turnover between £1M-£20M, providing tailored guidance through every step of the exit process. Our approach combines strategic planning, financial optimization, and buyer identification to maximize your company's value and ensure a smooth transition.
              </p>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
