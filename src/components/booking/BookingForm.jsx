import { useState } from 'react';
import { motion } from 'framer-motion';
import { createBooking } from '../../services/calendarService';

const BookingForm = ({ selectedSlot, onClose, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create booking in Google Calendar
      await createBooking(
        selectedSlot.startDate,
        selectedSlot.endDate,
        formData
      );
      
      setIsSubmitting(false);
      onComplete(formData);
    } catch (error) {
      console.error('Error creating booking:', error);
      setIsSubmitting(false);
      setErrors({ submit: 'Failed to create booking. Please try again.' });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-sans font-semibold">Complete Your Booking</h2>
        <button 
          onClick={onClose}
          className="text-secondary-500 hover:text-secondary-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="mb-6 p-4 bg-primary-50 rounded-md">
        <p className="text-primary-800 font-medium">
          Selected Time: {selectedSlot.startTime} - {selectedSlot.endTime}
        </p>
      </div>
      
      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 rounded-md text-red-700">
          {errors.submit}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className={`w-full px-4 py-2 border rounded-md focus:ring-accent-500 focus:border-accent-500 ${
              errors.name ? 'border-red-500' : 'border-secondary-300'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
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
            className={`w-full px-4 py-2 border rounded-md focus:ring-accent-500 focus:border-accent-500 ${
              errors.email ? 'border-red-500' : 'border-secondary-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-accent-500 focus:border-accent-500 ${
              errors.phone ? 'border-red-500' : 'border-secondary-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
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
            className={`w-full px-4 py-2 border rounded-md focus:ring-accent-500 focus:border-accent-500 ${
              errors.company ? 'border-red-500' : 'border-secondary-300'
            }`}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company}</p>
          )}
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
            className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
          >
            <option value="">Select revenue range</option>
            <option value="£1M - £5M">£1M - £5M</option>
            <option value="£5M - £10M">£5M - £10M</option>
            <option value="£10M - £20M">£10M - £20M</option>
            <option value="£20M+">£20M+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
            placeholder="Please share any specific topics you'd like to discuss"
          />
        </div>
        
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="btn bg-secondary-200 text-secondary-800 hover:bg-secondary-300"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-accent ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Confirm Booking'
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm;
