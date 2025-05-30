import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  const handleBookConsultation = () => {
    navigate('/booking')
  }
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-elegant py-3' : 'bg-primary-500 py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? isScrolled ? 'text-accent-500 font-semibold' : 'text-accent-400 font-semibold'
                    : isScrolled 
                      ? 'text-secondary-700 hover:text-accent-500' 
                      : 'text-white hover:text-accent-100 font-medium'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleBookConsultation}
              className="btn-accent"
            >
              Book a Consultation
            </button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-secondary-800' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
        >
          <div className="container-custom py-5">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'bg-accent-50 text-accent-500 font-semibold'
                      : 'text-secondary-700 hover:bg-secondary-50 hover:text-accent-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={handleBookConsultation}
                className="btn-accent w-full text-center mt-4"
              >
                Book a Consultation
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
