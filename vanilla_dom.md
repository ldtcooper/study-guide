# Vanilla DOM Manipulation

## Querying the DOM
Basic querying done with `document.querySelector()`. It takes a CSS selector and returns the first match. For example, `document.querySelector('p')` will select the first `<p>` element on the page. 
This can be checked against other selectors with `.matches()` which also takes a selector and returns a boolean.

`document.querySelectorAll()` will return a Nodelist of all elements which match a certain selector -- much like plain old `.querySelector()`. This collection will be static though, and will not update if the DOM does.

**NB:** Nodelists are not arrays, and must be converted to Arrays to be iterated over with
```javascript
  let myElements = document.querySelectorAll("li");
  // assume callback is some function
  Array.from(myElements).forEach(callback);
```

## Traversing the DOM 
The DOM is a tree, and can be traversed with certain DOM methods.
  - `elem.childNodes` returns a list of the children of a node.
  - 
