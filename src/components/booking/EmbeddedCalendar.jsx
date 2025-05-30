import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EmbeddedCalendar = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the message is from Google Calendar
      if (event.origin.includes('calendar.google.com')) {
        try {
          // Google Calendar doesn't send structured messages we can reliably parse
          // Instead, we'll check if the iframe URL has changed to a confirmation page
          const iframe = iframeRef.current;
          if (iframe && iframe.contentWindow) {
            // Use a timeout to allow the iframe to fully update after a booking
            setTimeout(() => {
              try {
                // Try to detect confirmation based on iframe content changes
                // This is a best-effort approach as we can't directly access iframe content due to CORS
                const iframeUrl = iframe.contentWindow.location.href;
                if (iframeUrl.includes('appointment-confirmed') || 
                    iframeUrl.includes('confirmation') || 
                    iframeUrl.includes('success')) {
                  navigate('/booking-confirmation');
                }
              } catch (error) {
                // CORS might prevent accessing contentWindow.location
                console.log('Could not check iframe URL due to CORS policy');
              }
            }, 1500);
          }
        } catch (error) {
          console.error('Error processing message from Google Calendar:', error);
        }
      }
    };

    // Listen for messages from the iframe
    window.addEventListener('message', handleMessage);
    
    // Set up a MutationObserver to watch for changes in the iframe
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
          const newSrc = iframeRef.current.getAttribute('src');
          if (newSrc.includes('appointment-confirmed') || 
              newSrc.includes('confirmation') || 
              newSrc.includes('success')) {
            navigate('/booking-confirmation');
          }
        }
      }
    });
    
    if (iframeRef.current) {
      observer.observe(iframeRef.current, { attributes: true });
    }

    return () => {
      window.removeEventListener('message', handleMessage);
      observer.disconnect();
    };
  }, [navigate]);

  return (
    <div className="embedded-calendar-container">
      <iframe 
        ref={iframeRef}
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dDhVTC6nmAqTpQ744WdiVX5HYpBpJuieMFd2Bsk7-iFlARlw8EuBzT7ulHmXKp3ja2DPIdPsS?gv=true" 
        style={{ border: 0 }} 
        width="100%" 
        height="600" 
        frameBorder="0"
        title="Google Calendar Appointment Scheduling"
        className="rounded-lg shadow-elegant-lg"
      ></iframe>
    </div>
  );
};

export default EmbeddedCalendar;
