import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Us | Norivane'
  }, [])
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: clientX / innerWidth - 0.5,
        y: clientY / innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const values = [
    {
      title: "Strategic Focus",
      description: "We approach every client engagement with a strategic mindset, focusing on long-term value creation rather than quick transactions.",
      icon: "📊"
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings, providing honest assessments and transparent guidance throughout the process.",
      icon: "🤝"
    },
    {
      title: "Client-Centred",
      description: "Your goals and vision drive our approach. We tailor our strategies to your specific situation and desired outcomes.",
      icon: "👥"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional results through meticulous attention to detail and continuous improvement.",
      icon: "🏆"
    }
  ]
  
  return (
    <main>
      {/* Hero Section with Floaty Bits */}
      <section className="relative pt-32 pb-40 md:pt-40 md:pb-48 bg-[#001233] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90"></div>
          
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Animated dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          
          {/* Animated floating elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0077b6]/20 blur-[100px]"
            animate={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
            transition={{ type: "spring", damping: 15 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00b4d8]/10 blur-[80px]"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
            }}
            transition={{ type: "spring", damping: 15 }}
          ></motion.div>
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,100 Q400,150 800,100 T1600,100"
              fill="none"
              stroke="rgba(0, 180, 216, 0.1)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,200 Q400,250 800,200 T1600,200"
              fill="none"
              stroke="rgba(0, 180, 216, 0.07)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
              d="M0,300 Q400,350 800,300 T1600,300"
              fill="none"
              stroke="rgba(0, 180, 216, 0.05)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
          
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00b4d8]/30 rounded-lg"
            animate={{ 
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-[#00b4d8]/20 rounded-full"
            animate={{ 
              rotate: -360,
              x: [0, 20, 0],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          ></motion.div>
          <motion.div
            className="absolute top-2/3 right-1/3 w-20 h-20 border border-[#90e0ef]/10"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          ></motion.div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6"
            >
              About Norivane
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#caf0f8] mb-8"
            >
              Dedicated to helping business owners achieve exceptional exits
            </motion.p>
          </div>
        </div>
        
        {/* Scroll indicator - moved up to ensure visibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ opacity }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-[#caf0f8] text-sm mb-2">Discover Our Story</span>
          <div className="w-6 h-10 border-2 border-[#caf0f8]/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-[#caf0f8] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Wave Transition - Reduced height */}
      <div className="relative h-16 md:h-24 bg-white">
        {/* Main wave */}
        <svg 
          className="absolute bottom-full left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
            animate={{ d: "M0,320L1440,320L1440,250C1320,290,1200,310,1080,290C960,270,840,210,720,192C600,170,480,190,360,210C240,230,120,250,60,260L0,270Z" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            fill="#ffffff"
          ></motion.path>
        </svg>
        
        {/* Secondary decorative waves */}
        <svg 
          className="absolute bottom-full left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 }}
            animate={{ 
              d: "M0,320L1440,320L1440,280C1320,300,1200,310,1080,300C960,290,840,270,720,260C600,250,480,250,360,260C240,270,120,290,60,300L0,310Z",
              opacity: 0.1
            }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            fill="#00b4d8"
          ></motion.path>
        </svg>
        
        <svg 
          className="absolute bottom-full left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 }}
            animate={{ 
              d: "M0,320L1440,320L1440,290C1320,300,1200,300,1080,290C960,280,840,260,720,250C600,240,480,240,360,250C240,260,120,280,60,290L0,300Z",
              opacity: 0.05
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            fill="#0077b6"
          ></motion.path>
        </svg>
        
        {/* Floating particles in the wave area */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00b4d8]/30"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%", 
                opacity: 0.3 + Math.random() * 0.7,
                scale: 0.5 + Math.random() * 1
              }}
              animate={{ 
                y: "0%", 
                opacity: 0
              }}
              transition={{ 
                duration: 3 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "easeOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Our Story Section - Reduced top padding */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Norivane founder" 
                className="rounded-lg shadow-elegant-lg w-full h-auto object-cover"
              />
            </motion.div>
            
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Founded on a vision to transform how business owners approach their exit"
                align="left"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6 text-secondary-700"
              >
                <p>
                  Norivane was founded in 2014 after witnessing too many business owners leave millions on the table during their exit. Our founder, having sold his own technology company, recognized that most CEOs approach their exit without adequate preparation or strategic guidance.
                </p>
                
                <p>
                  What began as informal advisory sessions with fellow entrepreneurs quickly evolved into a structured coaching methodology. Today, Norivane has guided over 45 successful exits across multiple industries, with a consistent track record of achieving valuations 25-40% above initial market estimates.
                </p>
                
                <p>
                  Our approach combines deep financial expertise with practical operational experience. We understand both the technical aspects of business valuation and the emotional journey of letting go of a company you've built. This holistic perspective allows us to provide guidance that addresses both the business transaction and the personal transition.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our approach to every client relationship"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-elegant p-6 md:p-8"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Matthew Broadbent Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Meet Matthew Broadbent"
            subtitle="Director and Coach"
            align="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6 text-secondary-700">
                <p className="text-lg italic font-serif text-primary-700">
                  "There's a common theme running between start-up, scale up and business exit. That theme is valuation. And having the skill to enhance that valuation is a gift that will keep on giving. Investors will flock to invest in your start-up. Applications for funding will pass through funding committees without question. Buyers will fight to buy your business because a business that is attractive to investors and other funders is also a business that's ready for buyers to acquire and add to their portfolios."
                </p>
                
                <div className="pt-4 pb-6">
                  <h3 className="text-xl font-serif font-semibold text-primary-900">
                    Matthew Broadbent
                  </h3>
                  <p className="text-primary-700 font-medium">
                    DIRECTOR AND COACH
                  </p>
                </div>
                
                <p>
                  Deloitte trained Chartered Accountant with 3 decades of transactions under his belt, he has started up, bought, scaled, sold and invested in small and medium sized businesses over a career span as managing director, finance director and fund manager (when investing other people's money). Protecting you from the scares.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="max-w-md mx-auto mb-8">
                <img 
                  src="https://i.ibb.co/S43tc1Qn/IMG-7216.jpg" 
                  alt="Matthew Broadbent - Director and Coach" 
                  className="rounded-lg shadow-elegant-lg w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Approach"
            subtitle="A methodology refined through dozens of successful exits"
            align="center"
            theme="light"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-800 rounded-lg p-6 md:p-8"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-serif font-medium mb-3">Holistic Assessment</h3>
              <p className="text-white">
                We begin by understanding your business from every angle—financial performance, operational efficiency, market position, team strength, and growth potential.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary-800 rounded-lg p-6 md:p-8"
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-serif font-medium mb-3">Value Optimisation</h3>
              <p className="text-white">
                We identify and implement strategic improvements that can significantly increase your business value before going to market.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-800 rounded-lg p-6 md:p-8"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-serif font-medium mb-3">Strategic Matching</h3>
              <p className="text-white">
                Rather than a broad auction approach, we identify and approach specific buyers who are strategically aligned with your business and capable of paying a premium.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Ready to discuss your exit strategy?"
        subtitle="Book a confidential consultation to explore how we can help maximise your business sale value."
      />
    </main>
  )
}

export default AboutPage
