/*
 * createElement lets you create a React element. It serves as an alternative to writing JSX.
 *
 * syntax:
 * const element = createElement(type, props, ...children)
 *  */

/*
 * To create an element without JSX, call createElement with some
 * type,
 * props, and
 * children:
 *  */

import { createElement } from "react";

function Greeting({ name }) {
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello ",
    createElement("i", null, name),
    ". Welcome!",
  );
}

export default function App() {
  return createElement(Greeting, { name: "Taylor" });
}

/*
 function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}

 *  */

// ------------------------------------------------------------------------------------------