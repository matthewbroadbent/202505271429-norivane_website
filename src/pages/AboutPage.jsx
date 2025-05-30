import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Us | Norivane'
  }, [])
  
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
      title: "Client-Centered",
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
              About Norivane
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100"
            >
              Dedicated to helping business owners achieve exceptional exits
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section">
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
                  Norivane was founded in 2010 after witnessing too many business owners leave millions on the table during their exit. Our founder, having sold his own technology company, recognized that most CEOs approach their exit without adequate preparation or strategic guidance.
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
      
      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Experienced professionals dedicated to your success"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-elegant overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jonathan Reynolds" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-1">Jonathan Reynolds</h3>
                <p className="text-primary-700 mb-4">Founder & CEO</p>
                <p className="text-secondary-600 mb-4">
                  Former tech CEO with 20+ years of experience in scaling and selling businesses. Has personally guided 25+ successful exits.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-elegant overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Alexandra Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-1">Alexandra Chen</h3>
                <p className="text-primary-700 mb-4">Head of Strategy</p>
                <p className="text-secondary-600 mb-4">
                  Former M&A advisor with experience in transactions totaling over £500M. Specializes in value optimization strategies.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-elegant overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Michael Okonjo" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-1">Michael Okonjo</h3>
                <p className="text-primary-700 mb-4">Financial Director</p>
                <p className="text-secondary-600 mb-4">
                  Certified valuation expert with background in private equity. Leads our business valuation and financial optimization processes.
                </p>
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
              <p className="text-primary-100">
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
              <h3 className="text-xl font-serif font-medium mb-3">Value Optimization</h3>
              <p className="text-primary-100">
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
              <p className="text-primary-100">
                Rather than a broad auction approach, we identify and approach specific buyers who are strategically aligned with your business and capable of paying a premium.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Ready to discuss your exit strategy?"
        subtitle="Book a confidential consultation to explore how we can help maximize your business sale value."
      />
    </main>
  )
}

export default AboutPage
