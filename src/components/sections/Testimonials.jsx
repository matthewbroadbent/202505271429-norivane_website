import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Norivane was the best decision I made when selling my manufacturing business. Their strategic guidance helped us increase our valuation by 35% and find the perfect buyer who shared our vision.",
      author: "James Wilson",
      position: "Former CEO",
      company: "P.. M.. Ltd",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "The expertise and network that Norivane brought to the table was invaluable. They guided me through every step of the process, from initial valuation to final negotiations, resulting in a deal that exceeded my expectations.",
      author: "Sarah Thompson",
      position: "Founder",
      company: "T... Digital S...",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "Selling a family business after 25 years was emotionally challenging. Norivane not only helped us achieve a premium valuation but also ensured our legacy and team were protected in the transition.",
      author: "Robert Chen",
      position: "Former Owner",
      company: "C... L...",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "The strategic improvements Norivane recommended before going to market added significant value to our business. Their approach to finding the right buyer, not just the highest bidder, made all the difference.",
      author: "Emma Davies",
      position: "Co-founder",
      company: "I... H...",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Success Stories"
          subtitle="Hear from business owners who successfully navigated their exit with our guidance"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
