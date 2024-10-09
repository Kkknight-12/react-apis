/*
 * cloneElement lets you create a new React element using another element
 * as a starting point.
 *
 * syntax
 * const clonedElement = cloneElement(element, props, ...children)
 *  */

import { cloneElement } from "react";

const Row = ({ title, isHighlighted, color, children }) => {
  console.log("color ", color); // pink
  return (
    //  <div style={{ backgroundColor: "yellow" }}>
    <div style={{ backgroundColor: isHighlighted ? "yellow" : "white" }}>
      {/* Cabbage */}
      <h1>{title}</h1>
      {/* Goodbye */}
      {children}
    </div>
  );
};

const clonedElement = cloneElement(
  <Row title="Cabbage">Hello</Row>,
  // adding props
  { isHighlighted: true, color: "pink" },
  // adding children
  "Goodbye",
);

// console.log(clonedElement); // <Row title="Cabbage" isHighlighted={true}>Goodbye</Row>

export const CloneComponent = () => {
  return clonedElement;
};