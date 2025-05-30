import { useState, useEffect } from 'react'
import { updateLogoUrl } from '../components/ui/Logo'

const Settings = () => {
  const [logoUrls, setLogoUrls] = useState({
    light: localStorage.getItem('norivaneLightLogoUrl') || '',
    dark: localStorage.getItem('norivaneDarkLogoUrl') || ''
  })
  const [message, setMessage] = useState('')
  const [previewUrls, setPreviewUrls] = useState({
    light: '',
    dark: ''
  })
  const [previewErrors, setPreviewErrors] = useState({
    light: false,
    dark: false
  })
  
  // Update preview URLs when component mounts
  useEffect(() => {
    if (logoUrls.light) {
      setPreviewUrls(prev => ({
        ...prev,
        light: logoUrls.light
      }))
    }
    
    if (logoUrls.dark) {
      setPreviewUrls(prev => ({
        ...prev,
        dark: logoUrls.dark
      }))
    }
  }, [])
  
  const handleUrlChange = (e, variant) => {
    const url = e.target.value.trim()
    
    // Update the input field value
    setLogoUrls(prev => ({
      ...prev,
      [variant]: url
    }))
    
    // Reset error state when URL changes
    setPreviewErrors(prev => ({
      ...prev,
      [variant]: false
    }))
    
    // Update the preview URL
    setPreviewUrls(prev => ({
      ...prev,
      [variant]: url
    }))
    
    // Clear any error messages when URL changes
    setMessage('')
  }
  
  // Helper function to check if URL is a direct image URL
  const isDirectImageUrl = (url) => {
    if (!url) return true; // Empty URLs are fine
    
    // Check if URL ends with an image extension
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
    return imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
  }
  
  // Helper function to check if URL is an imgBB page URL instead of direct image
  const isImgBBPageUrl = (url) => {
    return url.includes('ibb.co/') && !url.includes('i.ibb.co/');
  }
  
  const handleLogoUpdate = (e) => {
    e.preventDefault()
    
    if (!logoUrls.light && !logoUrls.dark) {
      setMessage('Please enter at least one logo URL')
      return
    }
    
    // Check if URLs are direct image URLs
    if (logoUrls.light && !isDirectImageUrl(logoUrls.light)) {
      setMessage('Light logo URL does not appear to be a direct image URL. Please use a URL that ends with .jpg, .png, etc.')
      return
    }
    
    if (logoUrls.dark && !isDirectImageUrl(logoUrls.dark)) {
      setMessage('Dark logo URL does not appear to be a direct image URL. Please use a URL that ends with .jpg, .png, etc.')
      return
    }
    
    // Check if URLs are imgBB page URLs instead of direct image URLs
    if (logoUrls.light && isImgBBPageUrl(logoUrls.light)) {
      setMessage('Light logo URL appears to be an imgBB page URL, not a direct image URL. Please use the "Direct link" from imgBB that starts with https://i.ibb.co/')
      return
    }
    
    if (logoUrls.dark && isImgBBPageUrl(logoUrls.dark)) {
      setMessage('Dark logo URL appears to be an imgBB page URL, not a direct image URL. Please use the "Direct link" from imgBB that starts with https://i.ibb.co/')
      return
    }
    
    // Check if any previews had errors
    if (previewErrors.light && logoUrls.light) {
      setMessage('Light logo preview failed to load. Please check the URL.')
      return
    }
    
    if (previewErrors.dark && logoUrls.dark) {
      setMessage('Dark logo preview failed to load. Please check the URL.')
      return
    }
    
    // Update both logos
    updateLogoUrl(
      logoUrls.light.trim(),
      logoUrls.dark.trim()
    )
    
    setMessage('Logos updated successfully! Refreshing...')
  }
  
  const handleImageError = (variant) => {
    console.error(`Preview image error for ${variant} logo:`, previewUrls[variant])
    setPreviewErrors(prev => ({
      ...prev,
      [variant]: true
    }))
    setMessage(`Error loading ${variant} logo preview. Please check the URL or try a different image.`)
  }
  
  const handleImageLoad = (variant) => {
    setPreviewErrors(prev => ({
      ...prev,
      [variant]: false
    }))
    // Clear error message if it was related to this image
    if (message.includes(`Error loading ${variant} logo`)) {
      setMessage('')
    }
  }
  
  return (
    <div className="container-custom py-24">
      <div className="max-w-2xl mx-auto mt-16">
        <h1 className="text-3xl font-bold text-secondary-800 mb-8">Website Settings</h1>
        
        <div className="bg-white shadow-elegant rounded-lg p-6">
          <h2 className="text-xl font-semibold text-secondary-700 mb-4">Update Logo</h2>
          
          {message && (
            <div className={`p-3 rounded mb-4 ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}
          
          <form onSubmit={handleLogoUpdate}>
            {/* Light Logo (for dark backgrounds) */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-secondary-700 mb-2">Light Logo</h3>
              <p className="text-sm text-secondary-500 mb-2">
                For dark backgrounds (when header is colored)
              </p>
              
              <div className="mb-4">
                <label htmlFor="lightLogoUrl" className="block text-sm font-medium text-secondary-600 mb-1">
                  Light Logo URL
                </label>
                <input
                  type="text"
                  id="lightLogoUrl"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="https://i.ibb.co/your-image-id/image.png"
                  value={logoUrls.light}
                  onChange={(e) => handleUrlChange(e, 'light')}
                />
                {logoUrls.light && isImgBBPageUrl(logoUrls.light) && (
                  <p className="mt-1 text-red-500 text-sm">
                    This appears to be an imgBB page URL, not a direct image URL. Please use the "Direct link" instead.
                  </p>
                )}
              </div>
              
              {previewUrls.light && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-secondary-600 mb-2">Preview:</p>
                  <div className="border border-secondary-200 rounded-md p-4 bg-primary-500">
                    <img 
                      src={previewUrls.light} 
                      alt="Light Logo Preview" 
                      className="h-12 w-auto"
                      onError={() => handleImageError('light')}
                      onLoad={() => handleImageLoad('light')}
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Dark Logo (for light backgrounds) */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-secondary-700 mb-2">Dark Logo</h3>
              <p className="text-sm text-secondary-500 mb-2">
                For light backgrounds (when header is white)
              </p>
              
              <div className="mb-4">
                <label htmlFor="darkLogoUrl" className="block text-sm font-medium text-secondary-600 mb-1">
                  Dark Logo URL
                </label>
                <input
                  type="text"
                  id="darkLogoUrl"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="https://i.ibb.co/your-image-id/image.png"
                  value={logoUrls.dark}
                  onChange={(e) => handleUrlChange(e, 'dark')}
                />
                {logoUrls.dark && isImgBBPageUrl(logoUrls.dark) && (
                  <p className="mt-1 text-red-500 text-sm">
                    This appears to be an imgBB page URL, not a direct image URL. Please use the "Direct link" instead.
                  </p>
                )}
              </div>
              
              {previewUrls.dark && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-secondary-600 mb-2">Preview:</p>
                  <div className="border border-secondary-200 rounded-md p-4 bg-white">
                    <img 
                      src={previewUrls.dark} 
                      alt="Dark Logo Preview" 
                      className="h-12 w-auto"
                      onError={() => handleImageError('dark')}
                      onLoad={() => handleImageLoad('dark')}
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                <h4 className="text-blue-800 font-medium mb-2">How to Get the Correct imgBB URL</h4>
                <div className="text-sm text-blue-700 space-y-2">
                  <p className="font-bold text-red-600">IMPORTANT: You must use the DIRECT IMAGE URL, not the page URL!</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Upload your image to <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">imgBB.com</a></li>
                    <li>After uploading, click on "Get codes" (a button below your image)</li>
                    <li>In the popup, find the section labeled "Direct links"</li>
                    <li>Copy the URL labeled "Direct link" (it should start with https://i.ibb.co/)</li>
                    <li>Do NOT use the URL from your browser address bar (which starts with https://ibb.co/)</li>
                  </ol>
                  <div className="mt-3 p-3 bg-yellow-100 rounded-md">
                    <p className="font-medium text-yellow-800">Example:</p>
                    <p className="text-green-700">✅ CORRECT: https://i.ibb.co/abc123/logo.png</p>
                    <p className="text-red-700">❌ INCORRECT: https://ibb.co/abc123</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                <h4 className="text-yellow-800 font-medium mb-2">Troubleshooting Image Loading</h4>
                <ul className="list-disc pl-5 text-sm text-yellow-700 space-y-2">
                  <li>Make sure the URL points directly to an image file (ends with .png, .jpg, etc.)</li>
                  <li>Verify the image is publicly accessible (no login required)</li>
                  <li>Try opening the URL in a new browser tab to confirm it loads</li>
                  <li>Some image hosts may block hotlinking - imgBB allows it</li>
                  <li>Clear your browser cache if you've updated an image with the same filename</li>
                </ul>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn-accent"
            >
              Update Logos
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
