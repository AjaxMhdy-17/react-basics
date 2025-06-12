import { useState } from "react";
import "../src/App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("jun 17 2027");
  date.setDate(date.getDate() + count);

  const countInc = () => {
    setCount((count) => count + step);
  };

  const countDec = () => {
    setCount((count) => count - step);
  };

  return (
    <main>
      <div>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        Step : {step}
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={countDec}>-</button>
        Count : {count}
        <button onClick={countInc}>+</button>
      </div>

      <div>
        <span>
          {count == 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </main>
  );
}

export default App;
