import { Link } from 'react-router-dom'

const Logo = ({ variant = 'dark' }) => {
  // Determine text colors based on variant
  const mainColor = variant === 'light' ? '#FFFFFF' : '#0A2342'
  const accentColor = '#00B2A9' // Teal color for the "i" and dot in both modes
  
  return (
    <Link to="/" className="flex items-center">
      {/* Teal dot to the left of the first "n" */}
      <span 
        style={{ 
          color: accentColor, 
          fontSize: '2.5rem', // Enlarged dot (67% larger)
          marginRight: '0.125rem', // Reduced from 0.25rem to 0.125rem (50% closer)
          lineHeight: 0,
          position: 'relative',
          top: '-0.05em'
        }}
      >
        •
      </span>
      
      <span className="text-2xl font-sans font-medium">
        {/* First part: "nor" */}
        <span style={{ color: mainColor }}>nor</span>
        
        {/* Middle part: "i" (italic and teal) */}
        <span style={{ color: accentColor, fontStyle: 'italic' }}>i</span>
        
        {/* Last part: "vane" */}
        <span style={{ color: mainColor }}>vane</span>
      </span>
    </Link>
  )
}

// Add the missing export that's being requested
export const updateLogoUrl = () => {
  // This is a placeholder function since we don't know what it should do
  // It's added to fix the import error
  console.log('Logo URL update function called')
  return null
}

export default Logo
