import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PammCalculator.css";

const PAMMCalculator = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  const [startingBalance, setStartingBalance] = useState("");
  const [Months, setMonths] = useState("");
  const [gainPerMonths, setGainPerMonths] = useState("");
  const [additionalDeposit, setAdditionalDeposit] = useState("");
  const [withdrawalPerMonths, setWithdrawalPerMonths] = useState("");
  const [calculatedResults, setCalculatedResults] = useState([]);

  const handleCalculate = () => {
    if (startingBalance && Months && gainPerMonths) {
      const results = [];
      let currentBalance = parseFloat(startingBalance);
      let totalProfit = 0;
      let totalGain = 0;

      for (let i = 1; i <= Months; i++) {
        const startingPeriodBalance = currentBalance;
        const gain = currentBalance * (parseFloat(gainPerMonths) / 100);
        currentBalance += gain;

        // Advanced mode adjustments
        if (isSwitched) {
          if (additionalDeposit) currentBalance += parseFloat(additionalDeposit);
          if (withdrawalPerMonths) currentBalance -= parseFloat(withdrawalPerMonths);
        }

        totalProfit += gain;
        totalGain = currentBalance - parseFloat(startingBalance);

        results.push({
          Months: i,
          startingBalance: startingPeriodBalance.toFixed(2),
          endingBalance: currentBalance.toFixed(2),
          gain: gain.toFixed(2),
          totalProfit: totalProfit.toFixed(2),
          totalGain: totalGain.toFixed(2),
          withdrawal: isSwitched ? parseFloat(withdrawalPerMonths || 0).toFixed(2) : "N/A",
        });
      }

      setCalculatedResults(results);
    }
  };

  return (
    <div
    className={`calculator-container ${
      calculatedResults.length > 0 ? "expanded" : "compact"
    }`}
  >
      {/* Card */}
      <div className="card">
        <header className="card-header">
          <h2 className="card-title">PAMM Compound Calculator</h2>
        </header>
        <div className="card-content">
          {/* Input Fields */}
          <div className="form-group">
            <label htmlFor="starting-balance" className="label">
              Starting Balance:
            </label>
            <input
              type="number"
              id="starting-balance"
              className="input"
              placeholder="Enter starting balance"
              value={startingBalance}
              onChange={(e) => setStartingBalance(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Months" className="label">
              Months:
            </label>
            <input
              type="number"
              id="Months"
              className="input"
              placeholder="Enter number of Months"
              value={Months}
              onChange={(e) => setMonths(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gain-per-Months" className="label">
              Gain per Months (%):
            </label>
            <input
              type="number"
              id="gain-per-Months"
              className="input"
              placeholder="Enter gain per Months (%)"
              value={gainPerMonths}
              onChange={(e) => setGainPerMonths(e.target.value)}
            />
          </div>

          {/* Advanced Mode Inputs */}
          <div className="form-group switch-group">
            <label className="label">Enable Advanced Mode:</label>
            <div
              className={`switch ${isSwitched ? "switch-on" : ""}`}
              onClick={() => setIsSwitched(!isSwitched)}
            >
              <div className="switch-handle" />
            </div>
          </div>
          <div></div>

          {isSwitched && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="advanced-mode"
              >
                <div className="form-group">
                  <label htmlFor="additional-deposit" className="label">
                    Additional Deposit per Months:
                  </label>
                  <input
                    type="number"
                    id="additional-deposit"
                    className="input"
                    placeholder="Enter deposit per Months"
                    value={additionalDeposit}
                    onChange={(e) => setAdditionalDeposit(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="withdrawal-per-Months" className="label">
                    Withdrawal per Months:
                  </label>
                  <input
                    type="number"
                    id="withdrawal-per-Months"
                    className="input"
                    placeholder="Enter withdrawal per Months"
                    value={withdrawalPerMonths}
                    onChange={(e) => setWithdrawalPerMonths(e.target.value)}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Button */}
          <button className="button" onClick={handleCalculate}>
            Calculate
          </button>

          {/* Results Table */}
          <AnimatePresence>
            {calculatedResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Months</th>
                      <th>Starting Balance</th>
                      <th>Ending Balance</th>
                      <th>Gain</th>
                      <th>Total Profit</th>
                      <th>Total Gain</th>
                      <th>Withdrawal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculatedResults.map((result) => (
                      <tr key={result.Months}>
                        <td>{result.Months}</td>
                        <td>${result.startingBalance}</td>
                        <td>${result.endingBalance}</td>
                        <td>${result.gain}</td>
                        <td>${result.totalProfit}</td>
                        <td>${result.totalGain}</td>
                        <td>${result.withdrawal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PAMMCalculator;
