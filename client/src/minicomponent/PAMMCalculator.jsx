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
  const [performanceFee, setPerformanceFee] = useState("");
  const [calculatedResults, setCalculatedResults] = useState([]);
  const [errors, setErrors] = useState({
    startingBalance: "",
    months: "",
    gainPerMonths: "",
    performanceFee: "",
  });

  const validateInputs = () => {
    const newErrors = {
      startingBalance: "",
      months: "",
      gainPerMonths: "",
      performanceFee: "",
    };
    let isValid = true;

    if (!startingBalance || parseFloat(startingBalance) <= 0) {
      newErrors.startingBalance = "Starting balance must be a positive number";
      isValid = false;
    }

    if (!Months || parseInt(Months) <= 0) {
      newErrors.months = "Months must be a positive number";
      isValid = false;
    }

    if (!gainPerMonths || parseFloat(gainPerMonths) <= 0) {
      newErrors.gainPerMonths = "Gain per month must be a positive number";
      isValid = false;
    }

    if (isSwitched && performanceFee && (parseFloat(performanceFee) < 0 || parseFloat(performanceFee) > 100)) {
      newErrors.performanceFee = "Performance fee must be between 0 and 100";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCalculate = () => {
    if (!validateInputs()) return;

    const results = [];
    let currentBalance = parseFloat(startingBalance);
    let totalProfit = 0;
    let totalGain = 0;

    for (let i = 1; i <= Months; i++) {
      const startingPeriodBalance = currentBalance;
      const gain = currentBalance * (parseFloat(gainPerMonths) / 100);
      
      // Calculate performance fee if enabled
      let performanceFeeAmount = 0;
      if (isSwitched && performanceFee && gain > 0) {
        performanceFeeAmount = gain * (parseFloat(performanceFee) / 100);
      }
      
      // Add gain and subtract performance fee
      currentBalance += gain - performanceFeeAmount;

      // Advanced mode adjustments
      if (isSwitched) {
        if (additionalDeposit) currentBalance += parseFloat(additionalDeposit);
        if (withdrawalPerMonths) currentBalance -= parseFloat(withdrawalPerMonths);
      }

      totalProfit += gain - performanceFeeAmount;
      totalGain = currentBalance - parseFloat(startingBalance);

      // Calculate average daily return (simplified to 30 days per month)
      const averageDailyReturn = (gain - performanceFeeAmount) / 30;

      const resultRow = {
        Months: i,
        startingBalance: startingPeriodBalance.toFixed(2),
        endingBalance: currentBalance.toFixed(2),
        gain: gain.toFixed(2),
        totalProfit: totalProfit.toFixed(2),
        totalGain: totalGain.toFixed(2),
        averageDailyReturn: averageDailyReturn.toFixed(2),
      };

      // Only add advanced mode fields if they have values
      if (isSwitched) {
        if (performanceFee) {
          resultRow.performanceFee = performanceFeeAmount.toFixed(2);
        }
        if (withdrawalPerMonths) {
          resultRow.withdrawal = parseFloat(withdrawalPerMonths).toFixed(2);
        }
      }

      results.push(resultRow);
    }

    setCalculatedResults(results);
  };

  return (
    <div className={`calculator-container ${calculatedResults.length > 0 ? "expanded" : "compact"}`}>
      <div className="card">
        <header className="card-header">
          <h2 className="card-title">PAMM Compound Calculator</h2>
        </header>
        <div className="card-content">
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
            {errors.startingBalance && <span className="error">{errors.startingBalance}</span>}
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
            {errors.months && <span className="error">{errors.months}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="gain-per-Months" className="label">
              Gain per Month (%):
            </label>
            <input
              type="number"
              id="gain-per-Months"
              className="input"
              placeholder="Enter gain per Month (%)"
              value={gainPerMonths}
              onChange={(e) => setGainPerMonths(e.target.value)}
            />
            {errors.gainPerMonths && <span className="error">{errors.gainPerMonths}</span>}
          </div>

          <div className="form-group switch-group">
            <label className="label">Enable Advanced Mode:</label>
            <div
              className={`switch ${isSwitched ? "switch-on" : ""}`}
              onClick={() => setIsSwitched(!isSwitched)}
            >
              <div className="switch-handle" />
            </div>
          </div>

          {isSwitched && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="advanced-mode"
              >
                <div className="form-group">
                  <label htmlFor="performance-fee" className="label">
                    Performance Fee (%):
                  </label>
                  <input
                    type="number"
                    id="performance-fee"
                    className="input"
                    placeholder="Enter performance fee percentage"
                    value={performanceFee}
                    onChange={(e) => setPerformanceFee(e.target.value)}
                  />
                  {errors.performanceFee && <span className="error">{errors.performanceFee}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="additional-deposit" className="label">
                    Additional Deposit per Month:
                  </label>
                  <input
                    type="number"
                    id="additional-deposit"
                    className="input"
                    placeholder="Enter deposit per Month"
                    value={additionalDeposit}
                    onChange={(e) => setAdditionalDeposit(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="withdrawal-per-Months" className="label">
                    Withdrawal per Month:
                  </label>
                  <input
                    type="number"
                    id="withdrawal-per-Months"
                    className="input"
                    placeholder="Enter withdrawal per Month"
                    value={withdrawalPerMonths}
                    onChange={(e) => setWithdrawalPerMonths(e.target.value)}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          <button className="button" onClick={handleCalculate}>
            Calculate
          </button>

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
                      {isSwitched && performanceFee && <th>Performance Fee</th>}
                      {isSwitched && withdrawalPerMonths && <th>Withdrawal</th>}
                      <th>Total Profit</th>
                      <th>Total Gain</th>
                      <th>Average Daily Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculatedResults.map((result) => (
                      <tr key={result.Months}>
                        <td>{result.Months}</td>
                        <td>${result.startingBalance}</td>
                        <td>${result.endingBalance}</td>
                        <td>${result.gain}</td>
                        {isSwitched && performanceFee && <td>${result.performanceFee}</td>}
                        {isSwitched && withdrawalPerMonths && <td>${result.withdrawal}</td>}
                        <td>${result.totalProfit}</td>
                        <td>${result.totalGain}</td>
                        <td>${result.averageDailyReturn}</td>
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
