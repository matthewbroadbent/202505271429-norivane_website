import SectionHeading from '../ui/SectionHeading'
import ProcessStep from '../ui/ProcessStep'

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Assessment',
      description: 'We begin with a comprehensive evaluation of your business, including financial performance, market position, growth potential, and operational strengths and weaknesses.',
    },
    {
      number: 2,
      title: 'Value Optimization',
      description: 'Based on our assessment, we identify specific opportunities to increase your business value before going to market, focusing on quick wins and strategic improvements.',
    },
    {
      number: 3,
      title: 'Exit Strategy Development',
      description: 'We create a customized exit plan aligned with your timeline and goals, including valuation targets, potential buyer profiles, and deal structure preferences.',
    },
    {
      number: 4,
      title: 'Buyer Identification',
      description: 'Leveraging our extensive network, we identify and approach qualified buyers who are strategically aligned with your business and capable of meeting your valuation expectations.',
    },
    {
      number: 5,
      title: 'Negotiation & Deal Structuring',
      description: 'We guide you through the negotiation process, helping structure a deal that maximizes upfront value while protecting your interests in earnouts and contingent payments.',
    },
    {
      number: 6,
      title: 'Transition Support',
      description: 'After the sale, we provide guidance on leadership transition, team retention, and your personal next steps to ensure a smooth handover and successful post-exit life.',
    },
  ]
  
  return (
    <section id="process" className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Proven Exit Process"
          subtitle="A structured approach to maximize your business value and ensure a successful transition"
          align="center"
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.number} 
              step={step} 
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
