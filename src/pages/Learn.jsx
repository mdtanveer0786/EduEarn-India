import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Code, 
  BarChart, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Zap,
  Target,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';

const Learn = () => {
  const learningPaths = [
    {
      id: 'online-earning-mastery',
      categoryId: 'online-earning',
      title: 'Online Earning Mastery',
      level: 'Beginner to Intermediate',
      icon: <Zap className="text-blue-500" />,
      description: 'A complete roadmap to starting your journey in the world of online earning, focusing on legal and sustainable methods in India.',
      modules: ['Freelancing Basics', 'Content Writing', 'Affiliate Marketing', 'Digital Services'],
      lessons: 15,
      hours: 12,
      color: 'blue'
    },
    {
      id: 'trading-fundamentals',
      categoryId: 'trading-basics',
      title: 'Trading Fundamentals',
      level: 'Beginner',
      icon: <TrendingUp className="text-green-500" />,
      description: 'Learn the basic concepts of financial markets, technical analysis, and risk management for educational purposes.',
      modules: ['Market Basics', 'Reading Charts', 'Risk Management', 'Investing vs Trading'],
      lessons: 12,
      hours: 10,
      color: 'green'
    },
    {
      id: 'digital-marketing-skills',
      categoryId: 'digital-skills',
      title: 'Digital Marketing Skills',
      level: 'Beginner to Pro',
      icon: <BarChart className="text-purple-500" />,
      description: 'Master the essential skills needed to build an online presence and grow businesses in the digital era.',
      modules: ['SEO Basics', 'Social Media Strategy', 'Email Marketing', 'Analytics'],
      lessons: 18,
      hours: 15,
      color: 'purple'
    },
    {
      id: 'web-development-start',
      categoryId: 'tech',
      title: 'Web Development Start',
      level: 'Beginner',
      icon: <Code className="text-orange-500" />,
      description: 'Learn the foundational technologies of the web and start building your own websites from scratch.',
      modules: ['HTML5 & CSS3', 'Responsive Design', 'JavaScript Basics', 'Hosting'],
      lessons: 20,
      hours: 25,
      color: 'orange'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="learn-page pb-20">
      <SEO 
        title="Learning Paths" 
        description="Structured educational roadmaps to master online earning, trading basics, and digital skills. Start your learning journey with EduEarn India."
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
              <Sparkles size={16} />
              <span>Free Structured Education</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Curated <span className="text-primary-blue">Learning Paths</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
              Skip the guesswork. Our step-by-step roadmaps are designed to take you from zero to proficient in the most in-demand digital fields.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Grid */}
      <section className="py-10">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {learningPaths.map((path) => (
              <motion.div key={path.id} variants={itemVariants} className="card group hover:border-primary-blue transition-all">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-surface-alt rounded-2xl flex items-center justify-center text-2xl border-main shadow-sm group-hover:scale-110 transition-transform">
                      {path.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-muted">
                      {path.level}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary-blue transition-colors">
                    {path.title}
                  </h2>
                  <p className="text-muted mb-8 line-clamp-2">
                    {path.description}
                  </p>

                  <div className="bg-surface-alt rounded-2xl p-6 mb-8 border-main">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                      <Target size={16} />
                      What you&apos;ll master
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {path.modules.map((module, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between py-6 mt-auto border-t border-gray-100 dark:border-gray-800">
                    <div className="flex gap-6">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-primary-blue">{path.lessons}</span>
                        <span className="text-xs text-muted uppercase font-bold tracking-widest">Lessons</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-primary-blue">{path.hours}h</span>
                        <span className="text-xs text-muted uppercase font-bold tracking-widest">Duration</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog?category=${path.categoryId}`} 
                      className="btn btn-primary"
                    >
                      Start Path <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-surface-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A Proven Learning Framework</h2>
            <p className="text-muted max-w-2xl mx-auto">We follow a scientific approach to learning that ensures retention and practical application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700 -z-10"></div>
            
            {[
              { title: 'Theory & Foundations', desc: 'Grasp the core concepts through our detailed, beginner-friendly written guides.', icon: <BookOpen className="text-blue-500" /> },
              { title: 'Structured Progression', desc: 'Follow the module-by-module sequence to build complexity as you grow.', icon: <Layers className="text-purple-500" /> },
              { title: 'Practical Application', desc: 'Use our calculators and tools to apply what you have learned to real scenarios.', icon: <CheckCircle2 className="text-green-500" /> }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-8 text-3xl shadow-xl border-main relative">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-blue text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <HelpCircle size={32} className="text-primary-blue" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: 'Are these learning paths completely free?', a: 'Yes, absolutely. Every single module, lesson, and guide on EduEarn India is 100% free of cost. We believe quality education should be accessible to all.' },
              { q: 'How long does it take to complete a path?', a: 'The duration varies by path, ranging from 10 to 25 hours of study material. However, since it is self-paced, you can take as long as you need to master the concepts.' },
              { q: 'Is the trading education reliable?', a: 'Our trading content is strictly for educational purposes, focusing on technical analysis and market mechanics. We never provide tips or financial advice.' },
              { q: 'Do you offer placement assistance?', a: 'No, we are an educational platform. We provide the knowledge and tools, but finding jobs or projects is up to your individual effort and application of skills.' }
            ].map((faq, i) => (
              <div key={i} className="card p-8 border-main hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                <h3 className="text-lg font-bold mb-4 flex items-start gap-3">
                  <span className="text-primary-blue">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-muted pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
