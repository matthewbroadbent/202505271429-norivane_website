import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 md:pt-48 md:pb-28 flex items-center min-h-[70vh]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-8xl font-serif font-bold text-primary-700 mb-6"
              >
                404
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-serif font-semibold mb-4"
              >
                Page Not Found
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-secondary-600 mb-8"
              >
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/" className="btn-primary">
                  Return to Homepage
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
