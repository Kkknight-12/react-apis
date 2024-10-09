import React from 'react';

function MyComponent({ children }) {
  const childArray = [];
  React.Children.forEach(children, (child, index) => {
    childArray.push(child);
    childArray.push(<hr key={index} />);
  });
  console.log(childArray);
  return <div>{childArray}</div>;
}

export default function ForEachComponent() {
  return (
    <MyComponent>
      <p>First Child</p>
      <p>Second Child</p>
      <p>Third Child</p>
      {false}
      {true}
      {100}
      {'asdsd'}
      {null}
      {undefined}
      {/* fragments are not traversed, they are treated as one node */}
      <>
        <h1>hi1</h1>
        <h1>hi2</h1>
      </>
    </MyComponent>
  );
}
