import React from 'react';

function MyComponent({ children }) {
  const result = React.Children.toArray(children).filter(
    (child) => child !== null && child !== undefined
  );
  result.reverse();
  result.push(<hr key='hr' />);

  return <div>{result}</div>;
}

export default function ToArrayComponent() {
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
