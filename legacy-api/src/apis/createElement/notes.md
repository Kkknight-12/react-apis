# React createElement Function

## Purpose
`createElement` is a core React function used to create React elements programmatically.

## Basic Syntax
```javascript
React.createElement(type, props, ...children)
```

## Parameters

1. `type` (required):
    - Can be a string for HTML tags (e.g., 'div', 'span')
    - Or a React component (function, class, or special component like Fragment)

2. `props` (optional):
    - An object containing the properties for the element
    - Can be null (treated same as an empty object)
    - Special props:
        - `ref` and `key` are treated differently (not available in `element.props`)

3. `children` (optional):
    - Any number of child elements
    - Can include React elements, strings, numbers, portals, empty nodes, or arrays of these

## Return Value
Returns a React element object with properties:
- `type`: The type you passed
- `props`: The props you passed (except ref and key)
- `ref`: The ref you passed (or null if not provided)
- `key`: The key you passed, converted to a string (or null if not provided)

## Important Notes

1. Immutability:
    - Treat React elements and their props as immutable
    - Don't change their contents after creation

2. JSX and Custom Components:
    - In JSX, start custom component tags with a capital letter
    - `<Something />` is like `createElement(Something)`
    - `<something />` (lowercase) is like `createElement('something')` (HTML tag)

3. Children:
    - For static children, pass them as separate arguments
    - For dynamic children, pass the entire array as the third argument

4. Default Props:
    - If the type is a component with `defaultProps`, missing props will use these defaults

5. Usage:
    - Typically, return the element from your component or make it a child of another element
    - Best to treat elements as opaque after creation and only render them