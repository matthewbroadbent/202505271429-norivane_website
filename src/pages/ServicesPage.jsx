import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CTASection from '../components/ui/CTASection'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Services | Norivane'
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
                Our Services
              </h1>
              <p className="text-xl text-primary-100">
                Comprehensive exit planning and execution for business owners
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Content */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-6">Exit Strategy Planning</h2>
              <p className="text-lg text-secondary-700 mb-8">
                Our exit strategy planning service helps business owners develop a comprehensive roadmap for selling their business. We analyze your current business structure, financial performance, and market position to identify opportunities for value enhancement and potential obstacles to a successful sale.
              </p>
              
              <h2 className="text-3xl font-serif font-semibold mb-6">Business Valuation</h2>
              <p className="text-lg text-secondary-700 mb-8">
                Understanding your business's true value is essential for setting realistic expectations and negotiating effectively. Our valuation service provides a detailed analysis of your company's worth based on multiple methodologies, giving you a clear picture of what buyers might pay in the current market.
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

export default ServicesPage
