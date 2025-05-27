import { motion } from 'framer-motion'

const ProcessStep = ({ step, index, totalSteps }) => {
  const { number, title, description } = step
  const isLast = index === totalSteps - 1
  
  return (
    <div className="relative">
      <div className="flex items-start">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-medium text-lg z-10"
        >
          {number}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
          className="ml-6 pb-12"
        >
          <h3 className="text-xl font-medium text-secondary-900 mb-2">{title}</h3>
          <p className="text-secondary-700">{description}</p>
        </motion.div>
      </div>
      
      {!isLast && (
        <div className="absolute left-6 top-12 transform -translate-x-1/2 h-full w-0.5 bg-accent-100">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            className="w-full bg-accent-500 h-0"
          />
        </div>
      )}
    </div>
  )
}

export default ProcessStep
