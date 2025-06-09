import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle, bgImage }) => {
  return (
    <div 
      className="relative bg-secondary-900 py-20 md:py-32"
      style={bgImage ? {
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.8)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary-500/10 top-10 left-[10%]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [0, -15, 0], 
            opacity: 0.5,
          }}
          transition={{ 
            y: { 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut" 
            },
            opacity: { duration: 1 }
          }}
        />
        <motion.div 
          className="absolute w-32 h-32 rounded-full bg-primary-500/10 bottom-10 right-[15%]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [0, -20, 0], 
            opacity: 0.3,
          }}
          transition={{ 
            y: { 
              repeat: Infinity, 
              duration: 7,
              ease: "easeInOut",
              delay: 1
            },
            opacity: { duration: 1 }
          }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-primary-500/10 top-40 right-[25%]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [0, -10, 0], 
            opacity: 0.4,
          }}
          transition={{ 
            y: { 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut",
              delay: 0.5
            },
            opacity: { duration: 1 }
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string
};

export default PageHeader;
