import { FiTarget, FiBarChart2, FiUsers, FiMessageSquare, FiRefreshCw } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'

const Services = () => {
  const services = [
    {
      id: 'exit-strategy',
      title: 'Exit Strategy Planning',
      description: `Develop a comprehensive exit strategy tailored to your business goals, timeline, and desired outcomes. We analyse your business structure, market position, and growth potential to create a roadmap for maximum value.`,
      icon: FiTarget,
      link: '/services#exit-strategy',
    },
    {
      id: 'valuation',
      title: 'Business Valuation',
      description: `Receive an accurate, market-based professional and independent valuation of your business using multiple methodologies. We identify value drivers and areas for improvement to increase your company's worth before sale.`,
      icon: FiBarChart2,
      link: '/services#valuation',
    },
    {
      id: 'buyers',
      title: 'Buyer Identification',
      description: `Leverage our extensive network to identify and qualify potential buyers who align with your vision and can offer premium valuations. We create a strategic approach to buyer engagement.`,
      icon: FiUsers,
      link: '/services#buyers',
    },
    {
      id: 'negotiation',
      title: 'Negotiation Support',
      description: `Benefit from expert guidance throughout the negotiation process. We help structure deals that maximise upfront value while protecting your interests in earnouts and contingent payments.`,
      icon: FiMessageSquare,
      link: '/services#negotiation',
    },
    {
      id: 'transition',
      title: 'Post-Sale Transition',
      description: `Plan for a smooth transition with strategies for leadership handover, team retention, and your personal next steps. We ensure the business continues to thrive while you move forward.`,
      icon: FiRefreshCw,
      link: '/services#transition',
    },
  ]
  
  return (
    <section id="services" className="section bg-secondary-50">
      <div className="container-custom">
        <SectionHeading
          title="Specialised Services for Business Exits"
          subtitle="Comprehensive support throughout your entire business sale journey, from initial planning to post-sale transition."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
