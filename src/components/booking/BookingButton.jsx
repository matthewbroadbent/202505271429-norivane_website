import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BookingButton = ({ 
  text = "Book a Consultation", 
  className = "btn-primary",
  fullWidth = false
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Navigate to the booking page with embedded Google Calendar
    navigate('/book');
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`${className} ${fullWidth ? 'w-full' : ''}`}
    >
      {text}
    </motion.button>
  );
};

export default BookingButton;
