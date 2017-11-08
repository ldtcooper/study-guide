# ES5 versus ES6

There are two (major) standards in use today: ECMAScript(ES)5 and ES6 (AKA ES2015). ES7(AKA ES2016) and ES8(2017) are also out, but are have yet to be as widely adopted. JavaScript is a language based on this standard.

## New Additions in ES6

#### Arrow Functions
ES6 introduced a new way of defining functions. In previous versions, functions had to be declared with the `function` keyword, like below:

```javascript
  function addSeven(num) {
    var numPlusSeven = num + 7;
    return numPlusSeven;
  }
```

That same function as an arrow function would look something like this though:

```javascript
  const addSeven = (num) => {
    const numPlusSeven = num + 7;
    return numPlusSeven;
  }
```

Arrow functions are not totally interchangeable with those made with the keyword `function`. Arrow functions preserve the scope in which they were defined (so `this` will refer to the same thing inside and outside of the scope). They can also return implicitly as long as they are not passed a block:

```javascript
  const addSeven = (num) => ( num + 7);
```

#### `const` and `let`
ES6 introduces two new variable definitions: `const` and `let`. These are subtly different from ES5's `var`. For one, they are block scoped, not function scoped. This means that a `var` defined in a for loop in a function is reachable by code outside of the loop, while a `let` inside of a for loop is not.

For example:

```javascript
  function foo() {
    for (var i = 0; i < 10; i++) {
      let x = 7;
      console.log(i + x);
    }
    console.log(i); // => returns 10
    console.log(x); // => raises error because x is not defined
  }
```

`const` comes with the added bonus of being semi-immutable. While something defined with `const` cannot be reassigned, it can change under certain circumstances. For example:

```javascript
  const x = 7;
  x = 8; // this raises an error
  x // => 7

  const y = [1,2,3];
  y.push(4);
  y // => [1,2,3,4]
  y[0] = "a";
  y // => ["a", 2, 3, 4]

  const z = {};
  z // => {}
  z["a"] = 1;
  z // => {"a": 1}
```
