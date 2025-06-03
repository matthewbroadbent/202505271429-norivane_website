import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const FAQ = () => {
  const faqs = [
    {
      question: "How long does the typical business sale process take?",
      answer: "The timeline varies based on business complexity, industry, and market conditions. Typically, from initial engagement to completed sale takes 6-12 months. Our simple, step by step formulas aim to optimise both speed and value, focusing on thorough preparation to streamline the later stages of the process."
    },
    {
      question: "What makes your approach different from business brokers?",
      answer: "Unlike traditional brokers who focus primarily on the transaction, we provide comprehensive coaching throughout the entire journey. We work directly with MDs and CEOs to optimise business value before going to market, develop leadership teams, improve operational efficiency, and prepare both the business and the owner for a successful transition."
    },
    {
      question: "How do you determine the value of my business?",
      answer: "We use external and specialised accountants with multiple valuation methodologies including EBITDA multiples, discounted cash flow analysis, comparable sales, and asset-based approaches. Our valuation process considers industry-specific factors, growth potential, customer concentration, team strength, and proprietary elements that create strategic value for potential acquirers. This way, our valuations are truly professional and importantly, independent"
    },
    {
      question: "Will potential buyers know my business is for sale?",
      answer: "We maintain strict confidentiality throughout the process. Information is only shared with pre-qualified buyers who sign non-disclosure agreements. We can implement a blind approach where your company identity is protected until advanced stages of discussion, and we work with you to manage communications with employees, customers, and suppliers."
    },
    {
      question: "What types of businesses do you typically work with?",
      answer: "We specialise in businesses with turnover between £1M and £20M across various sectors including technology, manufacturing, professional services, healthcare, and distribution. The ideal client has established market position, demonstrated profitability, and some level of operational independence from the owner."
    },
    {
      question: "How are your fees structured?",
      answer: "Our engagement typically includes a a fixed fee for a specific amount of time with you to get your business exit ready. After this, we will know more about your business and can determine whether a formulaic (thus lower cost) approach will work, or a more tailored approach is likely to maximise your valuation. This aligns our interests with maximizing your outcome. We provide transparent fee structures upfront, with no hidden costs or surprises."
    },
  ]
  
  const [openIndex, setOpenIndex] = useState(0)
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common questions about our business exit coaching process"
          align="center"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`flex justify-between items-center w-full text-left p-5 rounded-lg transition-all duration-200 ${
                  openIndex === index 
                    ? 'bg-primary-700 text-white' 
                    : 'bg-white hover:bg-primary-50 text-secondary-900'
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="bg-white p-5 rounded-b-lg shadow-sm border-t border-primary-100">
                  <p className="text-secondary-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
