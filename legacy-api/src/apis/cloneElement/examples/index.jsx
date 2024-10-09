import List from "./List";
import Row from "./Row";

export const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default function Example1() {
  return (
    <List>
      {products.map((product) => (
        <Row key={product.id} title={product.title} />
      ))}
    </List>
  );
}

/*
* <List>
  <Row
    title="Cabbage"
    isHighlighted={true}
  />
  <Row
    title="Garlic"
    isHighlighted={false}
  />
  <Row
    title="Apple"
    isHighlighted={false}
  />
</List>
*  */

/*
* <List>
  <Row
    title="Cabbage"
    isHighlighted={true}
  />
  <Row
    title="Garlic"
    isHighlighted={false}
  />
  <Row
    title="Apple"
    isHighlighted={false}
  />
</List>
*  */