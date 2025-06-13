import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import LazyImage from '../utils/LazyImage';

const FeaturedPost = ({ post }) => {
  const readingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };
  
  if (!post) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-elegant overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-full overflow-hidden">
          <LazyImage
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col justify-center">
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
          
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-secondary-900">
            {post.title}
          </h3>
          
          <p className="text-secondary-600 mb-6 line-clamp-3 md:line-clamp-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center">
              <LazyImage
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <span className="block font-medium text-secondary-900">{post.author.name}</span>
                <span className="text-xs text-secondary-500">{post.author.title}</span>
              </div>
            </div>
            
            <Link 
              to={`/blog/${post.slug}`}
              className="btn-primary-outline"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

FeaturedPost.propTypes = {
  post: PropTypes.object
};

export default FeaturedPost;
