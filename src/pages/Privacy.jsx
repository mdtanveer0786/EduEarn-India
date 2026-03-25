import React from 'react';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Your privacy is important to us. Here's how we handle your data.</p>
        </div>
      </header>

      <div className="privacy-content py-5">
        <div className="container">
          <div className="privacy-note mb-5">
            <p>At EduEarn India, accessible from eduearnindia.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by EduEarn India and how we use it.</p>
          </div>

          <div className="policy-content">
            <h2>1. Information We Collect</h2>
            <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            <p>When you subscribe to our newsletter, we only collect your email address for the purpose of sending you educational updates.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website's educational content.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners.</li>
              <li>Send you emails with educational content and updates.</li>
              <li>Find and prevent fraud.</li>
            </ul>

            <h2>3. Log Files</h2>
            <p>EduEarn India follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

            <h2>4. Cookies and Web Beacons</h2>
            <p>Like any other website, EduEarn India uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

            <h2>5. Google DoubleClick DART Cookie</h2>
            <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.</p>

            <h2>6. Third Party Privacy Policies</h2>
            <p>EduEarn India's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

            <div className="policy-disclaimer mt-5">
              <h3>Consent</h3>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </div>

            <div className="acknowledgement mt-5 text-center">
              <p className="page-date">Last Updated: March 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
