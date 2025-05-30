import { Link } from 'react-router-dom'

const Logo = ({ variant = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`text-xl font-sans font-medium ${variant === 'dark' ? 'text-primary-800' : 'text-white'}`}>
        Nor<span className="relative">i<span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-accent-500 text-xs">•</span></span>vane
      </span>
    </Link>
  )
}

export default Logo
