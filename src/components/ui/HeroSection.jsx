import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-700"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-600"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary-800"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6"
            >
              Expert Business Exit Strategy Consulting
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white mb-8 leading-relaxed"
            >
              Maximise the value of your business and secure your financial future with our proven exit planning process.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/booking" 
                className="btn-primary mb-4 sm:mb-0 shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Book a Consultation
              </Link>
              
              <Link 
                to="/process" 
                className="btn-outline-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn Our Process
              </Link>
            </motion.div>
            
            {/* Industry tags with improved visibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <p className="text-white text-sm mb-4 font-medium">Trusted by business owners across key industries</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {["Manufacturing", "Technology", "Professional Services", "Healthcare", "Retail"].map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-white font-medium text-sm bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-center hover:bg-white/15 transition-colors duration-300"
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business professionals in a meeting" 
                  className="rounded-lg shadow-elegant-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
