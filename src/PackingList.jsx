import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="flex items-center justify-between flex-col gap-12 bg-[#5a3e2b] text-orange-200 px-0 py-16">
      <ul className="items">
        {items.map((item) => (
          <Item items={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
