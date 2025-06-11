import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const ProcessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Process | Norivane'
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
  
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a confidential discussion to understand your goals, timeline, and expectations for the business sale. This helps us tailor our approach to your specific situation.',
      details: [
        'Discuss your personal and business objectives',
        'Establish preliminary timeline expectations',
        'Identify potential challenges and opportunities',
        'Outline next steps in the engagement process'
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      number: '02',
      title: 'Comprehensive Business Assessment',
      description: 'We conduct a thorough evaluation of your business across multiple dimensions to establish a baseline and identify areas for improvement before going to market.',
      details: [
        'Financial performance analysis and normalisation',
        'Operational efficiency review',
        'Market position and competitive landscape assessment',
        'Team structure and dependency evaluation',
        'Growth potential and risk factor identification'
      ],
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      number: '03',
      title: 'Value Enhancement Implementation',
      description: 'Based on our assessment, we implement strategic improvements to increase your business value before approaching potential buyers.',
      details: [
        'Financial performance optimisation',
        'Operational efficiency improvements',
        'Customer concentration reduction strategies',
        'Recurring revenue enhancement',
        'Documentation of processes and intellectual property'
      ],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      number: '04',
      title: 'Exit Strategy Development',
      description: 'We create a customised exit plan aligned with your timeline and goals, including valuation targets, potential buyer profiles, and deal structure preferences.',
      details: [
        'Valuation range establishment',
        'Exit option analysis (full sale, partial sale, management buyout)',
        'Tax optimisation planning',
        'Timeline development with key milestones',
        'Deal structure preferences documentation'
      ],
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      number: '05',
      title: 'Buyer Identification & Approach',
      description: 'We identify and confidentially approach qualified buyers who are strategically aligned with your business and capable of meeting your valuation expectations.',
      details: [
        'Strategic buyer profile development',
        'Confidential marketing materials creation',
        'Targeted outreach to qualified prospects',
        'Initial interest qualification',
        'Non-disclosure agreement management'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      number: '06',
      title: 'Negotiation & Deal Structuring',
      description: 'We guide you through the negotiation process, helping structure a deal that maximises upfront value while protecting your interests in earnouts and contingent payments.',
      details: [
        'Initial offer evaluation and response strategy',
        'Term sheet and LOI negotiation',
        'Due diligence preparation and management',
        'Purchase agreement review and negotiation',
        'Closing process coordination'
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      number: '07',
      title: 'Transition Support',
      description: 'After the sale, we provide guidance on leadership transition, team retention, and your personal next steps to ensure a smooth handover and successful post-exit life.',
      details: [
        'Transition plan development',
        'Key employee retention strategies',
        'Knowledge transfer framework',
        'Integration support',
        'Personal transition coaching'
      ],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ]
  
  return (
    <>
      {/* Hero Section with Floaty Bits */}
      <section className="relative pt-32 pb-40 md:pt-40 md:pb-48 bg-[#001233] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90"></div>
          
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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
              Our Process
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#caf0f8] mb-8"
            >
              A proven methodology refined through dozens of successful business exits
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
          <span className="text-[#caf0f8] text-sm mb-2">Explore Our Process</span>
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
      
      {/* Process Overview - Reduced top padding */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="container-custom">
          <SectionHeading
            title="Our Proven Exit Process"
            subtitle="A structured approach to maximise your business value and ensure a successful transition"
            align="center"
          />
          
          <div className="mt-12 space-y-24">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
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
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-lg shadow-elegant-lg w-full h-auto object-cover"
                  />
                </motion.div>
                
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-6">
                    {step.number}
                  </div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-serif font-semibold mb-4"
                  >
                    {step.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-secondary-600 mb-6"
                  >
                    {step.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg font-medium text-secondary-900 mb-3">Key Activities:</h3>
                    <ul className="space-y-3 mb-8">
                      {step.details.map((detail, i) => (
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
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Typical Exit Timeline"
            subtitle="While every business sale is unique, here's a general timeline of what to expect"
            align="center"
          />
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:translate-x-px"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Month 1-2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                    1-2
                  </div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Months 1-2: Assessment & Planning</h3>
                    <p className="text-secondary-600">
                      Initial consultation, business assessment, and preliminary exit strategy development.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  </div>
                </motion.div>
                
                {/* Month 3-4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                    3-4
                  </div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-serif font-medium mb-2">Months 3-4: Value Enhancement</h3>
                    <p className="text-secondary-600">
                      Implementation of strategic improvements to increase business value before going to market.
                    </p>
                  </div>
                </motion.div>
                
                {/* Month 5-6 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                    5-6
                  </div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Months 5-6: Buyer Identification</h3>
                    <p className="text-secondary-600">
                      Development of marketing materials, identification of potential buyers, and initial outreach.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  </div>
                </motion.div>
                
                {/* Month 7-9 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                    7-9
                  </div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-serif font-medium mb-2">Months 7-9: Negotiation & Due Diligence</h3>
                    <p className="text-secondary-600">
                      Evaluation of offers, negotiation of terms, and management of the due diligence process.
                    </p>
                  </div>
                </motion.div>
                
                {/* Month 10-12 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0">
                    10-12
                  </div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Months 10-12: Closing & Transition</h3>
                    <p className="text-secondary-600">
                      Finalisation of the purchase agreement, closing of the transaction, and implementation of the transition plan.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Results"
            subtitle="The impact of our structured approach on business exit outcomes"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2">
                30%
              </div>
              <h3 className="text-lg md:text-xl font-medium text-secondary-900 mb-2">
                Average Value Increase
              </h3>
              <p className="text-secondary-600 text-sm">
                Typical improvement in final sale price compared to initial valuation
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2">
                92%
              </div>
              <h3 className="text-lg md:text-xl font-medium text-secondary-900 mb-2">
                Success Rate
              </h3>
              <p className="text-secondary-600 text-sm">
                Percentage of clients who successfully complete their exit
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2">
                25+
              </div>
              <h3 className="text-lg md:text-xl font-medium text-secondary-900 mb-2">
                Businesses Sold
              </h3>
              <p className="text-secondary-600 text-sm">
                Successfully guided exits across multiple industries
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2">
                9/10
              </div>
              <h3 className="text-lg md:text-xl font-medium text-secondary-900 mb-2">
                Client Satisfaction
              </h3>
              <p className="text-secondary-600 text-sm">
                Average client satisfaction rating on a 10-point scale
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Ready to begin your exit journey?"
        subtitle="Book a confidential consultation to discuss how our process can work for your business."
      />
    </>
  )
}

export default ProcessPage
