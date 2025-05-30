import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Logo = ({ variant = 'dark' }) => {
  const [logoUrls, setLogoUrls] = useState({
    light: '',
    dark: ''
  })
  const [logoError, setLogoError] = useState({
    light: false,
    dark: false
  })
  const [isLoading, setIsLoading] = useState({
    light: true,
    dark: true
  })
  
  // Load logos from localStorage on component mount
  useEffect(() => {
    const savedLightLogo = localStorage.getItem('norivaneLightLogoUrl')
    const savedDarkLogo = localStorage.getItem('norivaneDarkLogoUrl')
    
    // Reset error states when URLs change
    setLogoError({
      light: false,
      dark: false
    })
    
    setIsLoading({
      light: !!savedLightLogo,
      dark: !!savedDarkLogo
    })
    
    setLogoUrls({
      light: savedLightLogo || '',
      dark: savedDarkLogo || ''
    })
  }, [])
  
  // Determine which logo to show based on variant
  const logoToShow = variant === 'light' ? logoUrls.light : logoUrls.dark
  const hasError = variant === 'light' ? logoError.light : logoError.dark
  const isLoadingCurrent = variant === 'light' ? isLoading.light : isLoading.dark
  
  const handleImageError = (e, type) => {
    console.error(`Logo failed to load (${type}):`, e.target.src)
    setLogoError(prev => ({
      ...prev,
      [type]: true
    }))
    setIsLoading(prev => ({
      ...prev,
      [type]: false
    }))
  }
  
  const handleImageLoad = (type) => {
    setIsLoading(prev => ({
      ...prev,
      [type]: false
    }))
  }
  
  return (
    <Link to="/" className="flex items-center">
      {logoToShow && !hasError ? (
        <img 
          src={logoToShow} 
          alt="Norivane Logo" 
          className="h-10 w-auto"
          onError={(e) => handleImageError(e, variant)}
          onLoad={() => handleImageLoad(variant)}
          crossOrigin="anonymous" // Add CORS attribute
        />
      ) : (
        <span className={`text-2xl font-sans font-medium ${variant === 'light' ? 'text-white' : 'text-primary-500'}`}>
          Norivane
        </span>
      )}
    </Link>
  )
}

// Export the component and update functions
export default Logo

export const updateLogoUrl = (lightUrl, darkUrl) => {
  // Clear previous logo URLs first
  localStorage.removeItem('norivaneLightLogoUrl')
  localStorage.removeItem('norivaneDarkLogoUrl')
  
  // Small delay to ensure clearing happens first
  setTimeout(() => {
    if (lightUrl) localStorage.setItem('norivaneLightLogoUrl', lightUrl)
    if (darkUrl) localStorage.setItem('norivaneDarkLogoUrl', darkUrl)
    
    // Force a refresh to show the new logo
    window.location.reload()
  }, 100)
}
