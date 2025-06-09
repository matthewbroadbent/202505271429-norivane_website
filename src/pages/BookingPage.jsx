import { useEffect } from 'react';
import EmbeddedCalendar from '../components/booking/EmbeddedCalendar';
import PageHeader from '../components/ui/PageHeader';

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Book a Consultation | Norivane';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Book a Consultation"
        subtitle="Schedule a time to discuss your business exit strategy"
        bgImage="/images/headers/booking-header.jpg"
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-elegant p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold text-secondary-900 mb-6">
              Select a Time for Your Consultation
            </h2>
            
            <p className="text-secondary-700 mb-8">
              Choose a convenient time from our calendar below. We look forward to discussing how we can help you maximize your business value and prepare for a successful exit.
            </p>
            
            <EmbeddedCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
