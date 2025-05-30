import { useState } from 'react'
import { updateLogoUrl } from '../components/ui/Logo'

const Settings = () => {
  const [logoUrl, setLogoUrl] = useState('')
  const [message, setMessage] = useState('')
  
  const handleLogoUpdate = (e) => {
    e.preventDefault()
    
    if (!logoUrl) {
      setMessage('Please enter a logo URL')
      return
    }
    
    // Update the logo
    updateLogoUrl(logoUrl)
    setMessage('Logo updated successfully! Refreshing...')
  }
  
  const handleGoogleDriveUrl = (url) => {
    // Convert Google Drive sharing URL to direct image URL if needed
    if (url.includes('drive.google.com/file/d/')) {
      // Extract the file ID
      const fileIdMatch = url.match(/\/d\/([^/]+)/)
      if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1]
        // Create direct link
        const directLink = `https://drive.google.com/uc?export=view&id=${fileId}`
        setLogoUrl(directLink)
        return
      }
    }
    
    // If not a Google Drive URL or couldn't parse, use as is
    setLogoUrl(url)
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
            <div className="mb-4">
              <label htmlFor="logoUrl" className="block text-sm font-medium text-secondary-600 mb-1">
                Logo URL (Google Drive or direct image URL)
              </label>
              <input
                type="text"
                id="logoUrl"
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                placeholder="https://drive.google.com/file/d/..."
                value={logoUrl}
                onChange={(e) => handleGoogleDriveUrl(e.target.value)}
              />
              <p className="text-sm text-secondary-500 mt-1">
                For Google Drive: Share the image and paste the link here
              </p>
            </div>
            
            {logoUrl && (
              <div className="mb-4">
                <p className="text-sm font-medium text-secondary-600 mb-2">Preview:</p>
                <div className="border border-secondary-200 rounded-md p-4 bg-secondary-50">
                  <img 
                    src={logoUrl} 
                    alt="Logo Preview" 
                    className="h-12 w-auto"
                    onError={() => setMessage("Error loading image. Please check the URL.")}
                  />
                </div>
              </div>
            )}
            
            <button
              type="submit"
              className="btn-accent"
            >
              Update Logo
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
