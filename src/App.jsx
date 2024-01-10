import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import States from "./States";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((data) => [...data, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <States />
    </div>
  );
}

export default App;
