import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/ui/ContactForm'
import BookingButton from '../components/booking/BookingButton'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us | Norivane'
  }, [])
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-800">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-primary-100">
                Get in touch with our team to discuss how we can help with your business exit strategy
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="section bg-secondary-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-sans font-semibold mb-6">Get in Touch</h2>
                <p className="text-lg text-secondary-700 mb-8">
                  Whether you're ready to start planning your exit strategy or just want to learn more about our services, we're here to help. Fill out the form, and one of our experts will get back to you shortly.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-1">Phone</h3>
                      <p className="text-secondary-600">+44 (0) 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-1">Email</h3>
                      <p className="text-secondary-600">contact@norivane.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-1">Address</h3>
                      <p className="text-secondary-600">123 Business Street, London, UK</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-sans font-semibold mb-4">Book a Consultation</h3>
                  <p className="text-secondary-700 mb-4">
                    Ready to discuss your exit strategy in detail? Schedule a 30-minute consultation with one of our experts.
                  </p>
                  <BookingButton 
                    text="Schedule a Consultation"
                    className="btn-accent"
                  />
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
