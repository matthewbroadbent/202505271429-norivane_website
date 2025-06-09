import { Link } from 'react-router-dom';
import BookingButton from './BookingButton';

const CTASection = ({ title, subtitle, buttonText = 'Book a Consultation', buttonLink = '/booking' }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">{title}</h2>
          <p className="text-xl text-primary-50 mb-8">{subtitle}</p>
          
          <Link to={buttonLink} className="btn-white">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
