import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Logo = ({ variant = 'dark' }) => {
  const [logoUrl, setLogoUrl] = useState('')
  
  // This function will be called when you want to update the logo
  const updateLogo = (newLogoUrl) => {
    setLogoUrl(newLogoUrl)
    // Optionally save to localStorage for persistence
    localStorage.setItem('norivaneLogoUrl', newLogoUrl)
  }
  
  // Load logo from localStorage on component mount
  useEffect(() => {
    const savedLogo = localStorage.getItem('norivaneLogoUrl')
    if (savedLogo) {
      setLogoUrl(savedLogo)
    }
  }, [])
  
  return (
    <Link to="/" className="flex items-center">
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt="Norivane Logo" 
          className="h-10 w-auto"
        />
      ) : (
        <span className={`text-2xl font-sans font-medium ${variant === 'light' ? 'text-white' : 'text-primary-500'}`}>
          Norivane
        </span>
      )}
    </Link>
  )
}

// Export both the component and the update function
export default Logo
export const updateLogoUrl = (url) => {
  localStorage.setItem('norivaneLogoUrl', url)
  // Force a refresh to show the new logo
  window.location.reload()
}
