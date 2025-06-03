// Google Calendar Service implementation
import { calendarConfig } from '../../utils/calendarConfig';

class GoogleCalendarService {
  constructor() {
    this.isInitialized = false;
    this.isSignedIn = false;
    this.gapi = null;
    this.tokenClient = null;
    this.calendarId = calendarConfig.calendarId;
    this.scriptLoadAttempts = 0;
    this.maxScriptLoadAttempts = 5; // Increased from 3 to 5
    this.retryDelays = [1000, 2000, 4000, 8000, 16000]; // Exponential backoff
  }

  async init() {
    try {
      console.log('Initializing Google Calendar service');
      
      // For Vercel deployment, check if we're in a browser environment
      if (typeof window === 'undefined') {
        console.log('Not in browser environment, using mock implementation');
        this.isSignedIn = true;
        this.isInitialized = true;
        return true;
      }
      
      // Check if we're in development mode and should use mock data
      if (process.env.NODE_ENV === 'development' || !calendarConfig.apiKey || !calendarConfig.clientId) {
        console.log('Using mock Google Calendar service for development');
        this.isSignedIn = true;
        this.isInitialized = true;
        return true;
      }
      
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
      // Check if scripts are already loaded
      if (window.gapi && window.google && window.google.accounts) {
        console.log('Google API scripts already loaded');
        this.setupGoogleClient();
        resolve();
        return;
      }

      this.scriptLoadAttempts++;
      const attemptNumber = this.scriptLoadAttempts;
      const delayTime = this.retryDelays[attemptNumber - 1] || 1000;
      
      console.log(`Loading Google API scripts (attempt ${attemptNumber}/${this.maxScriptLoadAttempts})`);
      
      // Load the Google API client library with retry mechanism
      const loadGapiScript = () => {
        // Create a script element for the Google API
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.async = true;
        script.defer = true;
        script.id = 'google-api-script';
        
        // Set a timeout for script loading
        const scriptTimeout = setTimeout(() => {
          console.error(`Script loading timed out after ${delayTime * 2}ms`);
          script.onerror(new Error('Script loading timed out'));
        }, delayTime * 2);
        
        script.onload = () => {
          clearTimeout(scriptTimeout);
          console.log('Google API script loaded successfully');
          
          // Set a timeout for GAPI client initialization
          const gapiTimeout = setTimeout(() => {
            console.error(`GAPI client initialization timed out after ${delayTime * 2}ms`);
            this.retryScriptLoad(reject, loadGapiScript);
          }, delayTime * 2);
          
          window.gapi.load('client', async () => {
            try {
              clearTimeout(gapiTimeout);
              console.log('Initializing Google API client with API key');
              
              await window.gapi.client.init({
                apiKey: calendarConfig.apiKey,
                discoveryDocs: calendarConfig.discoveryDocs,
              });
              
              console.log('Google API client initialized successfully');
              this.gapi = window.gapi;
              
              // Load the Google Identity Services library
              this.loadGisScript(resolve, reject);
            } catch (error) {
              clearTimeout(gapiTimeout);
              console.error('Error initializing Google API client:', error);
              this.retryScriptLoad(reject, loadGapiScript);
            }
          });
        };
        
        script.onerror = (error) => {
          clearTimeout(scriptTimeout);
          console.error('Error loading Google API script:', error);
          this.retryScriptLoad(reject, loadGapiScript);
        };
        
        // Remove any existing script to avoid duplicates
        const existingScript = document.getElementById('google-api-script');
        if (existingScript) {
          existingScript.remove();
        }
        
        document.body.appendChild(script);
      };
      
      // Start loading after a delay (for the first attempt, this will be minimal)
      setTimeout(loadGapiScript, delayTime / 2);
    });
  }
  
  retryScriptLoad(reject, loadFunction) {
    if (this.scriptLoadAttempts < this.maxScriptLoadAttempts) {
      const nextAttempt = this.scriptLoadAttempts + 1;
      const delayTime = this.retryDelays[nextAttempt - 1] || 1000;
      
      console.log(`Retrying Google API script load in ${delayTime}ms (attempt ${nextAttempt}/${this.maxScriptLoadAttempts})`);
      this.scriptLoadAttempts++;
      
      setTimeout(loadFunction, delayTime);
    } else {
      console.error(`Failed to load Google API scripts after ${this.maxScriptLoadAttempts} attempts`);
      reject(new Error(`Failed to load Google API scripts after ${this.maxScriptLoadAttempts} attempts`));
    }
  }
  
  loadGisScript(resolve, reject) {
    const scriptGIS = document.createElement('script');
    scriptGIS.src = 'https://accounts.google.com/gsi/client';
    scriptGIS.async = true;
    scriptGIS.defer = true;
    scriptGIS.id = 'google-identity-script';
    
    // Set a timeout for GIS script loading
    const gisTimeout = setTimeout(() => {
      console.error('GIS script loading timed out');
      scriptGIS.onerror(new Error('GIS script loading timed out'));
    }, 10000); // 10 second timeout
    
    scriptGIS.onload = () => {
      clearTimeout(gisTimeout);
      console.log('Google Identity Services script loaded successfully');
      
      try {
        // Check if the Google Identity Services API is available
        if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
          throw new Error('Google Identity Services not available after script load');
        }
        
        this.tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: calendarConfig.clientId,
          scope: calendarConfig.scope,
          callback: '', // Will be set later
        });
        
        console.log('Token client initialized successfully');
        resolve();
      } catch (error) {
        console.error('Error initializing token client:', error);
        reject(error);
      }
    };
    
    scriptGIS.onerror = (error) => {
      clearTimeout(gisTimeout);
      console.error('Error loading Google Identity Services:', error);
      reject(error);
    };
    
    // Remove any existing script to avoid duplicates
    const existingScript = document.getElementById('google-identity-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.body.appendChild(scriptGIS);
  }
  
  setupGoogleClient() {
    if (window.gapi) {
      this.gapi = window.gapi;
    }
    
    if (window.google && window.google.accounts) {
      try {
        this.tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: calendarConfig.clientId,
          scope: calendarConfig.scope,
          callback: '', // Will be set later
        });
      } catch (error) {
        console.error('Error initializing token client:', error);
      }
    }
  }

  updateSignInStatus(isSignedIn) {
    this.isSignedIn = isSignedIn;
  }

  setSignInChangeCallback(callback) {
    if (this.gapi && this.gapi.auth2 && this.gapi.auth2.getAuthInstance()) {
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
        console.log('Requesting access token...');
        this.tokenClient.callback = async (resp) => {
          if (resp.error) {
            console.error('Error during token request:', resp.error);
            reject(resp);
            return;
          }
          console.log('Access token received successfully');
          this.isSignedIn = true;
          resolve({ getName: () => 'Authenticated User' });
        };
        
        // Use a less intrusive prompt for production
        const promptMode = process.env.NODE_ENV === 'production' ? 'select_account' : 'consent';
        this.tokenClient.requestAccessToken({ prompt: promptMode });
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

    try {
      const token = this.gapi.client.getToken();
      if (token !== null) {
        window.google.accounts.oauth2.revoke(token.access_token);
        this.gapi.client.setToken('');
        this.isSignedIn = false;
      }
      return Promise.resolve();
    } catch (error) {
      console.error('Error during sign out:', error);
      return Promise.resolve();
    }
  }

  async getAvailableSlots(startDate, endDate) {
    console.log('Getting available slots', { startDate, endDate });
    
    // For development/preview, use mock implementation
    if (process.env.NODE_ENV === 'development' || !this.gapi) {
      return this.getMockAvailableSlots(startDate, endDate);
    }

    try {
      // Ensure we're authenticated
      if (!this.isSignedIn) {
        console.log('Not signed in, attempting to sign in...');
        await this.signIn();
      }

      console.log('Querying freebusy API...');
      // Get busy times from calendar
      const response = await this.gapi.client.calendar.freebusy.query({
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        items: [{ id: this.calendarId }]
      });

      console.log('Freebusy API response received');
      const busyTimes = response.result.calendars[this.calendarId].busy;
      console.log('Busy times from API:', busyTimes);
      
      // Generate all possible slots
      const allSlots = this.generateTimeSlots(startDate, endDate);
      console.log('Generated all possible slots:', allSlots.length);
      
      // Filter out busy slots
      const availableSlots = this.filterAvailableSlots(allSlots, busyTimes);
      console.log('Available slots after filtering:', availableSlots.length);
      
      return availableSlots;
    } catch (error) {
      console.error('Error fetching calendar availability:', error);
      
      // If the error is related to authentication, try to re-authenticate
      if (error.status === 401 || (error.result && error.result.error && error.result.error.code === 401)) {
        console.log('Authentication error, attempting to re-authenticate...');
        try {
          await this.signIn();
          return this.getAvailableSlots(startDate, endDate);
        } catch (authError) {
          console.error('Re-authentication failed:', authError);
          throw authError;
        }
      }
      
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
          
          // Check if this is the specific meeting time mentioned (Monday June 2 at 16:00)
          // Block out 15:30-17:30 to account for the meeting plus buffer time
          const isJune2Meeting = 
            slotStart.getDate() === 2 && 
            slotStart.getMonth() === 5 && // June is month 5 (0-indexed)
            (
              (slotStart.getHours() === 15 && slotStart.getMinutes() === 30) ||
              slotStart.getHours() === 16 ||
              slotStart.getHours() === 17 && slotStart.getMinutes() === 0
            );
            
          // Skip the meeting slots on June 2
          if (!isJune2Meeting) {
            // Add some randomness to mock busy slots (about 30% of slots will be busy)
            if (Math.random() > 0.3) {
              slots.push({
                start: slotStart,
                end: slotEnd
              });
            }
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
      // Ensure we're authenticated
      if (!this.isSignedIn) {
        await this.signIn();
      }

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
