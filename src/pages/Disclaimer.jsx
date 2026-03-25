import React from 'react';

const Disclaimer = () => {
  return (
    <div className="disclaimer-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Educational Disclaimer</h1>
          <p className="page-subtitle">Please read this important information about our educational content.</p>
        </div>
      </header>

      <div className="disclaimer-content py-5">
        <div className="container">
          <div className="disclaimer-warning mb-5">
            <div className="disclaimer-box">
              <h4><i className="fas fa-exclamation-triangle"></i> Crucial Information</h4>
              <p>The content on EduEarn India is for <strong>educational and informational purposes only</strong>. It is not intended as, and shall not be understood or construed as, financial, investment, legal, or professional advice.</p>
            </div>
          </div>

          <div className="policy-content">
            <h2>1. Not Financial Advice</h2>
            <p>EduEarn India does not provide financial, investment, tax, or legal advice. The information provided on this website is for general educational purposes only and is not tailored to your individual circumstances. Before making any financial decisions, you should consult with a qualified financial advisor or other professional.</p>

            <h2>2. No Guarantees</h2>
            <p>While we discuss various online earning methods and digital skills, we provide <strong>no guarantees</strong> of income or success. Your results will depend on your own effort, skills, market conditions, and various other factors beyond our control.</p>

            <h2>3. Trading & Investment Risk</h2>
            <p>Trading in financial markets (stocks, crypto, etc.) involves substantial risk. We do not provide trading tips, signals, or "calls". Any discussion of technical analysis, market concepts, or trading strategies is strictly for educational purposes. <strong>Never trade with money you cannot afford to lose.</strong></p>

            <h2>4. Affiliate Relationships</h2>
            <p>EduEarn India participates in affiliate marketing programs. This means we may earn a commission from products or services purchased through links on our site. This is at no additional cost to you and helps us keep our educational content free. We only recommend products we believe will add value to our readers.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event will EduEarn India, its owners, or contributors be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>

            <div className="final-warning">
              <h3>Important Reminder</h3>
              <p>The digital landscape is constantly changing. We strive to keep our information accurate and up-to-date, but we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information provided.</p>
            </div>

            <div className="acknowledgement mt-5">
              <p>By using this website, you hereby acknowledge that you have read and understood this educational disclaimer and agree to its terms.</p>
              <p className="page-date">Last Updated: March 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
