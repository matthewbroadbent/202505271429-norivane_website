import { motion } from 'framer-motion';
import { format } from 'date-fns';

const BookingConfirmation = ({ bookingDetails, selectedSlot, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-500 mb-6 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-sans font-semibold mb-4">Booking Confirmed!</h2>
      
      <div className="bg-primary-50 rounded-md p-5 mb-6 text-left">
        <p className="text-primary-800 font-medium mb-2">Consultation Details:</p>
        <p className="mb-1">
          <span className="font-medium">Date:</span> {format(selectedSlot.startDate, 'EEEE, MMMM d, yyyy')}
        </p>
        <p className="mb-1">
          <span className="font-medium">Time:</span> {selectedSlot.startTime} - {selectedSlot.endTime}
        </p>
        <p className="mb-1">
          <span className="font-medium">Name:</span> {bookingDetails.name}
        </p>
        <p>
          <span className="font-medium">Email:</span> {bookingDetails.email}
        </p>
      </div>
      
      <p className="text-secondary-600 mb-6">
        We've sent a confirmation email with all the details. Looking forward to speaking with you!
      </p>
      
      <button
        onClick={onClose}
        className="btn btn-accent"
      >
        Close
      </button>
    </motion.div>
  );
};

export default BookingConfirmation;
