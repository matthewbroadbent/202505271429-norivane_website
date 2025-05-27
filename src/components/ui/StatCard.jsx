import { motion } from 'framer-motion'

const StatCard = ({ stat, index }) => {
  const { value, label, description } = stat
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center"
    >
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2">
        {value}
      </div>
      <h3 className="text-lg md:text-xl font-medium text-secondary-900 mb-2">
        {label}
      </h3>
      {description && (
        <p className="text-secondary-600 text-sm">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default StatCard
