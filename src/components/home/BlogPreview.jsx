import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import BlogCard from '../blog/BlogCard';
import { getRecentBlogPosts } from '../../services/blogService';

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const recentPosts = await getRecentBlogPosts(3);
        setPosts(recentPosts);
      } catch (error) {
        console.error('Error fetching recent blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <SectionHeading 
          title="Latest Insights" 
          subtitle="Expert advice and strategies for planning your business exit"
        />
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : posts.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-600">No blog posts available yet. Check back soon!</p>
          </div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View all articles
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
