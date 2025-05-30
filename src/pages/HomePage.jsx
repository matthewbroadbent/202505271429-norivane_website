import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTASection from '../components/ui/CTASection'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Norivane | CEO Exit Strategy Coaching'
  }, [])
  
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}

export default HomePage
