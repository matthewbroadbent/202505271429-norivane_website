import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, startOfDay, endOfDay, isAfter, isBefore, addBusinessDays } from 'date-fns';
import { formatDate, formatTime } from '../../utils/calendarConfig';
import GoogleCalendarService from './GoogleCalendarService';

const BookingCalendar = ({ onBookingComplete, customerDetails }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingStatus, setBookingStatus] = useState({ status: 'idle', message: '' });
  const [dateRange, setDateRange] = useState([]);
  const [calendarError, setCalendarError] = useState(null);

  // Initialize date range - today to 4 working days ahead
  useEffect(() => {
    const today = new Date();
    const maxDate = getMaxAvailabilityDate(today);
    setDateRange([today, maxDate]);
    setSelectedDate(today);
  }, []);

  // Get the maximum date for availability (4 working days from now)
  const getMaxAvailabilityDate = (startDate) => {
    const now = new Date(startDate);
    let maxDate = now;
    
    // Add 4 business days
    for (let i = 0; i < 4; i++) {
      maxDate = addBusinessDays(maxDate, 1);
    }
    
    return maxDate;
  };

  // Initialize Google Calendar API
  useEffect(() => {
    const initCalendar = async () => {
      try {
        await GoogleCalendarService.init();
        setCalendarError(null);
      } catch (error) {
        console.error('Failed to initialize calendar:', error);
        setCalendarError('Failed to connect to calendar. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    initCalendar();
  }, []);

  // Load available slots when date changes
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (calendarError || !selectedDate) return;
      
      setIsLoading(true);
      
      try {
        // Set time to start of day and end of day
        const startDateTime = startOfDay(selectedDate);
        const endDateTime = endOfDay(selectedDate);
        
        const slots = await GoogleCalendarService.getAvailableSlots(startDateTime, endDateTime);
        
        // Filter slots based on minimum advance time (3 hours)
        const now = new Date();
        const minAdvanceTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // 3 hours from now
        
        const filteredSlots = slots.filter(slot => {
          return isAfter(slot.start, minAdvanceTime);
        });
        
        setAvailableSlots(filteredSlots);
        setCalendarError(null);
      } catch (error) {
        console.error('Error fetching available slots:', error);
        setCalendarError('Could not retrieve available slots. Please try again.');
        setAvailableSlots([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvailableSlots();
  }, [selectedDate, calendarError]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookSlot = async () => {
    if (!selectedSlot || !customerDetails) return;
    
    setBookingStatus({ status: 'loading', message: 'Creating your booking...' });
    
    try {
      await GoogleCalendarService.createBooking(
        selectedSlot.start,
        selectedSlot.end,
        customerDetails
      );
      
      setBookingStatus({
        status: 'success',
        message: 'Your consultation has been booked successfully!'
      });
      
      if (onBookingComplete) {
        onBookingComplete({
          date: selectedSlot.start,
          customerDetails
        });
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      setBookingStatus({
        status: 'error',
        message: 'Failed to create booking. Please try again.'
      });
    }
  };

  const handleRetryConnection = async () => {
    setCalendarError(null);
    setIsLoading(true);
    
    try {
      await GoogleCalendarService.init();
      
      // Reload slots for the selected date
      const startDateTime = startOfDay(selectedDate);
      const endDateTime = endOfDay(selectedDate);
      
      const slots = await GoogleCalendarService.getAvailableSlots(startDateTime, endDateTime);
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Failed to reconnect to calendar:', error);
      setCalendarError('Failed to connect to calendar. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderDateSelector = () => {
    if (dateRange.length !== 2) return null;
    
    const dates = [];
    let currentDate = new Date(dateRange[0]);
    
    while (currentDate <= dateRange[1]) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return (
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Select a Date (Next 4 Working Days)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {dates.map((date) => {
            // Check if it's a weekend (0 = Sunday, 6 = Saturday)
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            // Check if date is in the past
            const isPast = isBefore(date, startOfDay(new Date()));
            // Disable if weekend or past
            const isDisabled = isWeekend || isPast;
            
            return (
              <button
                key={date.toISOString()}
                onClick={() => !isDisabled && handleDateChange(date)}
                disabled={isDisabled}
                className={`p-2 rounded-md text-center transition-colors ${
                  format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                    ? 'bg-primary-700 text-white'
                    : isDisabled
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800'
                }`}
              >
                <div className="text-sm font-medium">{format(date, 'EEE')}</div>
                <div className="text-lg">{format(date, 'd')}</div>
                <div className="text-xs">{format(date, 'MMM')}</div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTimeSlots = () => {
    if (availableSlots.length === 0) {
      return (
        <div className="text-center py-8 bg-secondary-50 rounded-lg">
          <p className="text-secondary-600">No available slots on this date.</p>
          <p className="text-sm text-secondary-500 mt-2">Please select another date or check back later.</p>
        </div>
      );
    }
    
    return (
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Select a Time</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {availableSlots.map((slot) => (
            <button
              key={slot.start.toISOString()}
              onClick={() => handleSlotSelect(slot)}
              className={`p-3 rounded-md text-center transition-colors ${
                selectedSlot && selectedSlot.start.getTime() === slot.start.getTime()
                  ? 'bg-primary-700 text-white'
                  : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800'
              }`}
            >
              {formatTime(slot.start)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (calendarError) {
    return (
      <div className="text-center py-8 bg-red-50 rounded-lg">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-medium mb-3">Calendar Connection Error</h3>
        <p className="text-secondary-600 max-w-md mx-auto mb-6">
          {calendarError}
        </p>
        <button
          onClick={handleRetryConnection}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700"></div>
        <p className="ml-3 text-secondary-600">Loading available appointment times...</p>
      </div>
    );
  }

  if (bookingStatus.status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 bg-green-50 rounded-lg"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-medium mb-3">Booking Confirmed!</h3>
        <p className="text-secondary-600 max-w-md mx-auto mb-4">
          {bookingStatus.message}
        </p>
        {selectedSlot && (
          <div className="bg-white p-4 rounded-md shadow-sm max-w-sm mx-auto">
            <p className="font-medium text-secondary-800">{formatDate(selectedSlot.start)}</p>
            <p className="text-secondary-600">
              {formatTime(selectedSlot.start)} - {formatTime(selectedSlot.end)}
            </p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-elegant-lg p-6"
    >
      <h2 className="text-2xl font-serif font-medium mb-6">Book Your Consultation</h2>
      
      {renderDateSelector()}
      {renderTimeSlots()}
      
      {selectedSlot && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-8 border-t pt-6"
        >
          <h3 className="text-lg font-medium mb-3">Booking Summary</h3>
          <div className="bg-secondary-50 p-4 rounded-md mb-6">
            <p className="font-medium text-secondary-800">{formatDate(selectedSlot.start)}</p>
            <p className="text-secondary-600">
              {formatTime(selectedSlot.start)} - {formatTime(selectedSlot.end)}
            </p>
          </div>
          
          <button
            onClick={handleBookSlot}
            disabled={bookingStatus.status === 'loading'}
            className="w-full btn-primary py-3"
          >
            {bookingStatus.status === 'loading' ? (
              <span className="inline-flex items-center">
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
          
          {bookingStatus.status === 'error' && (
            <p className="mt-4 text-red-600 text-sm text-center">
              {bookingStatus.message}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BookingCalendar;
