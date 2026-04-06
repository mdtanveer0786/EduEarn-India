import { useState } from 'react';
import { Globe, Search, Copy, CheckCircle2 } from 'lucide-react';

const DomainGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const prefixes = ['get', 'the', 'my', 'try', 'go', 'use', 'join', 'weare', 'hello'];
  const suffixes = ['hub', 'app', 'hq', 'lab', 'io', 'tech', 'ify', 'ly', 'base', 'space'];
  const extensions = ['.com', '.in', '.co.in', '.io', '.tech'];

  const generateDomains = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    const cleanWord = keyword.toLowerCase().replace(/[^a-z0-9]/g, '');
    let generated = [];

    // Exact matches with different extensions
    extensions.forEach(ext => {
      generated.push({ name: `${cleanWord}${ext}`, type: 'Exact Match' });
    });

    // Prefixes
    prefixes.slice(0, 4).forEach(prefix => {
      generated.push({ name: `${prefix}${cleanWord}.com`, type: 'Prefix' });
    });

    // Suffixes
    suffixes.slice(0, 4).forEach(suffix => {
      generated.push({ name: `${cleanWord}${suffix}.com`, type: 'Suffix' });
    });

    // Trendy
    generated.push({ name: `${cleanWord}hq.com`, type: 'Trendy' });
    generated.push({ name: `${cleanWord}app.in`, type: 'Trendy' });
    generated.push({ name: `get${cleanWord}.in`, type: 'Trendy' });

    // Shuffle and cap at 15
    setResults(generated.sort(() => 0.5 - Math.random()).slice(0, 15));
    setCopiedIndex(null);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const openNamecheap = (domain) => {
    window.open(`https://www.namecheap.com/domains/registration/results/?domain=${domain}`, '_blank');
  };

  return (
    <div className="tool-container pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl flex items-center justify-center">
          <Globe size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Domain Name Generator</h2>
          <p className="text-muted text-sm m-0">Find creative domain name ideas for your next digital project.</p>
        </div>
      </div>

      <form onSubmit={generateDomains} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Enter a keyword (e.g., 'finance', 'learn', 'tech')" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full bg-surface-alt border-main rounded-xl py-3.5 px-4 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-orange-500/20">
            Generate Ideas
          </button>
        </div>
      </form>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((domain, idx) => (
            <div key={idx} className="bg-surface-alt border-main p-4 rounded-xl flex flex-col hover:border-orange-500 transition-colors group">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">{domain.type}</span>
                <button 
                  onClick={() => copyToClipboard(domain.name, idx)}
                  className="text-muted hover:text-orange-500 transition-colors"
                  aria-label="Copy to clipboard"
                >
                  {copiedIndex === idx ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>
              <p className="font-mono text-lg font-bold text-main mb-4 truncate">{domain.name}</p>
              <button 
                onClick={() => openNamecheap(domain.name)}
                className="mt-auto w-full py-2 bg-surface hover:bg-orange-50 dark:hover:bg-orange-900/10 border-main text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:border-orange-300 group-hover:text-orange-600"
              >
                <Search size={14} /> Check Availability
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-surface-alt border-main border-dashed rounded-2xl">
          <Globe size={48} className="mx-auto mb-4 text-muted opacity-50" />
          <p className="font-bold text-lg mb-2">No ideas generated yet.</p>
          <p className="text-muted text-sm">Enter a core keyword above to see smart variations and extensions.</p>
        </div>
      )}
    </div>
  );
};

export default DomainGenerator;
