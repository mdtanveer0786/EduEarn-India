import { useState, useEffect } from 'react';
import { Calculator, IndianRupee, Info, RefreshCcw } from 'lucide-react';

const FreelanceCalculator = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(25000);
  const [desiredProfit, setDesiredProfit] = useState(30000);
  const [billableDays, setBillableDays] = useState(20);
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [taxRate, setTaxRate] = useState(10);
  
  const [results, setResults] = useState({
    hourlyRate: 0,
    dailyRate: 0,
    monthlyTarget: 0,
    yearlyTarget: 0
  });

  useEffect(() => {
    const calculate = () => {
      const grossMonthly = (monthlyExpenses + desiredProfit) / (1 - taxRate / 100);
      const totalMonthlyHours = billableDays * hoursPerDay;
      const hourlyRate = grossMonthly / totalMonthlyHours;
      
      setResults({
        hourlyRate: Math.round(hourlyRate),
        dailyRate: Math.round(hourlyRate * hoursPerDay),
        monthlyTarget: Math.round(grossMonthly),
        yearlyTarget: Math.round(grossMonthly * 12)
      });
    };
    
    calculate();
  }, [monthlyExpenses, desiredProfit, billableDays, hoursPerDay, taxRate]);

  return (
    <div className="freelance-calculator p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 text-primary rounded-lg">
          <Calculator size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Freelance Rate Calculator</h2>
          <p className="text-gray-500 text-sm">Determine your ideal rate based on Indian market standards.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="inputs-section space-y-4">
          <div className="form-group">
            <label className="flex items-center gap-2 mb-2">
              <IndianRupee size={16} /> Monthly Personal Expenses
            </label>
            <input 
              type="number" 
              value={monthlyExpenses} 
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          
          <div className="form-group">
            <label className="flex items-center gap-2 mb-2">
              <RefreshCcw size={16} /> Desired Monthly Savings/Profit
            </label>
            <input 
              type="number" 
              value={desiredProfit} 
              onChange={(e) => setDesiredProfit(Number(e.target.value))}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="block mb-2">Billable Days/Month</label>
              <input 
                type="number" 
                value={billableDays} 
                onChange={(e) => setBillableDays(Number(e.target.value))}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="form-group">
              <label className="block mb-2">Hours/Day</label>
              <input 
                type="number" 
                value={hoursPerDay} 
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="block mb-2">Tax Estimate (%)</label>
            <input 
              type="number" 
              value={taxRate} 
              onChange={(e) => setTaxRate(Number(e.target.value))}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <div className="results-section bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-primary/20">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Info size={18} className="text-primary" /> Your Target Rates
          </h3>
          
          <div className="space-y-6">
            <div className="result-item">
              <p className="text-sm text-gray-500 uppercase tracking-wider">Recommended Hourly Rate</p>
              <p className="text-4xl font-bold text-primary">₹{results.hourlyRate.toLocaleString()}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="result-item">
                <p className="text-xs text-gray-500 uppercase">Daily Rate</p>
                <p className="text-xl font-bold">₹{results.dailyRate.toLocaleString()}</p>
              </div>
              <div className="result-item">
                <p className="text-xs text-gray-500 uppercase">Monthly Target</p>
                <p className="text-xl font-bold">₹{results.monthlyTarget.toLocaleString()}</p>
              </div>
            </div>

            <div className="pt-4 border-top border-gray-200 dark:border-gray-700">
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="text-xs text-primary font-bold uppercase mb-1">Estimated Annual Income</p>
                <p className="text-2xl font-bold">₹{results.yearlyTarget.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm flex gap-3">
        <Info className="flex-shrink-0" size={20} />
        <p>
          <strong>Tip:</strong> Most freelancers in India forget to account for 18% GST (if applicable) and platform fees (up to 20% on Upwork/Fiverr). Adjust your rates accordingly!
        </p>
      </div>
    </div>
  );
};

export default FreelanceCalculator;
