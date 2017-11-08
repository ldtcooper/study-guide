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
ES6 introduces two new variable definitions: `const` and `let`. These are subtly different from ES5's `var`
