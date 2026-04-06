import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="terms-page pb-20">
      <SEO 
        title="Terms of Service" 
        description="Read the Terms of Service for using EduEarn India. Understand your rights and responsibilities as a user of our educational platform."
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <FileText size={16} />
              <span>Legal Information</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Terms of <span className="text-primary-blue">Service</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
              Please review these terms carefully before using the EduEarn India platform.
            </p>
            <div className="flex justify-center">
              <span className="px-4 py-1.5 rounded-full bg-surface-alt border-main text-xs font-bold text-muted uppercase tracking-widest">
                Last Updated: March 20, 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-12">
        <div className="container">
          <div className="policy-content">
            <div className="disclaimer-box mb-8">
              <h4>Agreement to Terms</h4>
              <p className="mb-0">By accessing and using EduEarn India, you accept and agree to be bound by the terms and conditions outlined below. If you do not agree with any part of these terms, you must discontinue use of this website immediately.</p>
            </div>

            <h2 id="about">1. About EduEarn India</h2>
            <p>EduEarn India is a free educational platform that provides articles, guides, learning paths, and tools related to online earning, trading basics, digital skills, and technology. All content is for <strong>informational and educational purposes only</strong>.</p>

            <h2 id="usage">2. Use of Content</h2>
            <p>All content published on EduEarn India is the intellectual property of EduEarn India and its contributors. You are permitted to:</p>
            <ul>
              <li>Read and share our content with proper attribution and a link back to the original source.</li>
              <li>Use the information for personal learning and educational purposes.</li>
              <li>Reference our articles in your own content with appropriate credit.</li>
            </ul>
            <p>You are <strong>not permitted</strong> to reproduce, distribute, or republish our content without explicit written consent, or use it for commercial purposes beyond fair use.</p>

            <h2 id="responsibilities">3. User Responsibilities</h2>
            <p>As a user of this platform, you agree to:</p>
            <ul>
              <li>Use the platform only for lawful purposes consistent with Indian law.</li>
              <li>Not engage in any activity that disrupts the platform&apos;s functionality.</li>
              <li>Take full responsibility for any financial, investment, or business decisions you make based on our educational content.</li>
              <li>Verify all information independently before acting on it.</li>
            </ul>

            <h2 id="no-advice">4. No Financial or Professional Advice</h2>
            <p>EduEarn India does <strong>not</strong> provide financial advice, investment recommendations, trading signals, or professional consulting. Our content is educational and should not be construed as a substitute for advice from qualified financial, legal, or tax professionals. We explicitly disclaim any responsibility for losses incurred from acting on our content.</p>

            <h2 id="third-party-links">5. Third-Party Links &amp; Affiliates</h2>
            <p>Our website may contain links to third-party websites and affiliate partnerships. While we strive to recommend only quality products and services, we are not responsible for the content, privacy policies, or practices of third-party sites. Affiliate commissions do not influence the editorial integrity of our content.</p>

            <h2 id="data">6. Privacy &amp; Data</h2>
            <p>Your use of EduEarn India is also governed by our <a href="/privacy">Privacy Policy</a>. We collect minimal data and never sell personal information to third parties. Newsletter subscriptions can be cancelled at any time.</p>

            <h2 id="liability">7. Limitation of Liability</h2>
            <p>In no event shall EduEarn India, its founders, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this platform. This includes, but is not limited to, financial losses from investment decisions, loss of data, or business interruption.</p>

            <h2 id="modifications">8. Modifications to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>

            <h2 id="governing-law">9. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in New Delhi, India.</p>

            <div className="final-warning">
              <h3>Contact Us</h3>
              <p className="mb-0">If you have questions about these Terms of Service, please contact us at <strong>hello@eduearnindia.com</strong> or visit our <a href="/contact">Contact page</a>.</p>
            </div>

            <div className="acknowledgement mt-5 text-center">
              <p>By using this website, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
              <p className="page-date">Last Updated: March 20, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
