original JSX received by List looks like this:

syntax:
```javascript
const clonedElement = cloneElement(element, props, ...children)
```

```javascript
<List>
  <Row title="Cabbage" />
  <Row title="Garlic" />
  <Row title="Apple" />
</List>
```

<br/>
By cloning its children, the List can pass extra information to every Row 
inside 

```javascript
<List>
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
```

```javascript

export const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

{products.map((product) => (
  cloneElement(
    <Row key={product.id} title={product.title} />,
     // props
     {
      isHighlighted: index === selectedIndex,
    })
))}
```