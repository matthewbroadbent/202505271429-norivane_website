import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Business coaching session" 
              className="rounded-lg shadow-elegant-lg w-full h-auto object-cover"
            />
          </motion.div>
          
          <div>
            <SectionHeading
              title="Expert Guidance for Your Business Exit"
              subtitle="With 30 years experience as a Deloitte trained Chartered Accountant, I've sold, bought and invested in businesses just like yours"
              align="left"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-secondary-900"
            >
              <p>
                At Norivane, we specialise in guiding CEO's and MD's and business owners through the complex process of selling their companies with turnover between £1m and £20m. The approach is born out of years of experience in transactions just like this; now reducing the need for expensive lawyers and accountants until they are needed to complete the deal.
              </p>
              
              <p>
                Unlike traditional business brokers who focus solely on the transaction, we take a holistic approach that considers your personal goals, legacy concerns, and post-exit plans. Our coaching methodology prepares both you and your business for a successful transition.
              </p>
              
              <p>
                We understand that selling your business is likely the most significant financial event of your life. Our proven process has helped dozens of business owners achieve premium valuations—on average 30% higher than initial market estimates.
              </p>
              
              <div className="pt-4">
                <a 
                  href="/about" 
                  className="btn-accent"
                >
                  Learn More About Our Approach
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
