import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiTag, FiClock } from 'react-icons/fi';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import LazyImage from '../components/utils/LazyImage';
import { getAllBlogPosts } from '../services/blogService';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllBlogPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  const filteredPosts = posts
    .filter(post => {
      if (filter === 'all') return true;
      return post.category === filter;
    })
    .filter(post => {
      if (!searchQuery) return true;
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  
  const categories = ['all', ...new Set(posts.map(post => post.category))];
  
  const readingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };
  
  return (
    <>
      <PageHeader 
        title="Business Exit Strategy Blog" 
        subtitle="Insights, strategies, and expert advice for CEOs planning their business exit"
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Expert insights to help you maximize your business value and plan a successful exit"
          />
          
          <div className="mt-12">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filter === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
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
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-secondary-700 mb-2">No articles found</h3>
                <p className="text-secondary-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-primary-900">
                Stay Updated with Exit Strategy Insights
              </h3>
              <p className="text-secondary-600 mb-8">
                Subscribe to our newsletter to receive the latest articles, tips, and expert advice on maximizing your business value.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="btn-accent whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-secondary-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
