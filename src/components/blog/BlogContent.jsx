import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import LazyImage from '../utils/LazyImage';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const BlogContent = ({ content }) => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Initialize syntax highlighting
    if (contentRef.current) {
      Prism.highlightAllUnder(contentRef.current);
    }
    
    // Add IDs to headings for table of contents
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3, h4');
      headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
      });
    }
  }, [content]);
  
  // This is a placeholder for actual rich text rendering
  // In a real implementation, you would use a rich text renderer like react-markdown
  // or parse HTML content safely
  
  return (
    <motion.div 
      ref={contentRef}
      className="prose prose-lg max-w-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* This is a simplified example - in a real app, you'd use a proper rich text renderer */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      {/* Example of how to handle embedded content */}
      <div className="my-8 rounded-xl overflow-hidden shadow-elegant">
        <LazyImage
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Example embedded image"
          className="w-full h-auto"
        />
        <div className="bg-secondary-50 p-3 text-sm text-secondary-600 text-center">
          Example of an embedded image with caption
        </div>
      </div>
      
      {/* Example of embedded video */}
      <div className="my-8 rounded-xl overflow-hidden shadow-elegant">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Example embedded video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-secondary-50 p-3 text-sm text-secondary-600 text-center">
          Example of an embedded video
        </div>
      </div>
      
      {/* Example of a code block */}
      <div className="my-8">
        <pre className="language-javascript">
          <code>{`function calculateBusinessValue(revenue, profit, growth) {
  const multiplier = 5 + (growth * 0.5);
  return profit * multiplier;
}`}</code>
        </pre>
      </div>
      
      {/* Example of a blockquote */}
      <blockquote className="border-l-4 border-primary-500 pl-4 italic my-8">
        <p className="text-xl">
          "The best time to plan your exit strategy is before you start your business. The second best time is now."
        </p>
        <footer className="text-secondary-600 mt-2">— Business Exit Strategy Expert</footer>
      </blockquote>
    </motion.div>
  );
};

BlogContent.propTypes = {
  content: PropTypes.string.isRequired
};

export default BlogContent;
