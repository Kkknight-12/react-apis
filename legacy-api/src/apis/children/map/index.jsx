import React from 'react';

function MyComponent({ children }) {
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return (
          <div className='child-wrapper' key={'index'}>
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default function MapComponent() {
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
