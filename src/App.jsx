import { useState } from "react";
import "../src/App.css";

function App() {
  return (
    <main style={{ textAlign: "center", marginTop: "30px" }}>
      <TipCalculator />
    </main>
  );
}

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip1 = bill * (percentage1 / 100);
  const tip2 = bill * (percentage2 / 100);
  const tip = (tip1 + tip2) / 2;

  const setReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />

      <div>
        <label>How much was the bill?</label>
        <select
          value={percentage1}
          onChange={(e) => setPercentage1(e.target.value)}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div>
        <label>How did your friend like the service?</label>
        <select
          value={percentage2}
          onChange={(e) => setPercentage2(e.target.value)}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        {bill > 0 && <Output bill={bill} tip={tip} setReset={setReset} />}
      </div>
    </div>
  );
};

function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>How much the bill ? : </span>
      <span>
        <input
          type="text"
          placeholder="Bill Value"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </span>
    </div>
  );
}

function Output({ bill, tip, setReset }) {
  return (
    <>
      <h3>
        You pay {parseFloat(bill) + parseFloat(tip)} ({bill} + {tip} tip)
      </h3>
      <Reset setReset={setReset} />
    </>
  );
}

function Reset({ setReset }) {
  return <button onClick={setReset}>Reset</button>;
}

export default App;
