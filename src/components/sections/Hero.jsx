import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: clientX / innerWidth - 0.5,
        y: clientY / innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="relative" ref={heroRef}>
      {/* Main Hero Section - Increased height */}
      <section className="relative bg-[#001233] pt-32 pb-48 md:pt-40 md:pb-64 lg:pt-48 lg:pb-80 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90"></div>
          
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Animated dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          
          {/* Animated floating elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0077b6]/20 blur-[100px]"
            animate={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
            transition={{ type: "spring", damping: 15 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00b4d8]/10 blur-[80px]"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
            }}
            transition={{ type: "spring", damping: 15 }}
          ></motion.div>
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,100 Q400,150 800,100 T1600,100"
              fill="none"
              stroke="rgba(0, 180, 216, 0.1)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,200 Q400,250 800,200 T1600,200"
              fill="none"
              stroke="rgba(0, 180, 216, 0.07)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
              d="M0,300 Q400,350 800,300 T1600,300"
              fill="none"
              stroke="rgba(0, 180, 216, 0.05)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
          
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00b4d8]/30 rounded-lg"
            animate={{ 
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-[#00b4d8]/20 rounded-full"
            animate={{ 
              rotate: -360,
              x: [0, 20, 0],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          ></motion.div>
          <motion.div
            className="absolute top-2/3 right-1/3 w-20 h-20 border border-[#90e0ef]/10"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          ></motion.div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#00b4d8]/20 border border-[#00b4d8]/30 mb-8"
              >
                <span className="text-[#90e0ef] text-sm font-medium">For Business Owners with £1m-£20m Turnover</span>
              </motion.div>
              
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                <span className="block">Strategic Exit</span>
                <span className="block">Planning for</span>
                <span className="relative">
                  Visionary Business Owners
                  <motion.span 
                    className="absolute -bottom-3 left-0 h-1 bg-[#00b4d8]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  ></motion.span>
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#caf0f8] mb-8 max-w-lg"
              >
                Transform your business legacy with our expert coaching. We guide MDs and CEOs through strategic exits that maximise value and secure your future.
              </motion.p>
              
              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={() => navigate('/booking')}
                  className="group relative px-8 py-4 bg-[#00b4d8] hover:bg-[#0096c7] text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#00b4d8]/30 overflow-hidden"
                >
                  <span className="relative z-10">Book a Consultation</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#0077b6] z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ></motion.span>
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="group relative px-8 py-4 bg-transparent border border-[#0077b6] text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#0077b6]/20 z-0"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ></motion.span>
                </button>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#0077b6]/30"
              >
                {[
                  { value: "£250M+", label: "Exit Value" },
                  { value: "92%", label: "Success Rate" },
                  { value: "30+ Years", label: "Experience" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-[#00b4d8] text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-[#caf0f8]/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ y: y1 }}
              className="hidden md:block"
            >
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-[#00b4d8]/10 rounded-full blur-xl"></div>
                
                {/* Image container with glass effect */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl relative">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="CEO Strategy Session" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute -right-8 -bottom-8 bg-[#001845] text-white px-4 py-3 rounded-lg shadow-lg border border-[#0077b6]/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    style={{
                      x: mousePosition.x * -15,
                      y: mousePosition.y * -15,
                    }}
                  >
                    <div className="text-sm font-medium">Expert-Led Strategy</div>
                    <div className="text-xs text-[#90e0ef]">Personalised Exit Plans</div>
                  </motion.div>
                  
                  {/* Floating badge 2 */}
                  <motion.div
                    className="absolute -left-8 -top-8 bg-[#00b4d8] text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    style={{
                      x: mousePosition.x * 15,
                      y: mousePosition.y * 15,
                    }}
                  >
                    <div className="text-sm font-medium">Maximise Value</div>
                    <div className="text-xs text-white/80">Proven Methodology</div>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-[#00b4d8]/30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-10 right-4 w-20 h-1 bg-[#00b4d8]/50 rounded-full"
                  animate={{ width: [20, 60, 20] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ opacity }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about-section');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-[#caf0f8] text-sm mb-2">Discover Our Expertise</span>
            <div className="w-6 h-10 border-2 border-[#caf0f8]/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-[#caf0f8] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Wave Transition - Dramatic Curved Implementation */}
      <div className="relative h-32 md:h-48 bg-white">
        {/* Main wave */}
        <svg 
          className="absolute bottom-full left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
            animate={{ d: "M0,320L1440,320L1440,250C1320,290,1200,310,1080,290C960,270,840,210,720,192C600,170,480,190,360,210C240,230,120,250,60,260L0,270Z" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            fill="#ffffff"
          ></motion.path>
        </svg>
        
        {/* Secondary decorative waves */}
        <svg 
          className="absolute bottom-full left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 }}
            animate={{ 
              d: "M0,320L1440,320L1440,280C1320,300,1200,310,1080,300C960,290,840,270,720,260C600,250,480,250,360,260C240,270,120,290,60,300L0,310Z",
              opacity: 0.1
            }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            fill="#00b4d8"
          ></motion.path>
        </svg>
        
        <svg 
          className="absolute bottom-full left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 }}
            animate={{ 
              d: "M0,320L1440,320L1440,290C1320,300,1200,300,1080,290C960,280,840,260,720,250C600,240,480,240,360,250C240,260,120,280,60,290L0,300Z",
              opacity: 0.05
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            fill="#0077b6"
          ></motion.path>
        </svg>
        
        {/* Floating particles in the wave area */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00b4d8]/30"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%", 
                opacity: 0.3 + Math.random() * 0.7,
                scale: 0.5 + Math.random() * 1
              }}
              animate={{ 
                y: "0%", 
                opacity: 0
              }}
              transition={{ 
                duration: 3 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "easeOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
