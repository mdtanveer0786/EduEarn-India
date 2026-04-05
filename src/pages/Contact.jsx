import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Users, 
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page pb-20">
      <SEO 
        title="Contact Us" 
        description="Have questions or want to collaborate? Reach out to the EduEarn India team for educational support and inquiries."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <MessageSquare size={16} />
              <span>Get In Touch</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Let&apos;s <span className="text-primary-blue">Connect</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Have questions about our learning paths or want to explore collaboration opportunities? We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <div className="card p-8 lg:p-12 border-main shadow-sm bg-surface h-full">
                {!submitted ? (
                  <>
                    <div className="mb-10">
                      <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
                      <p className="text-muted">Our educational support team typically responds within 48-72 hours.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="e.g., Rohan Sharma" 
                            className="w-full bg-surface-alt border-main rounded-xl py-4 px-5 focus:outline-none focus:border-primary-blue text-sm transition-colors"
                            required 
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="e.g., rohan@example.com" 
                            className="w-full bg-surface-alt border-main rounded-xl py-4 px-5 focus:outline-none focus:border-primary-blue text-sm transition-colors"
                            required 
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted">Subject</label>
                        <select 
                          id="subject" 
                          name="subject" 
                          className="w-full bg-surface-alt border-main rounded-xl py-4 px-5 focus:outline-none focus:border-primary-blue text-sm transition-colors appearance-none"
                          required 
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          <option value="general">General Inquiry</option>
                          <option value="collaboration">Collaboration / Partnership</option>
                          <option value="feedback">Feedback / Suggestion</option>
                          <option value="report">Report a Concern</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted">Your Message</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows="6" 
                          placeholder="How can we help you?" 
                          className="w-full bg-surface-alt border-main rounded-xl py-4 px-5 focus:outline-none focus:border-primary-blue text-sm transition-colors resize-none"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-200/50 dark:border-blue-500/10 flex items-start gap-4">
                        <ShieldAlert size={20} className="text-primary-blue flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-muted font-medium mb-0 leading-relaxed">
                          <strong>Note:</strong> We do not provide financial advice, trading signals, or guaranteed income claims via this form. Such inquiries will not receive a response.
                        </p>
                      </div>
                      
                      <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold shadow-xl shadow-blue-500/20">
                        Send Message <Send size={20} className="ml-2" />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-sm">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-muted text-lg max-w-md mx-auto mb-10">
                      Thank you for reaching out, {formData.name.split(' ')[0]}. We&apos;ve received your message and will get back to you soon.
                    </p>
                    <button 
                      className="btn btn-secondary px-10" 
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-5 space-y-8">
              <div className="card p-8 border-main bg-surface shadow-sm">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <Sparkles size={24} className="text-primary-blue" />
                  Contact Information
                </h3>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0 border-main">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Support</h4>
                      <p className="text-sm text-muted mb-1">General: hello@eduearnindia.com</p>
                      <p className="text-sm text-muted">Learning: learn@eduearnindia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-accent-green rounded-xl flex items-center justify-center flex-shrink-0 border-main">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Working Hours</h4>
                      <p className="text-sm text-muted mb-1">Mon - Fri: 10:00 AM - 6:00 PM IST</p>
                      <p className="text-sm text-muted">Response: Within 48-72 Hours</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 border-main">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Our Location</h4>
                      <p className="text-sm text-muted mb-1">Digital Education Hub</p>
                      <p className="text-sm text-muted">New Delhi, India - 110001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8 border-main bg-surface-alt shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle size={24} className="text-primary-blue" />
                  Common Questions
                </h3>
                <div className="space-y-6">
                  <div className="group">
                    <h4 className="font-bold text-sm mb-2 flex items-center justify-between">
                      Do you offer paid courses?
                      <ArrowRight size={14} className="text-primary-blue opacity-0 group-hover:opacity-100 transition-all" />
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">No, all our primary educational resources are 100% free for Indian learners.</p>
                  </div>
                  <div className="group">
                    <h4 className="font-bold text-sm mb-2 flex items-center justify-between">
                      Can I write for EduEarn India?
                      <ArrowRight size={14} className="text-primary-blue opacity-0 group-hover:opacity-100 transition-all" />
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">We love collaborating with experts. Please select &apos;Collaboration&apos; in the subject field of the form.</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 bg-primary-blue text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                 <div className="relative z-10 flex items-center gap-6">
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-md">
                     <Users size={32} />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Join Our Community</h4>
                     <p className="text-xs opacity-90 mb-0">Follow us on social media for daily tips and educational updates.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
