import List from "./List.js";

export const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default function App() {
  return (
    <List
      items={products}
      renderItem={(product, isHighlighted) => (
        <Row
          key={product.id}
          title={product.title}
          isHighlighted={isHighlighted}
        />
      )}
    />
  );
}

function Row({ title, isHighlighted }) {
  return (
    <div className={["Row", isHighlighted ? "RowHighlighted" : ""].join(" ")}>
      {title}
    </div>
  );
}