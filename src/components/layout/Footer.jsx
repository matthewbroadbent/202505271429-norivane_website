import { Link, useNavigate } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiMail, FiPhone } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Process', href: '/process' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Exit Strategy Planning', href: '/services#exit-strategy' },
      { name: 'Business Valuation', href: '/services#valuation' },
      { name: 'Buyer Identification', href: '/services#buyers' },
      { name: 'Negotiation Support', href: '/services#negotiation' },
      { name: 'Post-Sale Transition', href: '/services#transition' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
    social: [
      { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
      { name: 'Twitter', icon: FiTwitter, href: '#' },
      { name: 'Email', icon: FiMail, href: 'mailto:contact@norivane.com' },
      { name: 'Phone', icon: FiPhone, href: 'tel:+441234567890' },
    ],
  }
  
  const handleBookConsultation = () => {
    navigate('/booking')
  }
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-secondary-300 text-sm max-w-xs">
              Expert coaching for CEOs looking to sell their businesses valued between £1M-£20M. Strategic guidance for maximum value realization.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary-300 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary-300 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-secondary-300">
              <li>
                <a href="mailto:contact@norivane.com" className="hover:text-white transition-colors duration-200">
                  contact@norivane.com
                </a>
              </li>
              <li>
                <a href="tel:+441234567890" className="hover:text-white transition-colors duration-200">
                  +44 (0) 123 456 7890
                </a>
              </li>
              <li>123 Business Street</li>
              <li>London, UK</li>
            </ul>
            <button 
              onClick={handleBookConsultation}
              className="btn-accent mt-6"
            >
              Book a Consultation
            </button>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Norivane. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-secondary-400">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
