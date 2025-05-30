import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import CTASection from '../components/ui/CTASection'
import Footer from '../components/layout/Footer'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Norivane | Expert Business Exit Strategy Consultants'
  }, [])
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Other sections would go here */}
        
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
