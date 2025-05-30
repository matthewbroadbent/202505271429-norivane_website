import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiBarChart2, FiUsers, FiMessageSquare, FiRefreshCw } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Services | Norivane'
  }, [])
  
  const services = [
    {
      id: 'exit-strategy',
      title: 'Exit Strategy Planning',
      description: 'A comprehensive exit strategy tailored to your specific business goals, timeline, and desired outcomes.',
      icon: FiTarget,
      details: [
        'Personalized exit roadmap development',
        'Timeline planning and milestone setting',
        'Exit options analysis (full sale, partial sale, management buyout)',
        'Tax optimization strategies',
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
      description: 'Expert guidance throughout the negotiation process to maximize deal value and structure.',
      icon: FiMessageSquare,
      details: [
        'Term sheet and LOI review',
        'Deal structure optimization',
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
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-900">
        <div className="container-custom">
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
              className="text-xl text-primary-100"
            >
              Comprehensive support throughout your entire business sale journey
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="How We Help Business Owners"
            subtitle="Our comprehensive suite of services guides you through every stage of the exit process"
            align="center"
          />
          
          <div className="mt-16 space-y-24">
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
                <h3 className="text-xl font-serif font-medium mb-3">Optimize</h3>
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
      
      {/* Packages Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Service Packages"
            subtitle="Flexible engagement options tailored to your specific needs"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Package 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-elegant border border-secondary-100 overflow-hidden"
            >
              <div className="p-6 bg-secondary-50 border-b border-secondary-100">
                <h3 className="text-xl font-serif font-medium text-center">Assessment</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-serif font-bold text-secondary-900">£5,000</span>
                  <span className="text-secondary-600 ml-2">one-time</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Comprehensive business valuation</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Value enhancement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Initial exit strategy consultation</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Market analysis report</span>
                  </li>
                </ul>
                
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-4 text-center font-medium rounded-md border border-primary-700 text-primary-700 hover:bg-primary-50 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
            
            {/* Package 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-elegant-lg border-2 border-primary-500 overflow-hidden transform md:-translate-y-4 z-10"
            >
              <div className="p-6 bg-primary-500 text-white">
                <h3 className="text-xl font-serif font-medium text-center">Full Exit Support</h3>
                <div className="text-xs uppercase tracking-wide text-center mt-1 text-primary-100">Most Popular</div>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-3xl font-serif font-bold text-secondary-900">£25,000</span>
                  <span className="text-secondary-600 ml-2">+ 1% success fee</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Everything in Assessment package</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Complete exit strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Buyer identification and outreach</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Full negotiation support</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Due diligence management</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Transition planning</span>
                  </li>
                </ul>
                
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-4 text-center font-medium rounded-md bg-primary-700 text-white hover:bg-primary-800 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
            
            {/* Package 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-elegant border border-secondary-100 overflow-hidden"
            >
              <div className="p-6 bg-secondary-50 border-b border-secondary-100">
                <h3 className="text-xl font-serif font-medium text-center">Custom Advisory</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-serif font-bold text-secondary-900">Custom</span>
                  <span className="text-secondary-600 ml-2">pricing</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Hourly or project-based billing</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Focus on specific aspects of exit</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary-700 mr-3 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700">Flexible engagement terms</span>
                  </li>
                </ul>
                
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-4 text-center font-medium rounded-md border border-primary-700 text-primary-700 hover:bg-primary-50 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Ready to maximize your business sale value?"
        subtitle="Book a confidential consultation to discuss your exit strategy."
      />
    </main>
  )
}

export default ServicesPage
