export default function Item({ items }) {
  return (
    <li className="flex items-center gap-4">
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button className="bg-transparent text-2xl p-3">❌</button>
    </li>
  );
}
