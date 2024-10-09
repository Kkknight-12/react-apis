import React from 'react';

/*
 * React.Children.only(children)
 * assert that children represent a single React element.
 */
function RowList({ children }) {

  // React.Children.only(children) throws an error if children is not a single element.
  if (React.Children.only(children)) {
    return <>{children}</>;
  }
}

export default function OnlyComponent() {
  return (
    <RowList>
      {/* 1 */}
      {/* fragments are not traversed, they are treated as one node ( single element ) */}
      <>
        <h1>hi1</h1>
        <h1>hi2</h1>
      </>
    </RowList>
  );
}
