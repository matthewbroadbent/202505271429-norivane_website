import { Link } from 'react-router-dom'

const Logo = ({ variant = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`text-2xl font-sans font-medium ${variant === 'light' ? 'text-white' : 'text-primary-500'}`}>
        Norivane
      </span>
    </Link>
  )
}

export default Logo
