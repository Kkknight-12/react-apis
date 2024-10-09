import React from 'react';

/*
 * React.Children.count(children)
 * count the number of children in the children data structure.
 */
function RowList({ children }) {
  //  there will be 10 children
  console.log('children', React.Children.count(children));
  console.log('only', React.Children.only(children));
  return (
    <>
      <h1>Total rows: {React.Children.count(children)}</h1>
      ...
    </>
  );
}

export default function CountComponent() {
  return (
    <RowList>
      {/* 1 */}
      <p>First Child</p>
      {/* 2 */}
      <p>Second Child</p>
      {/* 3 */}
      <p>Third Child</p>
      {/* 4 */}
      {false}
      {/* 5 */}
      {true}
      {/* 6 */}
      {100}
      {/* 7 */}
      {'asdsd'}
      {/* 8 */}
      {null}
      {/* 9 */}
      {undefined}
      {/* 10 */}
      {/* fragments are not traversed, they are treated as one node */}
      <>
        <h1>hi1</h1>
        <h1>hi2</h1>
      </>
    </RowList>
  );
}
