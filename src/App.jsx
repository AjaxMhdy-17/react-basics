import { useState } from "react";
import "../src/App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);

  const next = () => {
    if (step < 3) setStep((step) => step + 1);
    setTest({ name: "Hasan" });
  };

  const prev = () => {
    if (step > 1) setStep((step) => step - 1);
    setTest({ name: "Jonas" });
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            {messages[step - 1]} {test.name}
          </p>

          <div className="buttons">
            <button
              onClick={prev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
