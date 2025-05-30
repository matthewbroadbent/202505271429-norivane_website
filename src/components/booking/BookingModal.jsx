import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BookingCalendar from './BookingCalendar';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('calendar'); // calendar, form, confirmation
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  
  // Handle slot selection
  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setStep('form');
  };
  
  // Handle booking completion
  const handleBookingComplete = (details) => {
    setBookingDetails(details);
    setStep('confirmation');
  };
  
  // Handle back button
  const handleBack = () => {
    setStep('calendar');
  };
  
  // Handle close
  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setStep('calendar');
      setSelectedSlot(null);
      setBookingDetails(null);
    }, 300);
  };
  
  if (!isOpen) return null;
  
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={handleClose}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg shadow-elegant-lg w-full max-w-md p-6 md:p-8"
            >
              {step === 'calendar' && (
                <BookingCalendar 
                  onSelectSlot={handleSelectSlot} 
                  onClose={handleClose} 
                />
              )}
              
              {step === 'form' && selectedSlot && (
                <BookingForm 
                  selectedSlot={selectedSlot} 
                  onClose={handleClose}
                  onBack={handleBack}
                  onComplete={handleBookingComplete}
                />
              )}
              
              {step === 'confirmation' && selectedSlot && bookingDetails && (
                <BookingConfirmation 
                  selectedSlot={selectedSlot}
                  bookingDetails={bookingDetails}
                  onClose={handleClose}
                />
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default BookingModal;
