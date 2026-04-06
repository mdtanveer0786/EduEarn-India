import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import SEO from '../components/SEO';

const Disclaimer = () => {
  return (
    <div className="disclaimer-page pb-20">
      <SEO 
        title="Educational Disclaimer" 
        description="Important educational disclaimer for EduEarn India. Please read this information about the nature of our educational content."
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold mb-6">
              <ShieldAlert size={16} />
              <span>Important Notice</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Educational <span className="text-primary-blue">Disclaimer</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
              Please read this important information about our educational content.
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
              <h4>⚠️ Crucial Information</h4>
              <p className="mb-0">The content on EduEarn India is for <strong>educational and informational purposes only</strong>. It is not intended as, and shall not be understood or construed as, financial, investment, legal, or professional advice.</p>
            </div>

            <h2 id="not-financial-advice">1. Not Financial Advice</h2>
            <p>EduEarn India does not provide financial, investment, tax, or legal advice. The information provided on this website is for general educational purposes only and is not tailored to your individual circumstances. Before making any financial decisions, you should consult with a qualified financial advisor (SEBI-registered in India) or other professional.</p>

            <h2 id="no-guarantees">2. No Guarantees</h2>
            <p>While we discuss various online earning methods and digital skills, we provide <strong>no guarantees</strong> of income or success. Your results will depend on your own effort, skills, market conditions, and various other factors beyond our control. Any income figures mentioned are for illustrative purposes based on publicly available data and are not promises of earnings.</p>

            <h2 id="risk-disclosure">3. Trading &amp; Investment Risk</h2>
            <p>Trading in financial markets (stocks, crypto, commodities, etc.) involves substantial risk of loss. We do not provide trading tips, signals, or &quot;calls&quot;. Any discussion of technical analysis, market concepts, or trading strategies is strictly for educational purposes. <strong>Never trade with money you cannot afford to lose.</strong> Past performance is not indicative of future results.</p>

            <h2 id="affiliates">4. Affiliate Relationships</h2>
            <p>EduEarn India participates in affiliate marketing programs. This means we may earn a commission from products or services purchased through links on our site. This is at no additional cost to you and helps us keep our educational content free. We only recommend products we believe will add value to our readers. Affiliate relationships are always disclosed clearly.</p>

            <h2 id="accuracy">5. Accuracy of Information</h2>
            <p>While we strive to provide accurate and up-to-date information, the digital landscape changes rapidly. Government policies, tax rates, platform terms, and market conditions evolve constantly. We make no representations or warranties about the completeness, accuracy, reliability, or suitability of any information on this platform.</p>

            <h2 id="limitation">6. Limitation of Liability</h2>
            <p>In no event will EduEarn India, its owners, or contributors be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>

            <div className="final-warning">
              <h3>Important Reminder</h3>
              <p className="mb-0">The digital landscape is constantly changing. We strive to keep our information accurate and up-to-date, but we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information provided. Always verify information independently.</p>
            </div>

            <div className="acknowledgement mt-5 text-center">
              <p>By using this website, you hereby acknowledge that you have read and understood this educational disclaimer and agree to its terms.</p>
              <p className="page-date">Last Updated: March 20, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
