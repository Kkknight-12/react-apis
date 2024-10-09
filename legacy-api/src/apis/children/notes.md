Children lets you manipulate and transform the JSX you received as the children prop.

---

## React.Children.map versus React.Children.forEach:

`React.Children.map`:
- `Purpose`: Transforms each child element and returns a new array with the results.
- `Returns`: An array of transformed child elements.
- `Usage`: When you need to map over children and **create a new array of elements**.

```javascript
const transformedChildren = React.Children.map(children, (child, index) => {
  return <div key={index}>{child}</div>;
});
```
<br/>

`React.Children.forEach`:
- `Purpose`: Executes a provided function once for each child element, but doesn’t return anything.
- `Returns`: undefined
- `Usage`: When you need to iterate over children and perform some side effects, but **don’t need a new array**.

```javascript
React.Children.forEach(children, (child, index) => {
  console.log(child);
});
```

### In essence:
- Use map when you need to transform and return new child elements.
- Use forEach when you only need to run code on each child without creating a new array.