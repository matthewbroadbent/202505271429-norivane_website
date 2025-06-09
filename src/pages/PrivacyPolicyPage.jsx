import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle your data" 
      />
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="prose prose-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Introduction</h2>
            <p>
              At Norivane, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you 
              visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2>The Data We Collect About You</h2>
            <p>
              Personal data means any information about an individual from which that person can be 
              identified. We may collect, use, store and transfer different kinds of personal data 
              about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address, telephone numbers, and address.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, 
              time zone setting and location, browser plug-in types and versions, operating system and platform, 
              and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving 
              marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h2>How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use 
              your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your 
              interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, 
              we limit access to your personal data to those employees, agents, contractors and other third 
              parties who have a business need to know.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes 
              we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting 
              or reporting requirements.
            </p>
            
            <h2>Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              Email: us@norivane.com<br />
              Or visit our Contact page to send us a message.
            </p>
            
            <h2>Changes to the Privacy Policy</h2>
            <p>
              We keep our privacy policy under regular review. This version was last updated on 1 June 2023.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
