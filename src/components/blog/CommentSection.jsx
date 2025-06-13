import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiThumbsUp, FiFlag, FiEdit, FiTrash2 } from 'react-icons/fi';
import LazyImage from '../utils/LazyImage';
import { addComment, deleteComment, reportComment, likeComment } from '../../services/blogService';

const CommentSection = ({ postId, comments: initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      setError('Comment cannot be empty');
      return;
    }
    
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Valid email is required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const commentData = {
        postId,
        parentId: replyTo,
        name,
        email,
        content: newComment,
        createdAt: new Date().toISOString()
      };
      
      const addedComment = await addComment(commentData);
      
      if (replyTo) {
        // Add reply to parent comment
        setComments(prevComments => 
          prevComments.map(comment => 
            comment.id === replyTo 
              ? { ...comment, replies: [...(comment.replies || []), addedComment] }
              : comment
          )
        );
      } else {
        // Add new top-level comment
        setComments(prevComments => [...prevComments, addedComment]);
      }
      
      setNewComment('');
      setReplyTo(null);
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleReply = (commentId) => {
    setReplyTo(commentId);
    // Scroll to comment form
    document.getElementById('comment-form').scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleLike = async (commentId) => {
    try {
      await likeComment(commentId);
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { ...comment, likes: comment.likes + 1 }
            : comment
        )
      );
    } catch (err) {
      console.error('Error liking comment:', err);
    }
  };
  
  const handleReport = async (commentId) => {
    try {
      await reportComment(commentId);
      alert('Comment reported. Thank you for helping us maintain a respectful community.');
    } catch (err) {
      console.error('Error reporting comment:', err);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  const renderComment = (comment, isReply = false) => (
    <motion.div 
      key={comment.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${isReply ? 'ml-12 mt-4' : 'mb-6 pb-6 border-b border-secondary-100'}`}
    >
      <div className="flex items-start">
        <LazyImage
          src={comment.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(comment.name)}
          alt={comment.name}
          className="w-10 h-10 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-secondary-900">{comment.name}</h4>
              <p className="text-xs text-secondary-500">{formatDate(comment.createdAt)}</p>
            </div>
            {comment.isAdmin && (
              <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">Author</span>
            )}
          </div>
          <div className="mt-2 text-secondary-700">
            {comment.content}
          </div>
          <div className="mt-3 flex items-center space-x-4 text-sm">
            <button 
              onClick={() => handleLike(comment.id)}
              className="flex items-center text-secondary-500 hover:text-primary-500 transition-colors"
            >
              <FiThumbsUp className="mr-1" />
              <span>{comment.likes || 0}</span>
            </button>
            <button 
              onClick={() => handleReply(comment.id)}
              className="flex items-center text-secondary-500 hover:text-primary-500 transition-colors"
            >
              <FiMessageSquare className="mr-1" />
              <span>Reply</span>
            </button>
            <button 
              onClick={() => handleReport(comment.id)}
              className="flex items-center text-secondary-500 hover:text-red-500 transition-colors"
            >
              <FiFlag className="mr-1" />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Render replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 space-y-4">
          {comment.replies.map(reply => renderComment(reply, true))}
        </div>
      )}
    </motion.div>
  );
  
  return (
    <div>
      <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center">
        <FiMessageSquare className="mr-2" />
        Comments ({comments.length})
      </h3>
      
      {comments.length > 0 ? (
        <div className="mb-8">
          {comments.map(comment => renderComment(comment))}
        </div>
      ) : (
        <div className="bg-secondary-50 rounded-lg p-6 text-center mb-8">
          <p className="text-secondary-600">Be the first to share your thoughts on this article!</p>
        </div>
      )}
      
      {/* Comment Form */}
      <div id="comment-form" className="bg-white rounded-lg border border-secondary-200 p-6">
        <h4 className="text-xl font-medium mb-4">
          {replyTo ? 'Reply to comment' : 'Leave a comment'}
        </h4>
        
        {replyTo && (
          <div className="mb-4 flex items-center justify-between bg-secondary-50 p-3 rounded-lg">
            <span className="text-sm text-secondary-600">
              Replying to a comment
            </span>
            <button 
              onClick={() => setReplyTo(null)}
              className="text-sm text-primary-500 hover:text-primary-700"
            >
              Cancel reply
            </button>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                Email * (will not be published)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-secondary-700 mb-1">
              Comment *
            </label>
            <textarea
              id="comment"
              rows="4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            ></textarea>
          </div>
          
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          
          <div className="flex items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>
          
          <p className="text-xs text-secondary-500">
            Your email address will not be published. Required fields are marked with an asterisk (*).
            By submitting this form, you agree to our comment moderation policy.
          </p>
        </form>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array
};

export default CommentSection;
