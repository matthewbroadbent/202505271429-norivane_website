import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = ({ 
  title = "Ready to maximise your business sale value?",
  subtitle = "Book a confidential consultation to discuss your exit strategy.",
  primaryButtonText = "Book a Consultation",
  primaryButtonLink = "/booking",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
  showSecondaryButton = true,
  bgColor = "bg-primary-900"
}) => {
  return (
    <section className={`py-16 md:py-20 ${bgColor}`}>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to={primaryButtonLink} 
              className="btn bg-white text-primary-800 hover:bg-primary-50 focus:ring-white"
            >
              {primaryButtonText}
            </Link>
            
            {showSecondaryButton && (
              <Link 
                to={secondaryButtonLink} 
                className="btn bg-transparent text-white border border-white hover:bg-primary-800 focus:ring-white"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
