import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const BookingConfirmationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Booking Confirmation | Norivane';
  }, []);

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
                Booking Confirmed
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary-100"
              >
                Thank you for scheduling a consultation with us
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Confirmation Section */}
        <section className="section bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-elegant-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                  Your Consultation is Booked
                </h2>
                
                <p className="text-secondary-600 mb-6">
                  We've sent a confirmation email with all the details. You'll also receive a calendar invitation for the scheduled time.
                </p>
                
                <div className="border-t border-b border-secondary-200 py-6 my-6">
                  <h3 className="text-lg font-medium mb-4">What to Expect</h3>
                  <ul className="text-left max-w-md mx-auto space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>A 30-minute video consultation with one of our exit strategy experts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Discussion of your business goals and potential exit strategies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Recommendations for next steps based on your specific situation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/"
                    className="btn-secondary"
                  >
                    Return to Home
                  </Link>
                  <Link
                    to="/resources"
                    className="btn-primary"
                  >
                    Explore Resources
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Need Help Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-serif font-semibold mb-6"
              >
                Need to Make Changes?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-secondary-600 mb-8"
              >
                If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a
                  href="mailto:support@norivane.com"
                  className="btn-outline-primary"
                >
                  Email Us
                </a>
                <a
                  href="tel:+18005551234"
                  className="btn-outline-primary"
                >
                  Call (800) 555-1234
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookingConfirmationPage;
