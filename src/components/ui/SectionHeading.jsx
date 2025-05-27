import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, align = 'center', darkBackground = false }) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }
  
  const textColorClasses = darkBackground 
    ? 'text-white' // Light text for dark backgrounds
    : 'text-secondary-900' // Dark text for light backgrounds
    
  const subtitleColorClasses = darkBackground
    ? 'text-gray-200' // Light muted text for dark backgrounds
    : 'text-secondary-600' // Dark muted text for light backgrounds
  
  return (
    <div className={`max-w-3xl ${alignmentClasses[align]}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`section-title ${textColorClasses}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl ${subtitleColorClasses} mb-10 md:mb-16`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
