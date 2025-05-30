import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CTASection from '../components/ui/CTASection'

const ProcessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Process | Norivane'
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
                Our Process
              </h1>
              <p className="text-xl text-primary-100">
                A structured approach to maximizing your business exit value
              </p>
            </div>
          </div>
        </section>
        
        {/* Process Content */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-6">How We Work</h2>
              <p className="text-lg text-secondary-700 mb-8">
                Our proven process guides business owners through every stage of the exit journey, from initial planning to post-sale transition. We've refined this approach through years of experience, ensuring a comprehensive and personalized strategy for each client.
              </p>
              
              <div className="space-y-12 mt-12">
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-4">1. Initial Consultation</h3>
                  <p className="text-lg text-secondary-700">
                    We begin with a thorough discussion of your goals, timeline, and expectations. This helps us understand your unique situation and tailor our approach accordingly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-4">2. Business Assessment</h3>
                  <p className="text-lg text-secondary-700">
                    Our team conducts a comprehensive analysis of your business, examining financial performance, operational efficiency, market position, and growth potential.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-4">3. Value Enhancement</h3>
                  <p className="text-lg text-secondary-700">
                    Based on our assessment, we identify specific opportunities to increase your business's value before taking it to market. This might include streamlining operations, diversifying revenue streams, or strengthening your management team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default ProcessPage
