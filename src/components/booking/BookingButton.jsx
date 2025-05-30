import { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const BookingButton = ({ 
  text = "Book a Consultation", 
  className = "btn-primary",
  fullWidth = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={openModal}
        className={`${className} ${fullWidth ? 'w-full' : ''}`}
      >
        {text}
      </motion.button>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default BookingButton;
