import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="privacy-page pb-20">
      <SEO 
        title="Privacy Policy" 
        description="EduEarn India Privacy Policy. Learn how we handle, protect, and use your personal data on our educational platform."
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <Shield size={16} />
              <span>Your Privacy Matters</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Privacy <span className="text-primary-blue">Policy</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Your privacy is important to us. Here&apos;s how we handle your data.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-12">
        <div className="container">
          <div className="policy-content">
            <p>At EduEarn India, accessible from edu-earn-india.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by EduEarn India and how we use it.</p>

            <h2>1. Information We Collect</h2>
            <p>If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            <p>When you subscribe to our newsletter, we only collect your email address for the purpose of sending you educational updates. We never ask for sensitive financial information.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website&apos;s educational content.</li>
              <li>Understand and analyze how you use our website (through anonymous analytics).</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners, for customer service or educational updates.</li>
              <li>Send you emails with educational content and updates (only if you opt-in).</li>
              <li>Find and prevent fraud.</li>
            </ul>

            <h2>3. Log Files</h2>
            <p>EduEarn India follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services&apos; analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information.</p>

            <h2>4. Cookies and Web Beacons</h2>
            <p>Like any other website, EduEarn India uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences (such as your theme preference — light or dark mode), and the pages on the website that the visitor accessed. The information is used to optimize the users&apos; experience by customizing content based on preferences.</p>

            <h2>5. Third-Party Privacy Policies</h2>
            <p>EduEarn India&apos;s Privacy Policy does not apply to other advertisers or websites. We are advising you to consult the respective Privacy Policies of third-party services for more detailed information. Third-party services we may use include:</p>
            <ul>
              <li>Google Analytics — for understanding website traffic and user behavior.</li>
              <li>Google AdSense — for displaying minimal, non-intrusive advertisements.</li>
              <li>Vercel — our hosting provider, which may collect basic access logs.</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>We take reasonable measures to protect any personal information you provide. However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>EduEarn India does not knowingly collect personal identifiable information from children under the age of 13. If you believe your child has provided such information, please contact us immediately so we can remove it.</p>

            <h2>8. Your Rights</h2>
            <p>Under applicable Indian data protection laws, you have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of any inaccurate personal data.</li>
              <li>Request deletion of your personal data (subject to legal obligations).</li>
              <li>Opt-out of newsletter communications at any time.</li>
            </ul>

            <div className="final-warning">
              <h3>Consent</h3>
              <p className="mb-0">By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have questions about this policy, contact us at <strong>hello@eduearnindia.com</strong>.</p>
            </div>

            <div className="acknowledgement mt-5 text-center">
              <p className="page-date">Last Updated: March 20, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
