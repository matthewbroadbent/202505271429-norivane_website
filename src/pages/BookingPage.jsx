import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/ui/ContactForm';
import EmbeddedCalendar from '../components/booking/EmbeddedCalendar';

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [customerDetails, setCustomerDetails] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Book a Consultation | Norivane';
  }, []);
  
  const handleFormSubmit = (formData) => {
    setCustomerDetails(formData);
    setStep(2);
    window.scrollTo(0, 0);
  };
  
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
                Book a Consultation
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary-100"
              >
                Schedule a 30-minute consultation to discuss your business exit strategy
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Booking Process Section */}
        <section className="section bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Steps Indicator */}
              <div className="mb-12">
                <div className="flex items-center justify-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step === 1 ? 'bg-primary-700 text-white' : 'bg-primary-100 text-primary-700'
                  }`}>
                    1
                  </div>
                  <div className={`w-16 h-1 ${
                    step === 2 ? 'bg-primary-700' : 'bg-primary-200'
                  }`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step === 2 ? 'bg-primary-700 text-white' : 'bg-primary-100 text-primary-700'
                  }`}>
                    2
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <div className={`text-sm font-medium w-32 text-center ${
                    step === 1 ? 'text-primary-700' : 'text-secondary-600'
                  }`}>
                    Your Details
                  </div>
                  <div className={`text-sm font-medium w-32 text-center ${
                    step === 2 ? 'text-primary-700' : 'text-secondary-600'
                  }`}>
                    Select Time
                  </div>
                </div>
              </div>
              
              {/* Step Content */}
              {step === 1 ? (
                <div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                      Tell Us About Your Business
                    </h2>
                    <p className="text-secondary-600">
                      Please provide your details so we can prepare for your consultation.
                    </p>
                  </motion.div>
                  
                  <div className="custom-contact-form">
                    <ContactForm onSubmit={handleFormSubmit} />
                  </div>
                </div>
              ) : (
                <div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                      Choose Your Consultation Time
                    </h2>
                    <p className="text-secondary-600">
                      Select a convenient 30-minute slot for your consultation.
                    </p>
                  </motion.div>
                  
                  <EmbeddedCalendar />
                </div>
              )}
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
                <h3 className="text-xl font-serif font-medium mb-3">What should I prepare for the consultation?</h3>
                <p className="text-secondary-600">
                  It's helpful to have a general understanding of your business financials, growth trajectory, and any specific exit objectives you may have. However, detailed documentation isn't required for this initial consultation.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">How long is the consultation?</h3>
                <p className="text-secondary-600">
                  Each initial consultation is scheduled for 30 minutes. This gives us enough time to understand your situation and discuss potential next steps. If needed, we can schedule follow-up sessions.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-xl font-serif font-medium mb-3">Is there a fee for the initial consultation?</h3>
                <p className="text-secondary-600">
                  No, the initial 30-minute consultation is complimentary. It allows us to understand your situation and determine if our services are a good fit for your needs.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-serif font-medium mb-3">Can I reschedule my appointment?</h3>
                <p className="text-secondary-600">
                  Yes, you can reschedule your appointment up to 24 hours before the scheduled time. Simply contact us via email or phone, or use the rescheduling link in your confirmation email.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
