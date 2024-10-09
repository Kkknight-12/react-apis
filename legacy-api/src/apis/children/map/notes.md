Call `Children.map(children, fn, thisArg?)` to map or transform each child in the children data structure.

1. Props.children:
    - children is a special prop in React, used to pass child elements into a component.

2. React.Children.map:

    - This method iterates over each child, allowing you to perform transformations on them.
    - `React.Children.map(children, (child, index) => { ... })`: Iterates over each child and applies a function to each one.

3. Transformation:
    - For each child, a new div with the class child-wrapper is returned, wrapping the original child.
    - The key prop ensures each element in the list is uniquely identified.

In a nutshell, `React.Children.map` is great for dynamically modifying children elements, making it super useful when building flexible components.


Returns 
    - If children is null or undefined, returns the same value.

### Caveats:

1. Individual Nodes:
    - Things like null, undefined, Booleans, strings, numbers, and React elements are each treated as separate nodes.

2. Arrays:
    - Arrays themselves aren't counted as nodes, but the items inside them are.

3. Depth:
    - The traversal **doesn’t go deeper into nested React elements**. If you have React components inside other React components, they aren’t checked further.

4. Fragments:
    - React **Fragments** (<React.Fragment> or shorthand <>) **aren't traversed**.

### Keys:

1. Automatic Key Combination:
    - If you return an element or an array of elements with keys from your function, the keys are automatically combined with the original keys of the corresponding items from the children.

2. Local Uniqueness:
    - When returning multiple elements from a function in an array, their keys need only be unique among themselves, not globally.