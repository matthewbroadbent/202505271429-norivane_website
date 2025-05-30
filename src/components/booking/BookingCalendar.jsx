import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, isSameDay } from 'date-fns';
import { 
  initGoogleCalendarApi, 
  isSignedIn, 
  signIn, 
  getAvailableTimeSlots, 
  formatTimeSlot 
} from '../../services/calendarService';

const BookingCalendar = ({ onSelectSlot, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isApiInitialized, setIsApiInitialized] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState(null);
  
  // Initialize Google Calendar API
  useEffect(() => {
    const initApi = async () => {
      try {
        setIsLoading(true);
        await initGoogleCalendarApi();
        setIsApiInitialized(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing Google API:', error);
        setError('Failed to initialize calendar. Please try again later.');
        setIsLoading(false);
      }
    };
    
    initApi();
  }, []);
  
  // Load available slots when date changes
  useEffect(() => {
    const loadSlots = async () => {
      try {
        setIsLoading(true);
        
        // Try to sign in if API is initialized
        if (isApiInitialized && !isSignedIn()) {
          try {
            await signIn();
          } catch (error) {
            console.warn('Sign in failed, using mock data:', error);
            // Continue with mock data
          }
        }
        
        const slots = await getAvailableTimeSlots(selectedDate);
        setAvailableSlots(slots.map(formatTimeSlot));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading slots:', error);
        setError('Failed to load available time slots. Please try again.');
        setIsLoading(false);
      }
    };
    
    if (selectedDate) {
      loadSlots();
    }
  }, [selectedDate, isApiInitialized]);
  
  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };
  
  // Handle time slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };
  
  // Handle booking confirmation
  const handleConfirm = () => {
    if (selectedSlot) {
      onSelectSlot(selectedSlot);
    }
  };
  
  // Filter out weekends and past dates
  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable past dates and weekends
    return date < today || date.getDay() === 0 || date.getDay() === 6;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-elegant-lg p-6 md:p-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-sans font-semibold">Book a Consultation</h2>
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
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
          {error}
        </div>
      )}
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Select a Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          maxDate={addDays(new Date(), 60)}
          filterDate={date => !isDateDisabled(date)}
          inline
          className="w-full"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          Available Time Slots
        </label>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-500"></div>
          </div>
        ) : availableSlots.length === 0 ? (
          <div className="text-center py-8 text-secondary-500">
            No available slots for this date. Please select another date.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => handleSlotSelect(slot)}
                className={`py-3 px-4 rounded-md text-center transition-colors duration-200 ${
                  selectedSlot && selectedSlot.id === slot.id
                    ? 'bg-accent-500 text-white'
                    : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
                }`}
              >
                {slot.startTime} - {slot.endTime}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="btn bg-secondary-200 text-secondary-800 hover:bg-secondary-300 mr-3"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          disabled={!selectedSlot || isLoading}
          className={`btn btn-accent ${
            !selectedSlot || isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Confirm Booking
        </button>
      </div>
    </motion.div>
  );
};

export default BookingCalendar;
