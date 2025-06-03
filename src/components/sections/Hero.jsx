import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  
  const handleGetStarted = () => {
    navigate('/booking')
  }
  
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 md:pt-40 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="pt-4">
              <div className="inline-block bg-primary-700/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-400/30 mb-6">
                <p className="text-sm md:text-base font-medium text-primary-100">
                  For Business Owners with £1m-£20m Turnover Looking to Sell
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Strategic Exit Planning for Visionary CEOs
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
                Transform your business legacy with our expert coaching. We guide CEOs through strategic exits that maximize value and secure your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetStarted}
                  className="btn-accent text-lg px-8 py-3"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="btn-outline-light text-lg px-8 py-3"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CEO Strategy Session" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Integrated wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 lg:h-64 overflow-hidden leading-none">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white opacity-10"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-white opacity-20"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
      
      {/* Subtle gradient overlay for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent"></div>
    </section>
  )
}

export default Hero
