import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ testimonial }) => {
  const { quote, author, position, company, rating, image } = testimonial
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-elegant p-6 md:p-8 flex flex-col h-full"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-accent-500 fill-accent-500" />
        ))}
      </div>
      
      <blockquote className="text-secondary-700 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <p className="font-medium text-secondary-900">{author}</p>
          <p className="text-sm text-secondary-500">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
