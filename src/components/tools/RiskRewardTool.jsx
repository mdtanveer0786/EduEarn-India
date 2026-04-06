import { useState, useMemo } from 'react';
import { Target, AlertTriangle, CheckCircle2 } from 'lucide-react';

const RiskRewardTool = () => {
  const [entryPrice, setEntryPrice] = useState(100);
  const [stopLoss, setStopLoss] = useState(95);
  const [targetPrice, setTargetPrice] = useState(115);
  const [tradeType, setTradeType] = useState('long'); // 'long' or 'short'

  const results = useMemo(() => {
    let risk, reward, ratio;

    if (tradeType === 'long') {
      risk = entryPrice - stopLoss;
      reward = targetPrice - entryPrice;
    } else {
      risk = stopLoss - entryPrice;
      reward = entryPrice - targetPrice;
    }

    // Handle invalid inputs gracefully
    if (risk <= 0 || entryPrice <= 0 || stopLoss <= 0 || targetPrice <= 0) {
      return { isValid: false, risk: 0, reward: 0, ratio: 0, status: 'invalid' };
    }

    ratio = reward / risk;
    
    let status = 'poor';
    if (ratio >= 2) status = 'excellent';
    else if (ratio >= 1.5) status = 'good';
    else if (ratio >= 1) status = 'fair';

    return { 
      isValid: true, 
      risk: parseFloat(risk.toFixed(2)), 
      reward: parseFloat(reward.toFixed(2)), 
      ratio: parseFloat(ratio.toFixed(2)), 
      status 
    };
  }, [entryPrice, stopLoss, targetPrice, tradeType]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent': return 'text-green-500 bg-green-50 dark:bg-green-900/10 border-green-200';
      case 'good': return 'text-blue-500 bg-blue-50 dark:bg-blue-900/10 border-blue-200';
      case 'fair': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200';
      case 'poor': 
      case 'invalid': return 'text-red-500 bg-red-50 dark:bg-red-900/10 border-red-200';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusMessage = (status) => {
    switch(status) {
      case 'excellent': return 'Excellent setup. Meets the golden 1:2 standard.';
      case 'good': return 'Good setup, but ideally look for 1:2 or higher.';
      case 'fair': return 'Fair setup. You must win >50% of trades to be profitable.';
      case 'poor': return 'Poor setup. The risk outweighs or equals the reward.';
      case 'invalid': return 'Invalid inputs. Check your prices based on trade type.';
      default: return '';
    }
  };

  return (
    <div className="tool-container pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-xl flex items-center justify-center">
          <Target size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Risk-Reward Calculator</h2>
          <p className="text-muted text-sm m-0">Evaluate the mathematical viability of your educational trade setups.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface-alt p-6 border-main rounded-2xl">
          <div className="flex bg-surface border-main p-1 rounded-xl mb-6">
            <button 
              className={`flex-1 py-2 font-bold text-sm rounded-lg transition-colors ${tradeType === 'long' ? 'bg-primary-blue text-white shadow-sm' : 'text-muted hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              onClick={() => { setTradeType('long'); setStopLoss(entryPrice * 0.95); setTargetPrice(entryPrice * 1.15); }}
            >
              LONG (Buy)
            </button>
            <button 
              className={`flex-1 py-2 font-bold text-sm rounded-lg transition-colors ${tradeType === 'short' ? 'bg-red-500 text-white shadow-sm' : 'text-muted hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              onClick={() => { setTradeType('short'); setStopLoss(entryPrice * 1.05); setTargetPrice(entryPrice * 0.85); }}
            >
              SHORT (Sell)
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Entry Price (₹)</label>
              <input 
                type="number" 
                value={entryPrice} 
                onChange={(e) => setEntryPrice(Number(e.target.value))}
                className="w-full bg-surface border-main rounded-lg py-2.5 px-4 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-red-500">Stop Loss Price (₹) {tradeType === 'long' ? '< Entry' : '> Entry'}</label>
              <input 
                type="number" 
                value={stopLoss} 
                onChange={(e) => setStopLoss(Number(e.target.value))}
                className="w-full bg-surface border-red-500/30 rounded-lg py-2.5 px-4 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-green-500">Target Price (₹) {tradeType === 'long' ? '> Entry' : '< Entry'}</label>
              <input 
                type="number" 
                value={targetPrice} 
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full bg-surface border-green-500/30 rounded-lg py-2.5 px-4 focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className={`flex-grow border rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-colors ${getStatusColor(results.status)}`}>
            <p className="text-sm font-extrabold uppercase tracking-widest mb-2 opacity-80">Risk : Reward Ratio</p>
            
            {results.isValid ? (
              <>
                <div className="text-5xl lg:text-7xl font-black mb-4">
                  1 : {results.ratio}
                </div>
                <div className="flex gap-6 mb-6 w-full justify-center">
                  <div className="text-center">
                    <p className="text-xs uppercase font-bold opacity-70">Risk per Share</p>
                    <p className="text-lg font-bold">₹{results.risk}</p>
                  </div>
                  <div className="w-px bg-current opacity-20"></div>
                  <div className="text-center">
                    <p className="text-xs uppercase font-bold opacity-70">Reward per Share</p>
                    <p className="text-lg font-bold">₹{results.reward}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-black/20 rounded-full font-bold text-sm">
                  {results.status === 'excellent' || results.status === 'good' ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
                  {getStatusMessage(results.status)}
                </div>
              </>
            ) : (
              <div className="py-10">
                <AlertTriangle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-bold">Invalid parameters.</p>
                <p className="text-sm opacity-80 mt-2">
                  {tradeType === 'long' 
                    ? "For a LONG trade, Stop Loss must be below Entry, and Target must be above Entry." 
                    : "For a SHORT trade, Stop Loss must be above Entry, and Target must be below Entry."}
                </p>
              </div>
            )}
          </div>
          
          <p className="text-xs text-muted text-center mt-4">
            * This tool is strictly for educational mathematical analysis. It does not constitute financial advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskRewardTool;
