import React, { useState } from "react";
import "./Calculator.css";
import Field from "../Field";
import termDeposit, { InterestPaidFrenquency } from "../../utils/termDeposit";

const Calculator = React.memo(() => {
  const [start, setStart] = useState(100000);
  const [rate, setRate] = useState(3);
  const [term, setTerm] = useState(2);
  const [frenquency, setFrenquency] =
    useState<InterestPaidFrenquency>("annually");

  return (
    <div className="App" data-testid="test-calculator">
      <h1>Term Deposit Calculator</h1>
      <Field
        label="Start Amount ($)"
        value={start}
        min={0}
        setValue={setStart}
      />
      <Field
        label="Rate (% p.a.)"
        value={rate}
        min={0}
        max={10}
        setValue={setRate}
      />
      <Field
        label="Term (year)"
        value={term}
        min={0}
        setValue={setTerm}
      />

      <div className="btnGroup">
        <button
          className={frenquency === "monthly" ? "highlightedBtn" : ""}
          onClick={() => setFrenquency("monthly")}
        >
          Monthly
        </button>
        <button
          className={frenquency === "quarterly" ? "highlightedBtn" : ""}
          onClick={() => setFrenquency("quarterly")}
        >
          Quarterly
        </button>
        <button
          className={frenquency === "annually" ? "highlightedBtn" : ""}
          onClick={() => setFrenquency("annually")}
        >
          Annually
        </button>
        <button
          className={frenquency === "at_maturity" ? "highlightedBtn" : ""}
          onClick={() => setFrenquency("at_maturity")}
        >
          At maturity
        </button>
      </div>

      <div className="result">
        Final Balance:
        <div>
          {start && rate && term && frenquency
            ? termDeposit(start, rate, term, frenquency)
            : "--"}
        </div>
      </div>
    </div>
  );
});

export default Calculator;
