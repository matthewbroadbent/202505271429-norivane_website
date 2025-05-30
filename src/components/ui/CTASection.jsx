import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BookingButton from '../booking/BookingButton'

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-sans font-medium text-white mb-6"
          >
            Ready to Maximize Your Business Exit Value?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            Schedule a consultation to discuss your exit strategy and how we can help you achieve the best possible outcome.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <BookingButton 
              text="Book a Consultation"
              className="btn-accent"
            />
            <Link to="/contact" className="btn bg-transparent text-white border border-white hover:bg-primary-700 focus:ring-white">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
