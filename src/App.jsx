import { useState } from "react";
import "../src/App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <main className="app">
      <Accordion data={faqs} />
    </main>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          text={item.text}
          num={idx}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, num, curOpen , setCurOpen }) {

  const isOpen = num === curOpen;
  
  const toggleIsOpen = () => {
    setCurOpen((isOpen) => isOpen == true ? null : num);
  };

  return (
    <div className={`item ${isOpen && "open"}`} onClick={toggleIsOpen}>
      <p className="number">{num <= 9 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
