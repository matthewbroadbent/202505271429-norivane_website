import axios from 'axios';
import { addMinutes, addHours, format, isAfter, isBefore, isWeekend, setHours, setMinutes } from 'date-fns';

// Constants for booking constraints
const SLOT_DURATION = 30; // minutes
const BUFFER_BEFORE = 15; // minutes
const BUFFER_AFTER = 30; // minutes
const MIN_ADVANCE_BOOKING = 3; // hours
const BUSINESS_HOURS_START = 9; // 9 AM
const BUSINESS_HOURS_END = 18; // 6 PM

// Google API configuration
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || '';
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '35768330791-auratvupj2964objclvjgcbqr4324e49.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar";

// Initialize the Google API client
export const initGoogleCalendarApi = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        }).then(() => {
          resolve(window.gapi);
        }).catch(error => {
          reject(error);
        });
      });
    };
    script.onerror = (error) => reject(error);
    document.body.appendChild(script);
  });
};

// Check if user is signed in
export const isSignedIn = () => {
  if (!window.gapi || !window.gapi.auth2) return false;
  return window.gapi.auth2.getAuthInstance().isSignedIn.get();
};

// Sign in the user
export const signIn = async () => {
  if (!window.gapi || !window.gapi.auth2) {
    throw new Error('Google API not initialized');
  }
  return window.gapi.auth2.getAuthInstance().signIn();
};

// Sign out the user
export const signOut = async () => {
  if (!window.gapi || !window.gapi.auth2) {
    throw new Error('Google API not initialized');
  }
  return window.gapi.auth2.getAuthInstance().signOut();
};

// Get available time slots for a given date
export const getAvailableTimeSlots = async (date) => {
  // For development/testing, return mock data if not signed in
  if (!window.gapi || !window.gapi.auth2 || !isSignedIn()) {
    console.log('Using mock data for time slots');
    return getMockTimeSlots(date);
  }

  // Check if date is a weekend
  if (isWeekend(date)) {
    return [];
  }

  // Set time boundaries for the selected date
  const startOfDay = setHours(setMinutes(date, 0), BUSINESS_HOURS_START);
  const endOfDay = setHours(setMinutes(date, 0), BUSINESS_HOURS_END);
  
  try {
    // Get events from Google Calendar
    const response = await window.gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': startOfDay.toISOString(),
      'timeMax': endOfDay.toISOString(),
      'singleEvents': true,
      'orderBy': 'startTime'
    });

    const events = response.result.items;
    
    // Generate all possible 30-minute slots during business hours
    const allSlots = [];
    let currentSlot = startOfDay;
    
    while (isBefore(currentSlot, endOfDay)) {
      // Total appointment time including buffers
      const appointmentEndTime = addMinutes(addMinutes(currentSlot, SLOT_DURATION), BUFFER_AFTER);
      
      // Check if slot ends before business hours end
      if (isBefore(appointmentEndTime, endOfDay)) {
        allSlots.push({
          start: new Date(currentSlot),
          end: addMinutes(currentSlot, SLOT_DURATION)
        });
      }
      
      // Move to next slot
      currentSlot = addMinutes(currentSlot, SLOT_DURATION);
    }
    
    // Filter out slots that conflict with existing events
    const availableSlots = allSlots.filter(slot => {
      // Add buffer before and after the slot
      const slotWithBufferBefore = addMinutes(slot.start, -BUFFER_BEFORE);
      const slotWithBufferAfter = addMinutes(slot.end, BUFFER_AFTER);
      
      // Check if slot conflicts with any existing event
      const hasConflict = events.some(event => {
        const eventStart = new Date(event.start.dateTime || event.start.date);
        const eventEnd = new Date(event.end.dateTime || event.end.date);
        
        return (
          (isAfter(slotWithBufferBefore, eventStart) && isBefore(slotWithBufferBefore, eventEnd)) ||
          (isAfter(slotWithBufferAfter, eventStart) && isBefore(slotWithBufferAfter, eventEnd)) ||
          (isBefore(slotWithBufferBefore, eventStart) && isAfter(slotWithBufferAfter, eventEnd))
        );
      });
      
      return !hasConflict;
    });
    
    // Filter out slots that are within the minimum advance booking time
    const now = new Date();
    const minBookingTime = addHours(now, MIN_ADVANCE_BOOKING);
    
    return availableSlots.filter(slot => isAfter(slot.start, minBookingTime));
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    // Fall back to mock data if there's an error
    return getMockTimeSlots(date);
  }
};

// Generate mock time slots for development/testing
const getMockTimeSlots = (date) => {
  // Check if date is a weekend
  if (isWeekend(date)) {
    return [];
  }

  const today = new Date();
  const isToday = date.getDate() === today.getDate() && 
                  date.getMonth() === today.getMonth() && 
                  date.getFullYear() === today.getFullYear();
  
  // Set time boundaries for the selected date
  const startOfDay = setHours(setMinutes(date, 0), BUSINESS_HOURS_START);
  const endOfDay = setHours(setMinutes(date, 0), BUSINESS_HOURS_END);
  
  // Generate all possible 30-minute slots during business hours
  const allSlots = [];
  let currentSlot = startOfDay;
  
  while (isBefore(currentSlot, endOfDay)) {
    allSlots.push({
      start: new Date(currentSlot),
      end: addMinutes(currentSlot, SLOT_DURATION)
    });
    
    // Move to next slot
    currentSlot = addMinutes(currentSlot, SLOT_DURATION);
  }
  
  // If it's today, filter out slots that are within the minimum advance booking time
  if (isToday) {
    const minBookingTime = addHours(today, MIN_ADVANCE_BOOKING);
    return allSlots.filter(slot => isAfter(slot.start, minBookingTime));
  }
  
  // For future dates, randomly remove some slots to simulate a realistic calendar
  return allSlots.filter(() => Math.random() > 0.3); // Remove ~30% of slots randomly
};

// Create a booking in the calendar
export const createBooking = async (startTime, endTime, customerDetails) => {
  // For development/testing, just log the booking details if not signed in
  if (!window.gapi || !window.gapi.auth2 || !isSignedIn()) {
    console.log('Mock booking created:', {
      time: `${format(startTime, 'yyyy-MM-dd HH:mm')} - ${format(endTime, 'HH:mm')}`,
      customer: customerDetails
    });
    return { id: 'mock-booking-id-' + Date.now() };
  }
  
  // Calculate the actual event times including buffers
  const eventStart = addMinutes(startTime, -BUFFER_BEFORE);
  const eventEnd = addMinutes(endTime, BUFFER_AFTER);
  
  // Create the event
  const event = {
    summary: `Consultation with ${customerDetails.name}`,
    description: `
      Contact: ${customerDetails.email} | ${customerDetails.phone}
      Company: ${customerDetails.company}
      Revenue: ${customerDetails.revenue}
      Message: ${customerDetails.message}
    `,
    start: {
      dateTime: eventStart.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    end: {
      dateTime: eventEnd.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    attendees: [
      { email: customerDetails.email, displayName: customerDetails.name }
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 30 }
      ]
    }
  };
  
  try {
    const response = await window.gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all'
    });
    
    return response.result;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Format time slot for display
export const formatTimeSlot = (slot) => {
  return {
    id: slot.start.toISOString(),
    startTime: format(slot.start, 'h:mm a'),
    endTime: format(slot.end, 'h:mm a'),
    startDate: slot.start,
    endDate: slot.end
  };
};
