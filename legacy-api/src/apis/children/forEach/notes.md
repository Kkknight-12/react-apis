### `Children.forEach`
Overview:

Run some code for each child in the children prop of a React component, 
**similar to** how `Array.forEach` works with arrays.

syntax:

`Children.forEach(children, fn, thisArg?)`

### Parameters:
* `children`: The actual children prop passed into your component. These are the elements you want to loop through.

* `fn`: A function you want to run for each child. The function gets the child 
and its index as arguments.

* `thisArg` (optional): The this value for the function if you need to refer to 
the component’s context.

### Return Value:
* Children.forEach doesn’t return anything (i.e., undefined). It’s just for 
running code for each child element.

In simpler terms, you use Children.forEach when you need to run some code for every child element in your component, like adding a separator between them.