import { useState } from "react";
import "../src/App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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

export default App;
