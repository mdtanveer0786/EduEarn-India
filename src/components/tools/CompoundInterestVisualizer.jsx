import { useState, useMemo } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

const CompoundInterestVisualizer = () => {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const results = useMemo(() => {
    let totalInvested = principal;
    let currentBalance = principal;
    let data = [];

    for (let i = 1; i <= years; i++) {
      // Add monthly contributions for the year
      for (let m = 1; m <= 12; m++) {
        currentBalance += monthlyContribution;
        totalInvested += monthlyContribution;
        // Compound interest monthly
        currentBalance += currentBalance * (rate / 100 / 12);
      }
      
      data.push({
        year: i,
        invested: Math.round(totalInvested),
        balance: Math.round(currentBalance),
        interest: Math.round(currentBalance - totalInvested)
      });
    }

    return {
      finalBalance: data[data.length - 1]?.balance || 0,
      totalInvested: data[data.length - 1]?.invested || 0,
      totalInterest: data[data.length - 1]?.interest || 0,
      yearlyData: data
    };
  }, [principal, monthlyContribution, years, rate]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="tool-container pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center">
          <TrendingUp size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Compound Interest Visualizer</h2>
          <p className="text-muted text-sm m-0">See how your money grows over time with the power of compounding.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-alt p-6 border-main rounded-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Initial Investment (₹)</label>
                <input 
                  type="number" 
                  value={principal} 
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full bg-surface border-main rounded-lg py-2.5 px-4 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Monthly SIP (₹)</label>
                <input 
                  type="number" 
                  value={monthlyContribution} 
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full bg-surface border-main rounded-lg py-2.5 px-4 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Expected Return Rate (%)</label>
                <input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full bg-surface border-main rounded-lg py-2.5 px-4 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Time Period (Years)</label>
                <input 
                  type="range" 
                  min="1" max="40" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-green-500"
                />
                <div className="text-right text-sm font-bold text-green-500 mt-1">{years} Years</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-200/50 dark:border-green-900/30">
              <p className="text-sm text-green-600 dark:text-green-400 font-bold uppercase tracking-widest mb-1">Total Value</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-green-600">{formatCurrency(results.finalBalance)}</p>
            </div>
            <div className="bg-surface-alt p-6 rounded-2xl border-main">
              <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">Total Invested</p>
              <p className="text-xl font-bold">{formatCurrency(results.totalInvested)}</p>
            </div>
            <div className="bg-surface-alt p-6 rounded-2xl border-main">
              <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">Est. Returns</p>
              <p className="text-xl font-bold">{formatCurrency(results.totalInterest)}</p>
            </div>
          </div>

          <div className="bg-surface-alt border-main rounded-2xl p-6 overflow-hidden">
            <h3 className="text-lg font-bold mb-4">Wealth Projection</h3>
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
              {results.yearlyData.map((d) => {
                const maxBalance = results.finalBalance;
                const widthPercent = (d.balance / maxBalance) * 100;
                
                return (
                  <div key={d.year} className="flex items-center gap-4">
                    <div className="w-16 text-xs font-bold text-muted text-right">Year {d.year}</div>
                    <div className="flex-grow bg-surface border-main rounded-full h-4 overflow-hidden flex">
                      <div className="bg-blue-500 h-full" style={{ width: `${(d.invested / maxBalance) * 100}%` }}></div>
                      <div className="bg-green-500 h-full" style={{ width: `${(d.interest / maxBalance) * 100}%` }}></div>
                    </div>
                    <div className="w-24 text-xs font-bold text-right">{formatCurrency(d.balance)}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 mt-6 justify-center text-xs font-bold">
              <div className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded-sm"></span> Invested Amount</div>
              <div className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded-sm"></span> Wealth Gained</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestVisualizer;
