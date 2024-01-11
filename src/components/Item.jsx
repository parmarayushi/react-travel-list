export default function Item({ items, onDelete, onToggle }) {
  return (
    <li className="flex items-center gap-4">
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => onToggle(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button
        className="bg-transparent text-2xl p-3"
        onClick={() => onDelete(items.id)}
      >
        ❌
      </button>
    </li>
  );
}
