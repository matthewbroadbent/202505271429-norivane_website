import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import BookingButton from '../components/booking/BookingButton';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | Norivane';
  }, []);

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
              Contact Us
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100"
            >
              Get in touch with our team to discuss your business exit strategy
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-semibold mb-6">Get in Touch</h2>
              <p className="text-secondary-600 mb-8">
                We're here to help you navigate the complex process of exiting your business. 
                Fill out the form, and we'll get back to you within 24 hours.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-medium mb-4">Contact Information</h3>
                
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary-800">Phone</h4>
                    <p className="text-secondary-600">+44 (0) 7356 224 125</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary-800">Email</h4>
                    <p className="text-secondary-600">us@norivane.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-medium mb-4">Book a Consultation</h3>
                <p className="text-secondary-600 mb-4">
                  Ready to discuss your business exit strategy? Schedule a 30-minute consultation with one of our experts.
                </p>
                <BookingButton text="Book a Consultation" className="btn-primary" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-elegant-lg p-6 md:p-8"
            >
              <h3 className="text-2xl font-serif font-medium mb-6">Send Us a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
