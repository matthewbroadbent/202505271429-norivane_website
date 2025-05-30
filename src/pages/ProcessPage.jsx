import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const ProcessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Process | Norivane'
  }, [])
  
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
        'Financial performance analysis and normalization',
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
        'Financial performance optimization',
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
      description: 'We create a customized exit plan aligned with your timeline and goals, including valuation targets, potential buyer profiles, and deal structure preferences.',
      details: [
        'Valuation range establishment',
        'Exit option analysis (full sale, partial sale, management buyout)',
        'Tax optimization planning',
        'Timeline development with key milestones',
        'Deal structure preferences documentation'
      ],
      image: 'https://images.pexels.com/photos/7681926/pexels-photo-7681926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
      description: 'We guide you through the negotiation process, helping structure a deal that maximizes upfront value while protecting your interests in earnouts and contingent payments.',
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
              Our Process
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100"
            >
              A proven methodology refined through dozens of successful business exits
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Process Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Proven Exit Process"
            subtitle="A structured approach to maximize your business value and ensure a successful transition"
            align="center"
          />
          
          <div className="mt-16 space-y-24">
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
                      Finalization of the purchase agreement, closing of the transaction, and implementation of the transition plan.
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
                45+
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
