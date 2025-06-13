import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import LazyImage from '../utils/LazyImage';

const BlogCard = ({ post, index = 0 }) => {
  const readingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-elegant overflow-hidden transition-transform duration-300 hover:-translate-y-2"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <LazyImage
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-xs text-secondary-500 mb-3 space-x-4">
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{readingTime(post.content)} min read</span>
            </div>
          </div>
          
          <h3 className="text-xl font-serif font-semibold mb-3 text-secondary-900 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-secondary-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <LazyImage
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <span className="text-sm font-medium text-secondary-700">
                {post.author.name}
              </span>
            </div>
            
            <span className="text-primary-500 font-medium text-sm">Read More</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default BlogCard;
