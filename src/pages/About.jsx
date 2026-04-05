import { motion } from 'framer-motion';
import { 
  Heart, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Mountain, 
  Link as LinkIcon, 
  Layout, 
  Target,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="about-page pb-20">
      <SEO 
        title="About Us" 
        description="Learn about the mission, values, and vision of EduEarn India. Empowering Indian learners with authentic digital knowledge."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <Users size={16} />
              <span>Our Story & Mission</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Empowering the <span className="text-primary-blue">Next Generation</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
              EduEarn India was founded with a single, powerful mission: to bridge the digital divide in India by providing high-quality, honest, and accessible education for the modern economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Honesty First', desc: 'In a world of "get rich quick" scams, we stand for the truth. We only promote legitimate, skill-based earning paths.', icon: <Heart className="text-red-500" /> },
              { title: 'Education-Driven', desc: 'Our primary goal is teaching the fundamentals. We want you to understand the "why" behind every "how".', icon: <GraduationCap className="text-blue-500" /> },
              { title: 'Safe & Ethical', desc: 'Your security is paramount. We emphasize risk management and help you identify digital threats before they arise.', icon: <ShieldCheck className="text-green-500" /> }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-10 text-center border-main hover:border-primary-blue transition-all group"
              >
                <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl shadow-sm border-main group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-surface-alt">
        <div className="container">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Our Commitment to Transparency</h2>
             <p className="text-muted max-w-2xl mx-auto">We are clear about what we offer and what we do not. Integrity is at the heart of everything we do.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-10 bg-surface border-green-500/20 shadow-xl shadow-green-500/5 h-full"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-green-600">
                <CheckCircle2 size={28} /> What We Provide
              </h3>
              <ul className="space-y-6">
                {[
                  'Free educational guides on freelancing and digital marketing.',
                  'Basics of financial markets and trading for learning purposes.',
                  'Roadmaps for learning web development and digital skills.',
                  'Tips for identifying and avoiding online earning scams in India.',
                  'Practical tools to help you calculate rates and manage risk.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-10 bg-surface border-red-500/20 shadow-xl shadow-red-500/5 h-full"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-600">
                <XCircle size={28} /> What We DON&apos;T Provide
              </h3>
              <ul className="space-y-6">
                {[
                  'Financial advice or investment recommendations.',
                  'Guaranteed profit claims or income promises.',
                  'Paid "tips" or "signals" for trading.',
                  'Promotion of illegal or unethical earning methods.',
                  'Access to your personal financial accounts or funds.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-1 rounded-full text-red-600">
                      <XCircle size={16} />
                    </div>
                    <span className="text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
                <Target size={14} />
                <span>Our Future Vision</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Building a Digitally Literate India, One Learner at a Time.</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                We believe that every Indian with an internet connection should have access to the knowledge required to participate in the global digital economy. Our content is designed to be accessible, simple, and most importantly, practical.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Scaling Education', desc: 'Reaching learners in Tier 2 and Tier 3 cities across India.' },
                  { title: 'Real-World Skills', desc: 'Focusing on what works in the actual market today.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface-alt border-main">
                    <div className="w-10 h-10 bg-primary-blue text-white rounded-xl flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-surface p-12 lg:p-20 rounded-[3rem] border-main shadow-2xl text-center flex flex-col items-center">
                 <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center text-primary-blue mb-8">
                   <Mountain size={48} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Reaching New Heights</h3>
                 <p className="text-muted text-sm">Join us on our mission to educate 1 Million Indian learners by 2028.</p>
                 <div className="mt-10 flex gap-2">
                   {[1, 2, 3, 4, 5].map(i => (
                     <div key={i} className="w-2 h-2 rounded-full bg-primary-blue/30"></div>
                   ))}
                   <div className="w-8 h-2 rounded-full bg-primary-blue"></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <section className="py-24 bg-surface-alt">
        <div className="container max-w-4xl">
           <div className="card p-12 lg:p-16 border-main shadow-sm text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-primary-blue"></div>
             <h2 className="text-3xl font-bold mb-6">Revenue Transparency</h2>
             <p className="text-muted mb-12">How we keep this platform 100% free for everyone.</p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="p-8 bg-surface rounded-2xl border-main text-left">
                 <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                   <LinkIcon size={24} />
                 </div>
                 <h4 className="font-bold mb-3">Affiliate Links</h4>
                 <p className="text-sm text-muted mb-0">We may earn a small commission if you choose to purchase a tool we recommend, at no extra cost to you.</p>
               </div>
               <div className="p-8 bg-surface rounded-2xl border-main text-left">
                 <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                   <Layout size={24} />
                 </div>
                 <h4 className="font-bold mb-3">Minimal Display Ads</h4>
                 <p className="text-sm text-muted mb-0">We show non-intrusive educational ads on our platform to cover basic hosting and operational costs.</p>
               </div>
             </div>

             <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-500/10 flex items-center gap-4">
               <Sparkles size={24} className="text-primary-blue flex-shrink-0" />
               <p className="text-sm text-muted font-medium mb-0 text-left">
                 <strong>Our Independence Promise:</strong> We never recommend a service for the commission alone. We only feature tools that genuinely help our learners succeed.
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
