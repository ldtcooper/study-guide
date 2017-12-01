# JavaScript Scope

## What is it?
Scope is the set of variables that can be used within a method. This means: all of a function's arguments, anything defined in that method, and anything defined in an upper scope (closures).

**For Example:**
```JavaScript

  const constant1 = "Hello World!";

  let foo1 = function foo2(arg1) {
    const constant2 = 7;
  };

  let foo2 = function foo2(arg2) {
    const constant3 = [1, 2, 3];
  };
```

In the above example, the function foo1 has the variables `constant1`, `constant2`, and `arg1`.
The function foo2's scope has access to `constant1` as well, but not to `constant2` and `arg1`. Instead, it has access to `arg2` and `constant3`.

## Private State
This lets functions create private states that cannot be accessed by external functions.

**For example:**
```javascript
  function Counter () {
    let count = 1;

    return () => count++;
  }

  let counter = new Counter();
  console.log(counter()); // => 1
  console.log(counter()); // => 2
  counter.count; // => undefined
```

## Global Scope
Represented by the 'window' object in the browser and the 'global' object in Node.

Variables created without `var`, `let`, or `const` are global variables.

## `this`

`this` acts as a reference to the object something is called on. For example:

```javascript
  let word = {
    text: 'word',
    double: function() {
      return `${this.text}${this.text}`
    }
  };
```

`this.text` refers to the `text` attribute of the `word` object, kind of like `self` in Ruby.
