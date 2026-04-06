import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  Info,
  X,
  Target,
  Sparkles,
  ExternalLink,
  BookOpen,
  Users,
  PlayCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import FreelanceCalculator from '../components/tools/FreelanceCalculator';
import CompoundInterestVisualizer from '../components/tools/CompoundInterestVisualizer';
import SEOChecklist from '../components/tools/SEOChecklist';
import RiskRewardTool from '../components/tools/RiskRewardTool';
import DomainGenerator from '../components/tools/DomainGenerator';
import ContentIdeaMatrix from '../components/tools/ContentIdeaMatrix';

const Tools = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      id: 1,
      title: 'Freelance Rate Calculator',
      description: 'Calculate your hourly or project rate based on your expenses and desired income in India.',
      category: 'earning',
      icon: <Calculator className="text-blue-500" />,
      tags: ['Freelancing', 'Finance'],
      component: <FreelanceCalculator />
    },
    {
      id: 2,
      title: 'Compound Interest Visualizer',
      description: 'See the power of compounding for your long-term educational investments and savings.',
      category: 'finance',
      icon: <TrendingUp className="text-green-500" />,
      tags: ['Investing', 'Education'],
      component: <CompoundInterestVisualizer />
    },
    {
      id: 3,
      title: 'SEO Checklist Tool',
      description: 'A comprehensive checklist to ensure your content is optimized for search engines.',
      category: 'marketing',
      icon: <CheckCircle2 className="text-purple-500" />,
      tags: ['SEO', 'Marketing'],
      component: <SEOChecklist />
    },
    {
      id: 4,
      title: 'Risk-Reward Ratio Tool',
      description: 'Learn how to calculate risk-reward ratios for educational market analysis.',
      category: 'finance',
      icon: <Target className="text-red-500" />,
      tags: ['Trading', 'Math'],
      component: <RiskRewardTool />
    },
    {
      id: 5,
      title: 'Domain Name Ideas Generator',
      description: 'Find creative domain names for your upcoming digital project or blog.',
      category: 'tech',
      icon: <Globe className="text-orange-500" />,
      tags: ['Web', 'Creative'],
      component: <DomainGenerator />
    },
    {
      id: 6,
      title: 'Content Idea Matrix',
      description: 'Generate endless content ideas for your blog or social media channels.',
      category: 'marketing',
      icon: <Lightbulb className="text-yellow-500" />,
      tags: ['Writing', 'Strategy'],
      component: <ContentIdeaMatrix />
    }
  ];

  const categories = ['all', 'earning', 'finance', 'marketing', 'tech'];

  const filteredTools = activeFilter === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeFilter);

  return (
    <div className="tools-page pb-20">
      <SEO 
        title="Free Educational Tools" 
        description="Handy calculators and resources for freelancers and students in India. Calculate rates, interest, and more."
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
              <span>Smart Resources for Smart Learners</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Powerful <span className="text-primary-blue">Free Tools</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
              Stop guessing and start calculating. Our free tools are designed to help you make data-driven decisions in your learning and earning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Filter */}
      <div className="sticky top-[72px] z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-y border-gray-100 dark:border-gray-800 py-4 mb-12">
        <div className="container overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-4 min-w-max pb-1">
            {categories.map(filter => (
              <button 
                key={filter}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${
                  activeFilter === filter 
                    ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-surface-alt text-muted hover:bg-gray-200 dark:hover:bg-gray-800 border-main'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="min-h-[400px]">
        <div className="container">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map(tool => (
                <motion.div 
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card group hover:border-primary-blue transition-all flex flex-col h-full"
                >
                  <div className="w-14 h-14 bg-surface-alt rounded-2xl flex items-center justify-center text-2xl mb-6 border-main shadow-sm group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-muted text-sm mb-6 flex-grow">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tool.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-muted border-main">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    className={`btn w-full font-bold py-3.5 flex items-center justify-center gap-2 group/btn ${
                      tool.component 
                        ? 'btn-primary' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed border-main'
                    }`} 
                    onClick={() => tool.component ? setSelectedTool(tool) : null}
                  >
                    {tool.component ? (
                      <>
                        Launch Tool <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      'Coming Soon'
                    )}
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Tool Modal/Overlay */}
          <AnimatePresence>
            {selectedTool && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-main"
                >
                  <div className="sticky top-0 right-0 p-4 flex justify-end z-50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
                    <button 
                      onClick={() => setSelectedTool(null)}
                      className="p-2 rounded-full bg-surface-alt hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 border-main"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="px-6 pb-10">
                    {selectedTool.component}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-24 p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-200/50 dark:border-blue-500/10 text-center max-w-3xl mx-auto">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
              <Info size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Important Disclaimer</h3>
            <p className="text-muted text-sm leading-relaxed">
              Our tools are designed for educational purposes only. The results provided are based on general formulas and your inputs. They should not be used as the sole basis for financial or legal decisions. Always consult with a qualified professional for specific advice.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Curated External Resources</h2>
            <p className="text-muted max-w-2xl mx-auto">High-quality, free resources from across the web to supplement your learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Top YouTube Educators', 
                desc: 'Highly recommended Indian channels for learning web dev, trading basics, and digital marketing.', 
                icon: <PlayCircle className="text-red-500" />,
                links: ['CodeWithHarry', 'AssetYogi', 'CA Rachana Ranade']
              },
              { 
                title: 'Free Knowledge Base', 
                desc: 'Official documentation and blogs from industry leaders in the digital space.', 
                icon: <BookOpen className="text-blue-500" />,
                links: ['MDN Web Docs', 'Investopedia', 'Google Search Central']
              },
              { 
                title: 'Support Communities', 
                desc: 'Active forums and groups where you can ask questions and share your progress.', 
                icon: <Users className="text-green-500" />,
                links: ['Stack Overflow', 'Indie Hackers', 'r/IndiaInvestments']
              }
            ].map((resource, i) => (
              <div key={i} className="card bg-surface-alt border-main hover:bg-surface transition-colors">
                <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-6 shadow-sm border-main">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{resource.desc}</p>
                <div className="space-y-3">
                  {resource.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="flex items-center justify-between text-sm font-bold text-primary-blue hover:underline"
                    >
                      {link}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
