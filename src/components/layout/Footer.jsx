import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-secondary-300">
              Expert guidance for CEOs and business owners looking to maximize their exit value.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Exit Strategy Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Business Valuation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Buyer Identification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Negotiation Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Post-Sale Planning
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-secondary-300">
              <p>123 Business Street</p>
              <p>London, UK</p>
              <p className="mt-3">
                <a href="tel:+441234567890" className="hover:text-white transition-colors duration-200">
                  +44 (0) 123 456 7890
                </a>
              </p>
              <p>
                <a href="mailto:contact@norivane.com" className="hover:text-white transition-colors duration-200">
                  contact@norivane.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-secondary-700 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Norivane. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-secondary-400 text-sm hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-400 text-sm hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-secondary-400 text-sm hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
