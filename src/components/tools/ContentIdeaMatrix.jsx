import { useState } from 'react';
import { Lightbulb, LayoutGrid, FileText, CheckCircle2, Copy } from 'lucide-react';

const ContentIdeaMatrix = () => {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const generateIdeas = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    const t = topic.trim();
    
    const matrix = {
      listicles: [
        `Top 10 ${t} Tools Every Beginner Needs in 2026`,
        `5 Common Mistakes People Make With ${t}`,
        `7 Free Resources to Master ${t} Today`
      ],
      howTos: [
        `How to Start With ${t}: A Step-by-Step Guide`,
        `The Ultimate Guide to Making Money With ${t}`,
        `How to Setup Your First ${t} Project in 10 Minutes`
      ],
      caseStudies: [
        `How I Used ${t} to Double My Productivity/Income`,
        `Case Study: The Impact of ${t} on Small Businesses`,
        `Why Brands Are Shifting to ${t} (And You Should Too)`
      ],
      myths: [
        `Stop Believing These 3 Myths About ${t}`,
        `The Brutal Truth About ${t} Nobody Tells You`,
        `Is ${t} Dead? Here's What the Data Says`
      ]
    };

    setIdeas(matrix);
    setCopiedId(null);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const Section = ({ title, items, idPrefix }) => (
    <div className="bg-surface-alt border-main rounded-2xl p-5 hover:border-yellow-500/50 transition-colors">
      <h3 className="font-bold flex items-center gap-2 mb-4 text-sm uppercase tracking-widest text-muted">
        <FileText size={16} /> {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const id = `${idPrefix}-${idx}`;
          return (
            <div key={idx} className="flex items-start justify-between gap-3 p-3 bg-surface border-main rounded-xl group/item">
              <span className="text-sm font-medium leading-relaxed">{item}</span>
              <button 
                onClick={() => copyToClipboard(item, id)}
                className="text-muted opacity-0 group-hover/item:opacity-100 hover:text-yellow-500 transition-all flex-shrink-0"
                aria-label="Copy title"
              >
                {copiedId === id ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="tool-container pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-xl flex items-center justify-center">
          <Lightbulb size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Content Idea Matrix</h2>
          <p className="text-muted text-sm m-0">Generate instantly usable blog titles and video ideas for any topic.</p>
        </div>
      </div>

      <form onSubmit={generateIdeas} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Enter a broad topic (e.g., 'React', 'Affiliate Marketing')" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-surface-alt border-main rounded-xl py-3.5 px-4 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-yellow-500/20">
            Generate Matrix
          </button>
        </div>
      </form>

      {ideas ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Section title="Listicles & Resources" items={ideas.listicles} idPrefix="list" />
          <Section title="How-To's & Tutorials" items={ideas.howTos} idPrefix="how" />
          <Section title="Case Studies & Results" items={ideas.caseStudies} idPrefix="case" />
          <Section title="Myths & Controversy" items={ideas.myths} idPrefix="myth" />
        </div>
      ) : (
        <div className="text-center py-16 bg-surface-alt border-main border-dashed rounded-2xl">
          <LayoutGrid size={48} className="mx-auto mb-4 text-muted opacity-50" />
          <p className="font-bold text-lg mb-2">Matrix is empty.</p>
          <p className="text-muted text-sm max-w-md mx-auto">
            Stuck on what to write or film next? Enter your core niche above to generate proven content frameworks instantly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentIdeaMatrix;
