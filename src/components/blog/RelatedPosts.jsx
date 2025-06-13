import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock } from 'react-icons/fi';
import LazyImage from '../utils/LazyImage';

const RelatedPosts = ({ posts = [] }) => {
  const readingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(/\s+/).length || 0;
    return Math.ceil(wordCount / wordsPerMinute);
  };
  
  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-secondary-600">No related articles found.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-elegant overflow-hidden transition-transform duration-300 hover:-translate-y-2"
        >
          <Link to={`/blog/${post.slug}`} className="block">
            <div className="relative h-48 overflow-hidden">
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
              
              <h3 className="text-lg font-serif font-semibold mb-3 text-secondary-900 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <span className="text-primary-500 font-medium text-sm">Read More</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

RelatedPosts.propTypes = {
  posts: PropTypes.array
};

export default RelatedPosts;
