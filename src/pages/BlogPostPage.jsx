import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2, FiLinkedin, FiTwitter, FiFacebook, FiLink } from 'react-icons/fi';
import LazyImage from '../components/utils/LazyImage';
import SectionHeading from '../components/ui/SectionHeading';
import CommentSection from '../components/blog/CommentSection';
import RelatedPosts from '../components/blog/RelatedPosts';
import { getBlogPostBySlug, getRelatedPosts } from '../services/blogService';
import BlogContent from '../components/blog/BlogContent';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await getBlogPostBySlug(slug);
        
        if (!postData) {
          setError('Post not found');
          return;
        }
        
        setPost(postData);
        
        // Fetch related posts
        const related = await getRelatedPosts(postData.id, postData.category);
        setRelatedPosts(related);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load the blog post');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post?.title;
    
    let shareUrl;
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  const readingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(/\s+/).length || 0;
    return Math.ceil(wordCount / wordsPerMinute);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold text-secondary-800 mb-4">{error}</h2>
        <p className="text-secondary-600 mb-8">The blog post you're looking for might have been removed or doesn't exist.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="btn-primary"
        >
          Back to Blog
        </button>
      </div>
    );
  }
  
  if (!post) return null;
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <LazyImage
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container-custom pb-12 md:pb-16">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-elegant p-6 md:p-10">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center text-sm text-secondary-600 mb-8 gap-4 md:gap-6">
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
                
                <div className="flex items-center">
                  <FiCalendar className="mr-2 text-primary-500" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center">
                  <FiClock className="mr-2 text-primary-500" />
                  <span>{readingTime(post.content)} min read</span>
                </div>
              </div>
              
              {/* Article Content */}
              <BlogContent content={post.content} />
              
              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-secondary-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm hover:bg-secondary-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 flex items-center">
                <span className="text-secondary-700 font-medium mr-4">Share this article:</span>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FiTwitter />
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FiLinkedin />
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FiFacebook />
                  </button>
                  <button 
                    onClick={() => handleShare('copy')}
                    className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Copy link"
                  >
                    <FiLink />
                  </button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-secondary-50 rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <LazyImage
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{post.author.name}</h3>
                    <p className="text-secondary-600 mb-4">{post.author.bio}</p>
                    <div className="flex space-x-3">
                      {post.author.social.map(social => (
                        <a 
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-600 hover:text-primary-500 transition-colors"
                          aria-label={`Follow on ${social.platform}`}
                        >
                          {social.platform === 'twitter' && <FiTwitter size={18} />}
                          {social.platform === 'linkedin' && <FiLinkedin size={18} />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="mt-12">
                <CommentSection postId={post.id} comments={post.comments} />
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* About Author */}
              <div className="bg-white rounded-xl shadow-elegant p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <LazyImage
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <span className="block font-medium text-secondary-900">{post.author.name}</span>
                    <span className="text-sm text-secondary-500">{post.author.title}</span>
                  </div>
                </div>
                <p className="text-secondary-600 text-sm">{post.author.shortBio}</p>
              </div>
              
              {/* Table of Contents */}
              <div className="bg-white rounded-xl shadow-elegant p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item, index) => (
                    <a 
                      key={index}
                      href={`#${item.id}`}
                      className="block text-secondary-600 hover:text-primary-500 transition-colors py-1 pl-3 border-l-2 border-secondary-200 hover:border-primary-500"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-secondary-600 text-sm mb-4">Get the latest exit strategy insights delivered to your inbox.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full btn-accent"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-secondary-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Related Articles" 
            subtitle="Explore more insights on business exit strategies"
          />
          
          <RelatedPosts posts={relatedPosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
