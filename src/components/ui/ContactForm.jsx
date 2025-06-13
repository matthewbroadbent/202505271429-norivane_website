import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { getEmailJSConfig } from '../../utils/emailjs'

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    message: '',
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (onSubmit) {
      // If onSubmit prop is provided, call it with form data
      onSubmit(formData)
      setIsSubmitting(false)
      return
    }
    
    // Default form submission behavior using EmailJS
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || 'Not provided',
        company: formData.company,
        revenue: formData.revenue || 'Not specified',
        message: formData.message,
      }
      
      // Get EmailJS configuration
      const { serviceId, templateId, userId } = getEmailJSConfig();
      
      console.log('EmailJS Config:', {
        userId: userId ? 'Set' : 'Not set',
        serviceId: serviceId ? 'Set' : 'Not set',
        templateId: templateId ? 'Set' : 'Not set'
      })
      
      if (!serviceId || !templateId) {
        // For development/testing, simulate successful submission
        if (!import.meta.env.PROD) {
          console.log('Development mode: Simulating successful email submission');
          setFormStatus({
            submitted: true,
            success: true,
            message: 'Thank you for your message. We will be in touch shortly. (Development mode)',
          });
          
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            revenue: '',
            message: '',
          });
          setIsSubmitting(false);
          return;
        }
        
        console.error('EmailJS configuration is missing. Please check your environment variables or fallback configuration.')
        setFormStatus({
          submitted: true,
          success: false,
          message: 'There was an error sending your message. Please contact us directly at us@norivane.com.',
        })
        setIsSubmitting(false)
        return
      }
      
      // Using the newer recommended approach with @emailjs/browser
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      )
      
      console.log('EmailJS SUCCESS:', response)
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message. We will be in touch shortly.',
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        revenue: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS ERROR:', error)
      setFormStatus({
        submitted: true,
        success: false,
        message: `There was an error sending your message. Please try again later or contact us directly at us@norivane.com.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const revenueOptions = [
    { value: '', label: 'Select annual revenue (optional)' },
    { value: '1-5M', label: '£1M - £5M' },
    { value: '5-10M', label: '£5M - £10M' },
    { value: '10-20M', label: '£10M - £20M' },
    { value: '20M+', label: 'Over £20M' },
  ]
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-elegant-lg p-6 md:p-8 lg:p-10"
    >
      {formStatus.submitted ? (
        <div className="text-center py-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${formStatus.success ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-700'} mb-6`}>
            {formStatus.success ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
          </div>
          <h3 className="text-2xl font-serif font-medium mb-3">
            {formStatus.success ? 'Message Sent!' : 'Something went wrong'}
          </h3>
          <p className="text-secondary-600 max-w-md mx-auto">
            {formStatus.message}
          </p>
          {!formStatus.success && (
            <button 
              onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
              className="mt-6 btn-primary py-2 px-6"
            >
              Try Again
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="John Smith"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="+44 123 456 7890"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Company Ltd"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="revenue" className="block text-sm font-medium text-secondary-700 mb-1">
              Annual Revenue
            </label>
            <select
              id="revenue"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              {revenueOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Tell us about your business and exit goals..."
            />
          </div>
          
          <div className="text-sm text-secondary-600">
            Fields marked with * are required
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : (onSubmit ? 'Continue to Booking' : 'Send Message')}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  )
}

export default ContactForm
