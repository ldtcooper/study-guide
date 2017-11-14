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
  - `elem.parentNode` returns the parent node.
  - `nextSibling` and `previousSibling` traverse the DOM horizontally.
  
## Modifying Classes and Attributes

Adding or removing classes is as easy as using the `elem.classList.add()` or `.classList.remove()` methods.
Values can be set with `elem.value = 'something'`. 

`.getAttribute()` and `.setAttribute()` directly modify the HTML and trigger redraws -- more expensive.

`elem.style.marginLeft = '2em'` will add the style `margin-left: 2em;` to the element. 

## Modifying the DOM
Delete nodes indirectly by selecting a node, getting its parent, and then deleting a certain child.
For example:
```javascript
  const myElement = document.querySelector("li");
  myElement.parent.removeChild(myElement)
```

We can also add elements to a certain node. The following code will create an empty `<li>` element, add some text to it, then add it to the selected `<ul>`.
```javascript
  const myElement = document.querySelector("ul");
  const myNewElement = document.createElement("li");
  myNewElement.textContent = "this is content";
  myElement.parent.appendChild(myElement);
```

## Event Listeners
Use `.addEventListener()` to add event listeners to nodes. It takes an event type (click, change, mouseover, etc.) and a callback that will be executed when the action is done.

On things like submit buttons, it is important to use the `.preventDefault()` to stop the browser from executing its default behavior -- e.g. sending off a query string. 

`.stopPropogation()` prevents elements from bubbling up the DOM.