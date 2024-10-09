### `Children.toArray(children)`
Call `Children.toArray(children)` to create an array out of the children data structure

### Parameters:
* children: The value of the children prop passed into your component. These 
could be React elements, strings, numbers, etc.

### Returns:
* Array of elements: A flat array of the elements within children.

### Caveats:

1. Empty Nodes: null, undefined, and Booleans are omitted from the returned array.
2. Keys Calculation: The keys of returned elements are calculated based on their original keys, nesting level, and position to maintain behavior consistency.