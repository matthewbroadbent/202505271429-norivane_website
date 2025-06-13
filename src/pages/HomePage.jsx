import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTASection from '../components/ui/CTASection'
import MetaTags from '../components/seo/MetaTags'
import { seoData } from '../data/seoData'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <MetaTags {...seoData.home} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section with Premium Design Elements - Reduced top padding */}
      <div id="about-section" className="relative bg-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
        <About />
      </div>
      
      {/* Services Section with Premium Design - Reduced top margin */}
      <div className="relative bg-gradient-to-b from-white to-primary-50 py-20 overflow-hidden">
        <Services />
      </div>
      
      {/* Stats Section with Premium Design */}
      <div className="relative bg-primary-900 text-white py-20 overflow-hidden">
        <Stats />
      </div>
      
      {/* Process Section with Premium Design */}
      <div className="relative bg-white py-20 overflow-hidden">
        <Process />
      </div>
      
      {/* Testimonials Section with Premium Design */}
      <div className="relative bg-gradient-to-b from-white to-primary-50 py-20 overflow-hidden">
        <Testimonials />
      </div>
      
      {/* FAQ Section with Premium Design */}
      <div className="relative bg-white py-20 overflow-hidden">
        <FAQ />
      </div>
      
      {/* Final CTA Section with Premium Design */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 overflow-hidden">
        <CTASection />
      </div>
    </>
  )
}

export default HomePage
