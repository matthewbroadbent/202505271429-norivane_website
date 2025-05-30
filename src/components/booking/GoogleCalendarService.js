// Google Calendar Service implementation
import { calendarConfig } from '../../utils/calendarConfig';

class GoogleCalendarService {
  constructor() {
    this.isInitialized = false;
    this.isSignedIn = false;
    this.gapi = null;
    this.tokenClient = null;
    this.calendarId = calendarConfig.calendarId;
  }

  async init() {
    try {
      console.log('Initializing Google Calendar service');
      await this.loadGoogleAPI();
      this.isInitialized = true;
      return true;
    } catch (error) {
      console.error('Error initializing Google Calendar service:', error);
      throw error;
    }
  }

  async loadGoogleAPI() {
    return new Promise((resolve, reject) => {
      // For development/preview, use mock implementation
      if (process.env.NODE_ENV === 'development' || !calendarConfig.apiKey) {
        console.log('Using mock Google Calendar service for development');
        this.isSignedIn = true;
        resolve();
        return;
      }

      // Load the Google API client library
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        window.gapi.load('client', async () => {
          try {
            await window.gapi.client.init({
              apiKey: calendarConfig.apiKey,
              discoveryDocs: calendarConfig.discoveryDocs,
            });
            this.gapi = window.gapi;
            
            // Load the Google Identity Services library
            const scriptGIS = document.createElement('script');
            scriptGIS.src = 'https://accounts.google.com/gsi/client';
            scriptGIS.onload = () => {
              this.tokenClient = window.google.accounts.oauth2.initTokenClient({
                client_id: calendarConfig.clientId,
                scope: calendarConfig.scope,
                callback: '', // Will be set later
              });
              resolve();
            };
            scriptGIS.onerror = (error) => reject(error);
            document.body.appendChild(scriptGIS);
          } catch (error) {
            reject(error);
          }
        });
      };
      script.onerror = (error) => reject(error);
      document.body.appendChild(script);
    });
  }

  updateSignInStatus(isSignedIn) {
    this.isSignedIn = isSignedIn;
  }

  setSignInChangeCallback(callback) {
    if (this.gapi) {
      this.gapi.auth2.getAuthInstance().isSignedIn.listen(callback);
    }
  }

  async signIn() {
    // For development/preview, use mock implementation
    if (process.env.NODE_ENV === 'development' || !this.tokenClient) {
      console.log('Mock sign-in successful');
      this.isSignedIn = true;
      return { getName: () => 'Mock User' };
    }

    return new Promise((resolve, reject) => {
      try {
        this.tokenClient.callback = async (resp) => {
          if (resp.error) {
            reject(resp);
            return;
          }
          this.isSignedIn = true;
          resolve({ getName: () => 'Authenticated User' });
        };
        this.tokenClient.requestAccessToken({ prompt: 'consent' });
      } catch (error) {
        console.error('Error during sign in:', error);
        reject(error);
      }
    });
  }

  async signOut() {
    // For development/preview, use mock implementation
    if (process.env.NODE_ENV === 'development' || !this.gapi) {
      console.log('Mock sign-out');
      this.isSignedIn = false;
      return Promise.resolve();
    }

    const token = this.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      this.gapi.client.setToken('');
      this.isSignedIn = false;
    }
    return Promise.resolve();
  }

  async getAvailableSlots(startDate, endDate) {
    console.log('Getting available slots', { startDate, endDate });
    
    // For development/preview, use mock implementation
    if (process.env.NODE_ENV === 'development' || !this.gapi) {
      return this.getMockAvailableSlots(startDate, endDate);
    }

    try {
      // Get busy times from calendar
      const response = await this.gapi.client.calendar.freebusy.query({
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        items: [{ id: this.calendarId }]
      });

      const busyTimes = response.result.calendars[this.calendarId].busy;
      
      // Generate all possible slots
      const allSlots = this.generateTimeSlots(startDate, endDate);
      
      // Filter out busy slots
      const availableSlots = this.filterAvailableSlots(allSlots, busyTimes);
      
      return availableSlots;
    } catch (error) {
      console.error('Error fetching calendar availability:', error);
      throw error;
    }
  }

  generateTimeSlots(startDate, endDate) {
    const slots = [];
    const currentDate = new Date(startDate);
    currentDate.setHours(9, 0, 0, 0); // Start at 9 AM
    
    while (currentDate < endDate) {
      // Skip weekends
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        const dayEnd = new Date(currentDate);
        dayEnd.setHours(18, 0, 0, 0); // End at 6 PM
        
        let slotStart = new Date(currentDate);
        
        // Generate slots for the day
        while (slotStart < dayEnd) {
          const slotEnd = new Date(slotStart);
          slotEnd.setMinutes(slotEnd.getMinutes() + 30); // 30-minute slots
          
          if (slotEnd <= dayEnd) {
            slots.push({
              start: new Date(slotStart),
              end: new Date(slotEnd)
            });
          }
          
          slotStart = new Date(slotEnd);
        }
      }
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
      currentDate.setHours(9, 0, 0, 0);
    }
    
    return slots;
  }

  filterAvailableSlots(allSlots, busyTimes) {
    if (!busyTimes || busyTimes.length === 0) {
      return allSlots;
    }
    
    return allSlots.filter(slot => {
      // Check if slot overlaps with any busy time
      for (const busyTime of busyTimes) {
        const busyStart = new Date(busyTime.start);
        const busyEnd = new Date(busyTime.end);
        
        // Check for overlap
        if (
          (slot.start >= busyStart && slot.start < busyEnd) || // Slot starts during busy time
          (slot.end > busyStart && slot.end <= busyEnd) || // Slot ends during busy time
          (slot.start <= busyStart && slot.end >= busyEnd) // Slot contains busy time
        ) {
          return false;
        }
      }
      
      return true;
    });
  }

  getMockAvailableSlots(startDate, endDate) {
    console.log('Getting mock available slots', { startDate, endDate });
    
    // Generate mock slots for the given date range
    const slots = [];
    const currentDate = new Date(startDate);
    
    // Limit to 4 working days from now
    const maxDate = this.getMaxAvailabilityDate();
    
    while (currentDate <= endDate && currentDate <= maxDate) {
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        const dayStart = new Date(currentDate);
        dayStart.setHours(9, 0, 0, 0); // Start at 9 AM
        
        const dayEnd = new Date(currentDate);
        dayEnd.setHours(18, 0, 0, 0); // End at 6 PM
        
        let slotTime = new Date(dayStart);
        
        // Generate slots from 9 AM to 5:30 PM with 30-minute intervals
        while (slotTime < dayEnd) {
          const slotStart = new Date(slotTime);
          const slotEnd = new Date(slotTime);
          slotEnd.setMinutes(slotEnd.getMinutes() + 30);
          
          // Add some randomness to mock busy slots (about 30% of slots will be busy)
          if (Math.random() > 0.3) {
            slots.push({
              start: slotStart,
              end: slotEnd
            });
          }
          
          // Move to next slot (30 minutes later)
          slotTime.setMinutes(slotTime.getMinutes() + 30);
        }
      }
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return slots;
  }

  // Get the maximum date for availability (4 working days from now)
  getMaxAvailabilityDate() {
    const now = new Date();
    const maxDate = new Date(now);
    
    let workingDaysCount = 0;
    while (workingDaysCount < 4) {
      maxDate.setDate(maxDate.getDate() + 1);
      
      // Count only weekdays (Monday to Friday)
      if (maxDate.getDay() !== 0 && maxDate.getDay() !== 6) {
        workingDaysCount++;
      }
    }
    
    // Set to end of day
    maxDate.setHours(23, 59, 59, 999);
    
    return maxDate;
  }

  async createBooking(startTime, endTime, customerDetails) {
    console.log('Creating booking', { startTime, endTime, customerDetails });
    
    // For development/preview, use mock implementation
    if (process.env.NODE_ENV === 'development' || !this.gapi) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        id: 'mock-booking-id-' + Date.now(),
        status: 'confirmed',
        created: new Date().toISOString()
      };
    }

    try {
      // Add buffer times
      const bufferStart = new Date(startTime);
      bufferStart.setMinutes(bufferStart.getMinutes() - 15); // 15-minute buffer before
      
      const bufferEnd = new Date(endTime);
      bufferEnd.setMinutes(bufferEnd.getMinutes() + 30); // 30-minute buffer after
      
      // Create event
      const event = {
        summary: 'Consultation with ' + customerDetails.name,
        description: `Business Exit Strategy Consultation\n\nClient: ${customerDetails.name}\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\n\nNotes: ${customerDetails.message || 'No additional notes'}`,
        start: {
          dateTime: bufferStart.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        end: {
          dateTime: bufferEnd.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        attendees: [
          { email: customerDetails.email, displayName: customerDetails.name }
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 }, // 1 day before
            { method: 'popup', minutes: 30 } // 30 minutes before
          ]
        }
      };
      
      const response = await this.gapi.client.calendar.events.insert({
        calendarId: this.calendarId,
        resource: event,
        sendUpdates: 'all'
      });
      
      return {
        id: response.result.id,
        status: response.result.status,
        created: response.result.created
      };
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }
}

export default new GoogleCalendarService();
