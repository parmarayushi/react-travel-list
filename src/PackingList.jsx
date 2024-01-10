import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function PackingList() {
  return (
    <div className="flex items-center justify-between flex-col gap-12 bg-[#5a3e2b] text-orange-200 px-0 py-16">
      <ul className="items">
        {initialItems.map((item) => (
          <Item items={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
