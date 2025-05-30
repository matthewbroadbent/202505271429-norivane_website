import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center">
        <div className="container-custom py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl font-serif font-bold text-primary-700 mb-6">404</h1>
            <h2 className="text-3xl font-serif font-semibold mb-4">Page Not Found</h2>
            <p className="text-xl text-secondary-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
