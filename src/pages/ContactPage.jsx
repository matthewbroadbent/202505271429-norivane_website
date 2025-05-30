import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/ui/ContactForm'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us | Norivane'
  }, [])
  
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
                Contact Us
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary-100"
              >
                Let's discuss how we can help you achieve a successful business exit
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="section bg-secondary-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-serif font-semibold mb-6"
                >
                  Get in Touch
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-secondary-600 mb-8"
                >
                  We're here to answer your questions about the business exit process. Reach out to schedule a confidential consultation.
                </motion.p>
                
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-700">
                      <FiMail size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-900">Email</h3>
                      <a href="mailto:contact@norivane.com" className="text-secondary-600 hover:text-primary-700 transition-colors duration-200">
                        contact@norivane.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-700">
                      <FiPhone size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-900">Phone</h3>
                      <a href="tel:+441234567890" className="text-secondary-600 hover:text-primary-700 transition-colors duration-200">
                        +44 (0) 123 456 7890
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-700">
                      <FiMapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-secondary-900">Office</h3>
                      <p className="text-secondary-600">
                        123 Business Street<br />
                        London, UK
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12"
                >
                  <h3 className="text-lg font-medium text-secondary-900 mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-secondary-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="max-w-3xl mx-auto mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">What happens after I submit the contact form?</h3>
                <p className="text-secondary-600">
                  After submitting the form, you'll receive an acknowledgment email. One of our senior advisors will then reach out within 1 business day to schedule an initial consultation at a time convenient for you.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">Is my information kept confidential?</h3>
                <p className="text-secondary-600">
                  Absolutely. We understand the sensitive nature of business exit planning. All communications and information shared with us are kept strictly confidential, protected by both our privacy policy and non-disclosure agreements.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">What should I prepare for the initial consultation?</h3>
                <p className="text-secondary-600">
                  The initial consultation is primarily a conversation about your goals and timeline. It's helpful to have a general understanding of your business financials, growth trajectory, and any specific exit objectives you may have, but detailed documentation isn't required for this first meeting.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-serif font-medium mb-3">Is there a fee for the initial consultation?</h3>
                <p className="text-secondary-600">
                  No, the initial consultation is complimentary. It allows us to understand your situation and determine if our services are a good fit for your needs. There's no obligation to proceed with our services after this meeting.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
