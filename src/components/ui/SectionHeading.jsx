import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, align = 'center', theme = 'dark', className = '' }) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  }

  const themeClasses = {
    dark: {
      title: 'text-primary-900',
      subtitle: 'text-secondary-600'
    },
    light: {
      title: 'text-white',
      subtitle: 'text-primary-100'
    }
  }

  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-serif font-semibold mb-4 ${themeClasses[theme].title}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto ${themeClasses[theme].subtitle}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
