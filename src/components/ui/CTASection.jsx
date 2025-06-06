import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CTASection = ({ title, subtitle }) => {
  const navigate = useNavigate()
  
  return (
    <section className="section bg-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-semibold mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-primary-50 mb-8"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              onClick={() => navigate('/booking')}
              className="btn-white"
            >
              Book a Consultation
            </button>
            
            <button 
              onClick={() => navigate('/contact')}
              className="btn-outline-white"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
