import { useState } from "react";
import "../src/App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 10, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleCheck = (id) => {
    const checkedItems = items.map((item) =>
      item.id == id ? { ...item, packed: !item.packed } : item
    );
    setItems(checkedItems);
  };

  const handleClearItem = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems((items) => (items = []));
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <main className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleClearItem={handleClearItem}
      />
      <Stats items={items} />
    </main>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form({ handleAddItems }) {
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
    handleAddItems(newItem);
    setQuantity("");
    setDescription("");
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

function PackingList({ items, handleDelete, handleCheck, handleClearItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy == "input") sortedItems = items;
  if (sortBy == "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy == "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearItem}>clear list</button>
      </div>
      <div></div>
    </div>
  );
}

function Item({ item, handleDelete, handleCheck }) {
  const line = { textDecoration: "line-through" };
  return (
    <li>
      {/* <span style={item.packed == true ?  line : {}}>{item.quantity} {item.description}</span> */}
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleCheck(item.id)}
      />
      <span className={item.packed == true ? "line" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>x</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const list = items.length;
  const packed = items.filter((item) => item.packed == true).length;
  const percentage = Math.round((packed / list) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything to go."
          : `
          You have ${list} items on your list, and you already packed (${percentage}%)
        `}
      </em>
    </footer>
  );
}

export default App;
