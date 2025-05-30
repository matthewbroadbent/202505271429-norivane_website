import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTASection from '../components/ui/CTASection'

const HomePage = () => {
  const [activeWord, setActiveWord] = useState(0)
  const heroRef = useRef(null)
  const transitionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  
  // Words that will animate in sequence
  const impactWords = ["Value", "Legacy", "Future", "Success"]
  
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Norivane | Exit Strategy Coaching for Established Businesses'
    
    // Cycle through impact words
    const wordInterval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % impactWords.length)
    }, 3000)
    
    return () => clearInterval(wordInterval)
  }, [])
  
  // Scroll to about section with smooth parallax effect
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 50,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <>
      {/* Innovative Split-Screen Hero with 3D Depth and Dynamic Elements */}
      <section 
        ref={heroRef}
        className="relative min-h-screen overflow-hidden pt-24 md:pt-0" // Added padding-top to prevent header overlap
      >
        {/* Left Panel - Deep Blue Gradient Background */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-7/12 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
          {/* Animated Accent Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-accent-400"
                style={{
                  width: `${Math.random() * 30 + 20}%`,
                  left: `${Math.random() * 70}%`,
                  top: `${(i * 20) + Math.random() * 10}%`,
                }}
                animate={{
                  x: [0, 100, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          {/* Subtle Dot Grid Pattern */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          
          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"
              style={{ top: '20%', left: '-10%' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-accent-500/10 blur-3xl"
              style={{ bottom: '10%', right: '5%' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </div>
        
        {/* Right Panel - Image with Overlay (visible only on large screens) */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-6/12">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary-900/80 to-primary-900 z-20" /> {/* Gradient overlay */}
          
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Business professionals in strategic meeting" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0 z-30">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-white/20 rounded-full"
                style={{
                  width: `${(i + 1) * 150}px`,
                  height: `${(i + 1) * 150}px`,
                  top: '50%',
                  right: `${20 + i * 10}%`,
                  transform: 'translateY(-50%)',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Content Container with 3D Perspective */}
        <div className="relative z-40 container-custom mx-auto h-screen flex flex-col justify-center px-6 lg:px-0">
          <div className="lg:w-1/2 pt-20 md:pt-0">
            {/* Premium Badge - Target Market Specification */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                <span className="mr-2 text-accent-400">✦</span>
                For Business Owners with £1m-£20m Annual Turnover
                <span className="ml-2 text-accent-400">✦</span>
              </div>
            </motion.div>
            
            {/* Dynamic Headline with Staggered Animation */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-tight tracking-tight mb-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Strategic Exit Planning
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center"
              >
                <span className="mr-3">for</span>
                <div className="relative h-[1.2em] overflow-hidden inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeWord}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 text-accent-400"
                    >
                      {impactWords[activeWord]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Business Owners
              </motion.div>
            </motion.h1>
            
            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ originX: 0 }}
              className="h-1 w-24 bg-accent-400 mb-8 rounded-full"
            />
            
            {/* Premium Subheading with Reveal Animation */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl text-white/90 mb-10 max-w-xl leading-relaxed"
            >
              Maximise your business value and secure your financial future with our expert coaching. We guide established business owners through strategic exits that protect your legacy.
            </motion.p>
            
            {/* Premium Button Group with 3D Hover Effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              {/* Primary CTA Button with Premium 3D Styling */}
              <Link 
                to="/booking" 
                className="group relative overflow-hidden px-8 py-4 bg-accent-500 text-white font-medium rounded-lg transition-all duration-300 ease-out shadow-lg hover:shadow-accent-500/30 transform hover:-translate-y-1"
              >
                {/* Button Glow Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-600 to-accent-500 transition-all duration-300 transform group-hover:scale-105"></span>
                
                {/* Button Text */}
                <span className="relative flex items-center justify-center gap-2">
                  Book a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              
              {/* Secondary Button with Glass Morphism */}
              <Link 
                to="/services" 
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 transform hover:-translate-y-1"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
            
            {/* Trust Indicators with Staggered Fade-in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <p className="text-white/60 text-sm mb-4">Trusted by business owners across key industries</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-y-0">
                {/* Industry indicators with hover effect */}
                {["Manufacturing", "Technology", "Professional Services", "Healthcare", "Retail"].map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    className="text-white/50 font-serif text-lg hover:text-white/80 transition-colors duration-300 cursor-default"
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Innovative Scroll Indicator with Parallax Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
          onClick={handleScrollToAbout}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm mb-3 font-light tracking-wider">Discover Our Expertise</span>
            <div className="relative w-10 h-16 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
                className="absolute top-2 w-3 h-3 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Innovative Transition to About Section */}
        <div ref={transitionRef} className="absolute bottom-0 left-0 right-0 z-30">
          {/* Diagonal Slice Transition */}
          <svg 
            className="w-full h-32 md:h-48 lg:h-64 fill-white" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,320L1440,160L1440,320L0,320Z"
              className="transition-transform duration-1000 ease-in-out"
            />
          </svg>
          
          {/* Floating Elements for Visual Interest */}
          <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 60}%`,
                  opacity: Math.random() * 0.5 + 0.2
                }}
                animate={{
                  y: [0, -30],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          
          {/* Gradient Overlay for Smoother Blend */}
          <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </section>
      
      {/* About Section with Premium Design Elements */}
      <div id="about-section" className="relative bg-white pt-16 md:pt-24 overflow-hidden">
        {/* Decorative Elements for Continuity */}
        <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 left-1/4 w-1 h-16 bg-gradient-to-b from-primary-500/50 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-0 left-2/3 w-1 h-24 bg-gradient-to-b from-primary-500/30 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-0 right-1/5 w-1 h-20 bg-gradient-to-b from-accent-500/40 to-transparent"
          />
        </div>
        
        {/* Premium About Section Wrapper */}
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              <span className="mr-2 text-primary-500">✦</span>
              Our Expertise
              <span className="ml-2 text-primary-500">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-secondary-900 mb-6">
              Expert Guidance for Your <span className="text-primary-600">Business Exit</span>
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              We specialise in helping business owners with £1m-£20m turnover maximise their exit value and secure their legacy through strategic planning and expert coaching.
            </p>
          </motion.div>
          
          {/* Premium Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Premium Image Treatment */}
              <div className="absolute -inset-4 bg-primary-500/5 rounded-2xl blur-lg"></div>
              <div className="relative overflow-hidden rounded-xl border border-primary-100 shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business strategy session" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full filter blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-600/10 rounded-full filter blur-xl transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-elegant px-4 py-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-primary-700 font-semibold text-xs">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-secondary-900">20+ Years</p>
                    <p className="text-secondary-600 text-xs">Combined Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-secondary-900 mb-6">
                Why Business Owners Choose Norivane
              </h3>
              
              {/* Premium Feature List */}
              <div className="space-y-6">
                {[
                  {
                    title: "Strategic Exit Planning",
                    description: "We develop comprehensive exit strategies tailored to your specific business goals and market conditions.",
                    icon: "✓"
                  },
                  {
                    title: "Value Maximisation",
                    description: "Our proven methodologies help identify and enhance the key value drivers in your business before exit.",
                    icon: "✓"
                  },
                  {
                    title: "Legacy Protection",
                    description: "We ensure your business legacy continues while securing your financial future after exit.",
                    icon: "✓"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-semibold">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-secondary-900 mb-2">{feature.title}</h4>
                      <p className="text-secondary-700">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link 
                  to="/about" 
                  className="group inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                >
                  Learn more about our approach
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-50 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      {/* Services Section with Premium Design */}
      <div className="relative bg-gradient-to-b from-white to-primary-50 py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] border border-primary-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] border border-primary-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent-400 rounded-full opacity-20"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-primary-400 rounded-full opacity-20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              <span className="mr-2 text-primary-500">✦</span>
              Our Services
              <span className="ml-2 text-primary-500">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-secondary-900 mb-6">
              Comprehensive <span className="text-primary-600">Exit Strategy</span> Solutions
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Our tailored services help business owners with £1m-£20m turnover navigate the complex exit planning process with confidence.
            </p>
          </motion.div>
          
          {/* Premium Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Exit Strategy Development",
                description: "Comprehensive exit planning tailored to your specific business goals, timeline, and market conditions.",
                icon: "📊",
                delay: 0
              },
              {
                title: "Business Valuation Enhancement",
                description: "Strategic interventions to identify and improve key value drivers before your exit.",
                icon: "📈",
                delay: 0.1
              },
              {
                title: "Succession Planning",
                description: "Develop robust succession plans to ensure business continuity and protect your legacy.",
                icon: "🔄",
                delay: 0.2
              },
              {
                title: "Tax Efficiency Planning",
                description: "Optimise your tax position before, during, and after the business sale process.",
                icon: "💼",
                delay: 0.3
              },
              {
                title: "Buyer Identification",
                description: "Strategic matching with potential buyers who align with your business values and goals.",
                icon: "🔍",
                delay: 0.4
              },
              {
                title: "Post-Exit Life Planning",
                description: "Guidance on personal transition and wealth management after your business exit.",
                icon: "🌱",
                delay: 0.5
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative bg-white rounded-xl shadow-elegant border border-primary-50 p-6 transition-all duration-300 hover:shadow-elegant-lg hover:border-primary-100 overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-secondary-900 mb-3">{service.title}</h3>
                  <p className="text-secondary-700 mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary-100 to-transparent transform rotate-45 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary-700 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section with Premium Design */}
      <div className="relative bg-primary-900 text-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-50 to-transparent opacity-10"></div>
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/4 -right-1/4 w-[40rem] h-[40rem] border border-primary-700 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/4 -left-1/4 w-[30rem] h-[30rem] border border-primary-700 rounded-full opacity-20"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-4">
              <span className="mr-2 text-accent-400">✦</span>
              Our Impact
              <span className="ml-2 text-accent-400">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              Proven <span className="text-accent-400">Results</span> for Business Owners
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We've helped business owners across the UK achieve exceptional outcomes through strategic exit planning.
            </p>
          </motion.div>
          
          {/* Premium Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "£250M+", label: "Total Exit Value Facilitated", delay: 0 },
              { value: "94%", label: "Client Satisfaction Rate", delay: 0.1 },
              { value: "35+", label: "Successful Exits Completed", delay: 0.2 },
              { value: "28%", label: "Average Value Increase", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-800/30 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-accent-500/20 to-transparent transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonial Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-accent-500/20 rounded-full blur-xl"></div>
                    <img 
                      src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="CEO Portrait" 
                      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/10"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 text-center md:text-left">
                  <svg className="w-12 h-12 text-accent-500/30 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.065c-5.898 2.162-9.654 6.096-9.654 12.32 0 5.898 3.755 9.83 8.464 9.83 4.006 0 7.235-3.228 7.235-7.235 0-3.755-2.79-6.921-6.544-6.921-1.13 0-2.037.251-2.915.628.126-3.102 2.539-6.419 6.921-8.338l-3.507-0.284zM25.83 6.065c-5.898 2.162-9.654 6.096-9.654 12.32 0 5.898 3.755 9.83 8.464 9.83 4.006 0 7.235-3.228 7.235-7.235 0-3.755-2.79-6.921-6.544-6.921-1.13 0-2.037.251-2.915.628.126-3.102 2.539-6.419 6.921-8.338l-3.507-0.284z"></path>
                  </svg>
                  
                  <p className="text-xl md:text-2xl text-white/90 italic mb-6">
                    "Norivane's strategic guidance increased my business valuation by 42% and secured an exit that exceeded my expectations. Their expertise was invaluable throughout the entire process."
                  </p>
                  
                  <div>
                    <p className="font-medium text-white">Sarah Thompson</p>
                    <p className="text-white/70 text-sm">Former CEO, Thompson Manufacturing Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Process Section with Premium Design */}
      <div className="relative bg-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-900 to-transparent opacity-5"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-50 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/2"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              <span className="mr-2 text-primary-500">✦</span>
              Our Process
              <span className="ml-2 text-primary-500">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-secondary-900 mb-6">
              Your Journey to a <span className="text-primary-600">Successful Exit</span>
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Our proven methodology guides business owners through each stage of the exit planning process with clarity and confidence.
            </p>
          </motion.div>
          
          {/* Premium Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-100 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Process Steps */}
            {[
              {
                title: "Discovery & Assessment",
                description: "We begin with a comprehensive analysis of your business, personal goals, and market position to establish a baseline.",
                icon: "1",
                delay: 0
              },
              {
                title: "Value Enhancement Strategy",
                description: "Develop and implement targeted strategies to address key value drivers and maximize your business worth.",
                icon: "2",
                delay: 0.2
              },
              {
                title: "Exit Options Analysis",
                description: "Explore and evaluate all potential exit pathways to determine the optimal approach for your specific situation.",
                icon: "3",
                delay: 0.4
              },
              {
                title: "Implementation & Execution",
                description: "Execute the chosen exit strategy with precision, managing all aspects of the transition process.",
                icon: "4",
                delay: 0.6
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative md:grid md:grid-cols-2 gap-8 items-center mb-16 ${
                  index % 2 === 0 ? "" : "md:rtl"
                }`}
              >
                {/* Step Content */}
                <div className={index % 2 === 0 ? "md:text-right" : "md:text-left ltr"}>
                  <div className="bg-white rounded-xl shadow-elegant border border-primary-50 p-6 md:p-8 relative">
                    {/* Connecting Arrow */}
                    <div className="hidden md:block absolute top-1/2 w-8 h-8 bg-white transform rotate-45 border-t border-r border-primary-50 -translate-y-1/2 
                      ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2 border-b border-l border-t-0 border-r-0'}"></div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-secondary-900">{step.title}</h3>
                    </div>
                    <p className="text-secondary-700">{step.description}</p>
                  </div>
                </div>
                
                {/* Step Image/Illustration */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary-500/5 rounded-2xl blur-lg"></div>
                    <div className="relative overflow-hidden rounded-xl border border-primary-100 shadow-elegant aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent z-10"></div>
                      <img 
                        src={`https://images.pexels.com/photos/${3000 + index}/pexels-photo-${3000 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                        alt={`Step ${index + 1}: ${step.title}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Mobile Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link 
              to="/process" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary-700 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Learn More About Our Process
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Testimonials Section with Premium Design */}
      <div className="relative bg-gradient-to-b from-white to-primary-50 py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] border border-primary-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] border border-primary-100 rounded-full opacity-20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              <span className="mr-2 text-primary-500">✦</span>
              Client Success Stories
              <span className="ml-2 text-primary-500">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-secondary-900 mb-6">
              What Our <span className="text-primary-600">Clients Say</span>
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Hear from business owners who have successfully navigated their exit journey with our guidance.
            </p>
          </motion.div>
          
          {/* Premium Testimonial Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Norivane's strategic approach helped me increase my business valuation by 35% before exit. Their guidance was invaluable throughout the entire process.",
                name: "James Wilson",
                title: "Former CEO, Wilson Technologies",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0
              },
              {
                quote: "The team at Norivane provided clarity and direction during what could have been an overwhelming process. Their expertise helped me secure an exit that exceeded my expectations.",
                name: "Emma Roberts",
                title: "Former Owner, Roberts Manufacturing",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0.1
              },
              {
                quote: "Working with Norivane transformed my exit strategy. Their methodical approach and industry knowledge helped me maximize value while ensuring my business legacy continued.",
                name: "Michael Thompson",
                title: "Former CEO, Thompson Healthcare",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0.2
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative bg-white rounded-xl shadow-elegant border border-primary-50 p-6 transition-all duration-300 hover:shadow-elegant-lg hover:border-primary-100"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <svg className="w-10 h-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.065c-5.898 2.162-9.654 6.096-9.654 12.32 0 5.898 3.755 9.83 8.464 9.83 4.006 0 7.235-3.228 7.235-7.235 0-3.755-2.79-6.921-6.544-6.921-1.13 0-2.037.251-2.915.628.126-3.102 2.539-6.419 6.921-8.338l-3.507-0.284zM25.83 6.065c-5.898 2.162-9.654 6.096-9.654 12.32 0 5.898 3.755 9.83 8.464 9.83 4.006 0 7.235-3.228 7.235-7.235 0-3.755-2.79-6.921-6.544-6.921-1.13 0-2.037.251-2.915.628.126-3.102 2.539-6.419 6.921-8.338l-3.507-0.284z"></path>
                  </svg>
                  
                  {/* Testimonial Text */}
                  <p className="text-secondary-700 mb-6 italic">"{testimonial.quote}"</p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                    />
                    <div>
                      <p className="font-medium text-secondary-900">{testimonial.name}</p>
                      <p className="text-secondary-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link 
              to="/booking" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent-600 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Book Your Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* FAQ Section with Premium Design */}
      <div className="relative bg-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-50 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-50 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/2"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
              <span className="mr-2 text-primary-500">✦</span>
              Frequently Asked Questions
              <span className="ml-2 text-primary-500">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-secondary-900 mb-6">
              Common <span className="text-primary-600">Questions</span> About Exit Planning
            </h2>
            <div className="h-1 w-24 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Get answers to the most common questions about the exit planning process.
            </p>
          </motion.div>
          
          {/* Premium FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "When should I start planning my business exit?",
                answer: "Ideally, exit planning should begin 3-5 years before your intended exit date. This provides sufficient time to implement value enhancement strategies, address any business issues, and explore all exit options thoroughly. However, it's never too early to start thinking about your exit strategy.",
                delay: 0
              },
              {
                question: "What exit options are available to business owners?",
                answer: "Common exit options include selling to a strategic buyer, management buyout, family succession, employee ownership trusts, private equity investment, or initial public offering. Each option has different implications for valuation, tax, legacy, and your ongoing involvement. We help you evaluate which option best aligns with your personal and financial goals.",
                delay: 0.1
              },
              {
                question: "How is business value determined during an exit?",
                answer: "Business valuation typically considers multiple factors including financial performance (revenue, profitability, cash flow), growth potential, market conditions, industry multiples, customer diversity, operational efficiency, and management structure. We help you understand which value drivers are most important in your industry and how to enhance them before exit.",
                delay: 0.2
              },
              {
                question: "What makes Norivane different from other exit planning advisors?",
                answer: "Norivane specializes exclusively in exit planning for established businesses with £1m-£20m turnover. Our comprehensive approach integrates strategic business enhancement, financial optimization, and personal transition planning. We maintain independence from transaction services, ensuring our advice is always aligned with your best interests rather than being driven by deal completion.",
                delay: 0.3
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: faq.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-4"
              >
                <details className="group bg-white rounded-xl shadow-elegant border border-primary-50 transition-all duration-300 hover:shadow-elegant-lg hover:border-primary-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-secondary-900">{faq.question}</h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-secondary-700">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
          
          {/* More Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-secondary-700 mb-4">Have more questions about exit planning?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary-700 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Final CTA Section with Premium Design */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/4 -right-1/4 w-[40rem] h-[40rem] border border-primary-700 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/4 -left-1/4 w-[30rem] h-[30rem] border border-primary-700 rounded-full opacity-20"
          />
          
          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"
              style={{ top: '20%', left: '-10%' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-accent-500/10 blur-3xl"
              style={{ bottom: '10%', right: '5%' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              Ready to Maximise Your <span className="text-accent-400">Business Exit Value?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Book a consultation today and take the first step towards a strategic, value-maximising exit plan tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {/* Primary CTA Button with Premium 3D Styling */}
              <Link 
                to="/booking" 
                className="group relative overflow-hidden px-8 py-4 bg-accent-500 text-white font-medium rounded-lg transition-all duration-300 ease-out shadow-lg hover:shadow-accent-500/30 transform hover:-translate-y-1"
              >
                {/* Button Glow Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-600 to-accent-500 transition-all duration-300 transform group-hover:scale-105"></span>
                
                {/* Button Text */}
                <span className="relative flex items-center justify-center gap-2">
                  Book a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              
              {/* Secondary Button with Glass Morphism */}
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 transform hover:-translate-y-1"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default HomePage
