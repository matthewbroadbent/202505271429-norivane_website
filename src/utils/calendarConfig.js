// Google Calendar API configuration
export const calendarConfig = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY || '',
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  calendarId: import.meta.env.VITE_CALENDAR_ID || 'primary',
};

// Booking constraints
export const bookingConstraints = {
  slotDuration: 30, // minutes
  bufferBefore: 15, // minutes
  bufferAfter: 30, // minutes
  minAdvanceTime: 3, // hours
  maxAdvanceDays: 4, // maximum working days in advance
  workingHours: {
    start: 9, // 9 AM
    end: 18, // 6 PM
  },
  workingDays: [1, 2, 3, 4, 5], // Monday to Friday (0 = Sunday, 1 = Monday, etc.)
};

// Helper functions
export const isWithinWorkingHours = (date) => {
  const hours = date.getHours();
  const day = date.getDay();
  
  return (
    bookingConstraints.workingDays.includes(day) &&
    hours >= bookingConstraints.workingHours.start &&
    hours < bookingConstraints.workingHours.end
  );
};

export const isValidBookingTime = (date) => {
  const now = new Date();
  const minAdvanceTimeMs = bookingConstraints.minAdvanceTime * 60 * 60 * 1000;
  
  // Check if booking is at least minAdvanceTime hours in the future
  return date.getTime() - now.getTime() >= minAdvanceTimeMs;
};

export const addBufferToEvent = (startTime, endTime) => {
  const bufferBeforeMs = bookingConstraints.bufferBefore * 60 * 1000;
  const bufferAfterMs = bookingConstraints.bufferAfter * 60 * 1000;
  
  const adjustedStartTime = new Date(startTime.getTime() - bufferBeforeMs);
  const adjustedEndTime = new Date(endTime.getTime() + bufferAfterMs);
  
  return {
    adjustedStartTime,
    adjustedEndTime,
  };
};

export const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatDate = (date) => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

// Calculate the maximum date for availability (4 working days from now)
export const getMaxAvailabilityDate = () => {
  const now = new Date();
  const maxDate = new Date(now);
  
  let workingDaysCount = 0;
  while (workingDaysCount < bookingConstraints.maxAdvanceDays) {
    maxDate.setDate(maxDate.getDate() + 1);
    
    // Count only weekdays (Monday to Friday)
    if (maxDate.getDay() !== 0 && maxDate.getDay() !== 6) {
      workingDaysCount++;
    }
  }
  
  // Set to end of day
  maxDate.setHours(23, 59, 59, 999);
  
  return maxDate;
};
