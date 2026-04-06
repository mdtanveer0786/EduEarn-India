import { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const checklistData = [
  {
    category: 'On-Page SEO',
    items: [
      { id: 'op1', text: 'Include primary keyword in the Title Tag (H1)' },
      { id: 'op2', text: 'Keep Title Tag under 60 characters' },
      { id: 'op3', text: 'Write a compelling meta description (under 155 chars) with the keyword' },
      { id: 'op4', text: 'Include keyword in the URL slug (e.g. /my-keyword)' },
      { id: 'op5', text: 'Use H2 and H3 tags to logically structure content' },
      { id: 'op6', text: 'Add descriptive Alt text to all images' }
    ]
  },
  {
    category: 'Technical SEO',
    items: [
      { id: 'ts1', text: 'Ensure the page loads in under 3 seconds' },
      { id: 'ts2', text: 'Verify the page is fully mobile-friendly / responsive' },
      { id: 'ts3', text: 'Install an active SSL certificate (HTTPS)' },
      { id: 'ts4', text: 'Ensure page is linked to your XML Sitemap' },
      { id: 'ts5', text: 'Fix any broken internal or external links' }
    ]
  },
  {
    category: 'Content Quality',
    items: [
      { id: 'cq1', text: 'Ensure content matches the search intent of the user' },
      { id: 'cq2', text: 'Write comprehensive content that answers user questions fully' },
      { id: 'cq3', text: 'Include internal links to other relevant pages on your site' },
      { id: 'cq4', text: 'Include external links to high-authority, relevant sources' },
      { id: 'cq5', text: 'Break up large text blocks with lists, images, or quotes' }
    ]
  }
];

const SEOChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateProgress = () => {
    const total = checklistData.reduce((acc, cat) => acc + cat.items.length, 0);
    const checked = Object.values(checkedItems).filter(Boolean).length;
    return {
      total,
      checked,
      percentage: Math.round((checked / total) * 100) || 0
    };
  };

  const progress = calculateProgress();

  return (
    <div className="tool-container pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">SEO Checklist Tool</h2>
          <p className="text-muted text-sm m-0">Validate your content before hitting publish to ensure maximum visibility.</p>
        </div>
      </div>

      <div className="bg-surface-alt border-main rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Optimization Score</p>
            <p className="text-3xl font-extrabold text-purple-600">{progress.percentage}%</p>
          </div>
          <p className="text-sm font-bold text-muted">{progress.checked} of {progress.total} Tasks Completed</p>
        </div>
        <div className="w-full bg-surface border-main rounded-full h-3 overflow-hidden">
          <div 
            className="bg-purple-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        {checklistData.map((category, idx) => (
          <div key={idx} className="bg-surface border-main rounded-2xl overflow-hidden">
            <div className="bg-surface-alt border-b border-main p-4">
              <h3 className="font-bold flex items-center gap-2">
                <ChevronRight size={18} className="text-purple-500" />
                {category.category}
              </h3>
            </div>
            <div className="p-2">
              {category.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-start gap-3 p-3 hover:bg-surface-alt transition-colors rounded-xl"
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${isChecked ? 'bg-purple-500 text-white' : 'bg-surface-alt border-main'}`}>
                      {isChecked && <CheckCircle2 size={16} />}
                    </div>
                    <span className={`text-sm md:text-base transition-colors ${isChecked ? 'text-muted line-through' : 'text-main font-medium'}`}>
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button 
          onClick={() => setCheckedItems({})}
          className="text-sm font-bold text-muted hover:text-purple-500 transition-colors"
        >
          Reset Checklist
        </button>
      </div>
    </div>
  );
};

export default SEOChecklist;
