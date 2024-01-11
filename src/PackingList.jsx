import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="flex items-center justify-between flex-col gap-12 bg-[#5a3e2b] text-orange-200 px-0 py-16">
      <ul className="items">
        {sortedItems.map((item) => (
          <Item
            items={item}
            onDelete={onDeleteItem}
            onToggle={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      {/* <div> */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      {/* </div> */}
    </div>
  );
}
