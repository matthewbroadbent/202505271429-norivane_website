import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CalendarButton = () => {
  const buttonContainerRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load the Google Calendar CSS
    const linkElement = document.createElement('link');
    linkElement.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);
    
    // Load the Google Calendar script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    scriptElement.async = true;
    document.body.appendChild(scriptElement);
    
    // Initialize the button when the script is loaded
    scriptElement.onload = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        // Create a custom callback to handle booking confirmation
        const handleBookingComplete = () => {
          navigate('/booking-confirmation');
        };
        
        // Store the original open function to modify it
        const originalOpen = window.calendar.schedulingButton.open;
        
        // Override the open function to add our event listener
        window.calendar.schedulingButton.open = function(...args) {
          const result = originalOpen.apply(this, args);
          
          // Try to detect when booking is complete
          // This is challenging because Google doesn't provide direct callbacks
          // We'll use a combination of approaches
          
          // 1. Listen for messages from the popup
          const messageHandler = (event) => {
            if (event.origin.includes('calendar.google.com')) {
              // Check if the message indicates completion
              if (event.data && 
                 (typeof event.data === 'string' && 
                  (event.data.includes('appointment-confirmed') || 
                   event.data.includes('confirmation') || 
                   event.data.includes('success')))) {
                window.removeEventListener('message', messageHandler);
                handleBookingComplete();
              }
            }
          };
          window.addEventListener('message', messageHandler);
          
          // 2. Check for popup closure, which might indicate completion
          const popupWindow = window.calendar.schedulingButton._popupWindow;
          if (popupWindow) {
            const checkClosed = setInterval(() => {
              if (popupWindow.closed) {
                clearInterval(checkClosed);
                // This is imperfect as closure doesn't guarantee completion
                // We'll add a small delay to allow any redirect to happen first
                setTimeout(() => {
                  // Check localStorage for any confirmation flag we might have set
                  if (localStorage.getItem('bookingConfirmed') === 'true') {
                    localStorage.removeItem('bookingConfirmed');
                    handleBookingComplete();
                  }
                }, 500);
              }
            }, 500);
          }
          
          return result;
        };
        
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dDhVTC6nmAqTpQ744WdiVX5HYpBpJuieMFd2Bsk7-iFlARlw8EuBzT7ulHmXKp3ja2DPIdPsS?gv=true',
          color: '#00B2A9', // Using the teal color from your brand
          label: 'Book a Consultation',
          target: buttonContainerRef.current,
        });
      }
    };
    
    // Cleanup function
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(scriptElement);
    };
  }, [navigate]);
  
  return (
    <div ref={buttonContainerRef} className="calendar-button-container"></div>
  );
};

export default CalendarButton;
