import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Resources | Norivane'
  }, [])
  
  const resources = [
    {
      category: 'Guides',
      items: [
        {
          title: 'The CEO\'s Exit Strategy Handbook',
          description: 'A comprehensive guide to planning and executing a successful business exit.',
          image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        },
        {
          title: 'Maximizing Business Valuation',
          description: 'Key strategies to increase your business value before going to market.',
          image: 'https://images.pexels.com/photos/7681926/pexels-photo-7681926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        },
        {
          title: 'Navigating Due Diligence',
          description: 'How to prepare for and successfully manage the due diligence process.',
          image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        }
      ]
    },
    {
      category: 'Case Studies',
      items: [
        {
          title: 'Tech Company Exit: £45M',
          description: 'How a SaaS company increased valuation by 35% in 18 months before exit.',
          image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        },
        {
          title: 'Manufacturing Business Sale',
          description: 'Strategic improvements that led to multiple competing offers.',
          image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        },
        {
          title: 'Professional Services Merger',
          description: 'How a consulting firm structured an optimal partner buyout.',
          image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        }
      ]
    },
    {
      category: 'Videos & Webinars',
      items: [
        {
          title: 'Exit Planning Masterclass',
          description: 'A 60-minute webinar covering the essentials of exit strategy planning.',
          image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        },
        {
          title: 'CEO Roundtable: Exit Lessons',
          description: 'Four CEOs share their experiences and lessons from successful exits.',
          image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        },
        {
          title: 'Valuation Methodologies Explained',
          description: 'Understanding different approaches to business valuation.',
          image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '#'
        }
      ]
    }
  ]
  
  return (
    <>
      <Header />
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
                Resources
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary-100"
              >
                Valuable insights to help you prepare for a successful business exit
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="section">
          <div className="container-custom">
            {resources.map((resourceCategory, categoryIndex) => (
              <div key={resourceCategory.category} className={`mb-20 ${categoryIndex > 0 ? 'mt-20' : ''}`}>
                <SectionHeading
                  title={resourceCategory.category}
                  subtitle={`Explore our ${resourceCategory.category.toLowerCase()} to deepen your understanding`}
                  align="center"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {resourceCategory.items.map((resource, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-elegant overflow-hidden"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-medium mb-2">{resource.title}</h3>
                        <p className="text-secondary-600 mb-4">{resource.description}</p>
                        <a 
                          href={resource.link} 
                          className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors duration-200"
                        >
                          Learn More
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 ml-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="section bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-semibold mb-4"
              >
                Stay Updated
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-secondary-600 mb-8"
              >
                Subscribe to our newsletter for the latest insights on business exit strategies, valuation trends, and success stories.
              </motion.p>
              
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap px-6 py-3"
                >
                  Subscribe
                </button>
              </motion.form>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-secondary-500 mt-4"
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section">
          <div className="container-custom">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Common questions about business exits and our resources"
              align="center"
            />
            
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-elegant p-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">How far in advance should I start planning my exit?</h3>
                <p className="text-secondary-600">
                  Ideally, you should begin planning your exit 2-3 years before your intended sale date. This gives you sufficient time to implement value-enhancing strategies, optimize operations, and address any potential issues that might affect valuation. However, even if you're considering an exit in the near term, it's never too late to start planning.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-elegant p-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">What's the difference between strategic and financial buyers?</h3>
                <p className="text-secondary-600">
                  Strategic buyers are typically companies in your industry or adjacent markets who acquire businesses to achieve synergies, expand market share, or access new technologies/capabilities. They often pay premium valuations based on strategic fit. Financial buyers, such as private equity firms, invest primarily for financial returns and typically value businesses based on cash flow and growth potential.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-elegant p-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">How can I access your premium resources?</h3>
                <p className="text-secondary-600">
                  Our premium resources, including in-depth guides, valuation tools, and case study analyses, are available to our clients and newsletter subscribers. You can gain access by either engaging our services or subscribing to our monthly insights newsletter. For specific resources, please contact us directly.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-elegant p-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">What factors most impact business valuation?</h3>
                <p className="text-secondary-600">
                  The key factors affecting business valuation include: consistent financial performance and growth trends; customer diversity and retention; strength and depth of management team; market position and competitive advantages; scalability of operations; and industry trends and multiples. Our resources provide detailed guidance on how to optimize each of these areas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <CTASection 
          title="Ready to start planning your exit strategy?"
          subtitle="Book a confidential consultation to discuss how we can help maximize your business value."
        />
      </main>
      <Footer />
    </>
  )
}

export default ResourcesPage
