import { useState } from "react";
import "../src/App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 10, packed: false },
];

function App() {
  return (
    <main className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </main>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form() {
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };    
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const line = { textDecoration: "line-through" };
  return (
    <li>
      {/* <span style={item.packed == true ?  line : {}}>{item.quantity} {item.description}</span> */}
      <span className={item.packed == true ? "line" : ""}>
        {item.quantity} {item.description}
      </span>
      <button>x</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed (X%)</em>
    </footer>
  );
}

export default App;
