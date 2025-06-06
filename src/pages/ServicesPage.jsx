import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiTarget, FiBarChart2, FiUsers, FiMessageSquare, FiRefreshCw } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Services | Norivane'
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
  
  const services = [
    {
      id: 'exit-strategy',
      title: 'Exit Strategy Planning',
      description: 'A comprehensive exit strategy tailored to your specific business goals, timeline, and desired outcomes.',
      icon: FiTarget,
      details: [
        'Personalised exit roadmap development',
        'Timeline planning and milestone setting',
        'Exit options analysis (full sale, partial sale, management buyout)',
        'Tax optimisation strategies',
        'Personal financial planning integration'
      ],
      image: 'https://images.pexels.com/photos/7681926/pexels-photo-7681926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'valuation',
      title: 'Business Valuation',
      description: 'Accurate, market-based valuation using multiple methodologies to establish realistic price expectations.',
      icon: FiBarChart2,
      details: [
        'Comprehensive financial analysis',
        'Industry-specific valuation metrics',
        'Comparable transaction analysis',
        'Value driver identification',
        'Pre-sale value enhancement strategies'
      ],
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'buyers',
      title: 'Buyer Identification',
      description: 'Strategic approach to identifying and qualifying potential buyers who align with your vision and can offer premium valuations.',
      icon: FiUsers,
      details: [
        'Strategic buyer profiling',
        'Confidential outreach campaigns',
        'Buyer qualification and screening',
        'Synergy opportunity identification',
        'Competitive tension management'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'negotiation',
      title: 'Negotiation Support',
      description: 'Expert guidance throughout the negotiation process to maximise deal value and structure.',
      icon: FiMessageSquare,
      details: [
        'Term sheet and LOI review',
        'Deal structure optimisation',
        'Earnout and contingent payment structuring',
        'Due diligence preparation and management',
        'Closing process coordination'
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'transition',
      title: 'Post-Sale Transition',
      description: 'Strategies for a smooth transition, including leadership handover, team retention, and your personal next steps.',
      icon: FiRefreshCw,
      details: [
        'Transition plan development',
        'Key employee retention strategies',
        'Knowledge transfer frameworks',
        'Integration support',
        'Personal transition coaching'
      ],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
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
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920" 
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
              Our Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#caf0f8] mb-8"
            >
              Comprehensive support throughout your entire business sale journey
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
          <span className="text-[#caf0f8] text-sm mb-2">Explore Our Services</span>
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
      
      {/* Services Overview - Reduced top padding */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="container-custom">
          <SectionHeading
            title="How We Help Business Owners"
            subtitle="Our comprehensive suite of services guides you through every stage of the exit process"
            align="center"
          />
          
          <div className="mt-12 space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-elegant-lg w-full h-auto object-cover"
                  />
                </motion.div>
                
                <div>
                  <div className="bg-primary-50 p-4 rounded-lg inline-flex mb-6 text-primary-700">
                    <service.icon size={24} />
                  </div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-serif font-semibold mb-4"
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-secondary-600 mb-6"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3 mb-8"
                  >
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary-700">{detail}</span>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology Section */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Methodology"
            subtitle="A proven approach refined through dozens of successful exits"
            align="center"
          />
          
          <div className="mt-12 bg-white rounded-lg shadow-elegant-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 border-b md:border-b-0 md:border-r border-secondary-100"
              >
                <div className="text-3xl font-serif font-bold text-primary-700 mb-4">01</div>
                <h3 className="text-xl font-serif font-medium mb-3">Assess</h3>
                <p className="text-secondary-600">
                  We begin with a comprehensive evaluation of your business, identifying strengths, weaknesses, and opportunities for value enhancement.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 border-b md:border-b-0 md:border-r border-secondary-100"
              >
                <div className="text-3xl font-serif font-bold text-primary-700 mb-4">02</div>
                <h3 className="text-xl font-serif font-medium mb-3">Optimise</h3>
                <p className="text-secondary-600">
                  We implement strategic improvements to increase your business value before approaching potential buyers.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8"
              >
                <div className="text-3xl font-serif font-bold text-primary-700 mb-4">03</div>
                <h3 className="text-xl font-serif font-medium mb-3">Execute</h3>
                <p className="text-secondary-600">
                  We guide you through the entire transaction process, from buyer identification to negotiation and closing.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value-Based Engagement Section - Added to replace pricing */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Engagement Approach"
            subtitle="We focus on value creation rather than transaction costs"
            align="center"
          />
          
          <div className="mt-12 bg-white rounded-lg shadow-elegant-lg p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business partnership" 
                  className="rounded-lg shadow-elegant w-full h-auto object-cover"
                />
              </motion.div>
              
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-serif font-semibold mb-4"
                >
                  Finding the Right Match
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4 text-secondary-700"
                >
                  <p>
                    At Norivane, we believe the most important aspect of our relationship is not the cost, but whether we're the right match for your business exit journey. Our engagement is based on the value we can create together.
                  </p>
                  
                  <p>
                    We offer flexible engagement options that can be tailored to your specific needs. Whether you join one of our structured programmes or prefer a direct one-on-one approach, we customise our services to maximise the value of your business exit.
                  </p>
                  
                  <p>
                    Our commitment is to deliver value that significantly exceeds the investment in our services. We only work with business owners where we're confident we can add substantial value beyond our fees.
                  </p>
                  
                  <div className="pt-4">
                    <a 
                      href="/booking" 
                      className="btn-primary"
                    >
                      Schedule a Consultation
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Ready to maximise your business sale value?"
        subtitle="Book a confidential consultation to discuss your exit strategy."
      />
    </main>
  )
}

export default ServicesPage
