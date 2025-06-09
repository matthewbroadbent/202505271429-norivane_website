import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const TermsPage = () => {
  return (
    <>
      <PageHeader 
        title="Terms & Conditions" 
        subtitle="Our service agreement" 
      />
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="prose prose-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>1. Introduction</h2>
            <p>
              These terms and conditions govern your use of the Norivane website and services. By using our website 
              or engaging our services, you accept these terms and conditions in full. If you disagree with these 
              terms and conditions or any part of them, you must not use our website or services.
            </p>
            
            <h2>2. Services</h2>
            <p>
              Norivane provides business consulting services as described on our website. The specific details, 
              deliverables, and timelines for services will be agreed upon in a separate service agreement or 
              statement of work between Norivane and the client.
            </p>
            
            <h2>3. Booking and Appointments</h2>
            <p>
              When booking a consultation or service through our website:
            </p>
            <ul>
              <li>All appointments are subject to availability and confirmation.</li>
              <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
              <li>Cancellations must be made at least 24 hours in advance of the scheduled appointment.</li>
              <li>Late cancellations or no-shows may be subject to a cancellation fee.</li>
            </ul>
            
            <h2>4. Intellectual Property</h2>
            <p>
              All intellectual property rights in the website and the material published on it are owned by 
              Norivane or our licensors. These works are protected by copyright laws and treaties around the 
              world. All such rights are reserved.
            </p>
            <p>
              You may print one copy, and may download extracts, of any page(s) from our website for your 
              personal use and you may draw the attention of others to content posted on our website.
            </p>
            
            <h2>5. Limitation of Liability</h2>
            <p>
              Nothing in these terms and conditions will limit or exclude our liability for death or personal 
              injury resulting from our negligence, fraud or fraudulent misrepresentation, or any liability 
              that cannot be excluded or limited by law.
            </p>
            <p>
              To the extent permitted by law, we exclude all conditions, warranties, representations or other 
              terms which may apply to our website or any content on it, whether express or implied.
            </p>
            <p>
              We will not be liable to any user for any loss or damage, whether in contract, tort (including 
              negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in 
              connection with use of, or inability to use, our website or use of or reliance on any content 
              displayed on our website.
            </p>
            
            <h2>6. Indemnity</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Norivane, its officers, directors, employees, 
              agents, licensors, and suppliers from and against all losses, expenses, damages and costs, including 
              reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity 
              related to your account by you or any other person accessing the website using your account.
            </p>
            
            <h2>7. Variation</h2>
            <p>
              We may revise these terms and conditions at any time by amending this page. You are expected to 
              check this page from time to time to take notice of any changes we made, as they are binding on you.
            </p>
            
            <h2>8. Governing Law and Jurisdiction</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United 
              Kingdom, and any disputes relating to these terms and conditions will be subject to the exclusive 
              jurisdiction of the courts of the United Kingdom.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these terms and conditions, please contact us at:
            </p>
            <p>
              Email: us@norivane.com<br />
              Or visit our Contact page to send us a message.
            </p>
            
            <p className="text-sm text-gray-500 mt-8">
              Last updated: 1 June 2023
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
