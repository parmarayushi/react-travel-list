import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import States from "./States";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((data) => [...data, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((res) => res.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <States items={items} />
    </div>
  );
}

export default App;
