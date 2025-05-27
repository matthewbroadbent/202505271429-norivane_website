import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, index }) => {
  const { title, description, icon: Icon, link } = service
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-elegant p-6 flex flex-col h-full"
    >
      <div className="bg-primary-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
        <Icon className="text-primary-500 w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-medium text-secondary-900 mb-3">{title}</h3>
      
      <p className="text-secondary-700 mb-5 flex-grow">{description}</p>
      
      <Link 
        to={link} 
        className="text-accent-500 font-medium inline-flex items-center hover:text-accent-600 transition-colors"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </motion.div>
  )
}

export default ServiceCard
