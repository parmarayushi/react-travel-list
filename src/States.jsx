export default function States({ items }) {
  if (!items.length)
    return (
      <p className="states">
        <em>Start adding some Items to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="states">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${totalItems} items on your list, and you already packed
        ${totalPacked}(${percentage} %)`}
      </em>
    </footer>
  );
}
