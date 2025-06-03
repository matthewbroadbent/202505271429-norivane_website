import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import StatCard from '../ui/StatCard'

const Stats = () => {
  const stats = [
    {
      value: '30%',
      label: 'Average Value Increase',
      description: 'Typical improvement in final sale price compared to initial valuation',
    },
    {
      value: '£15M+',
      label: 'Largest Deal',
      description: 'Our highest value transaction successfully completed',
    },
    {
      value: '25+',
      label: 'Businesses Sold',
      description: 'Successfully guided exits across multiple industries',
    },
    {
      value: '92%',
      label: 'Success Rate',
      description: 'Percentage of clients who successfully complete their exit',
    },
  ]
  
  return (
    <section className="py-20 bg-primary-50">
      <div className="container-custom">
        <SectionHeading
          title="Proven Results"
          subtitle="Our track record of successful exits speaks for itself"
          align="center"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
