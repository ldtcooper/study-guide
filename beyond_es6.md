# Beyond ES6

  - ES = ECMAScript -- Standard to controll JavaScript

## ES7 (ES2016)
  Four upgrades to JavaScript:
  1. `Array.prototype.includes`: lets you look for element in array.
  2. `TypedArray.prototype.includes`: Same as above, but for TypedArray (Array that can only hold one data type.)
  3. Exponentiation operator: `5 ** 2 => 25`
  4. Destrucuring Rest Parameters:
  ```javascript
    function f(...[a, b, c]) {
      return a + b + c;
    }
    f(1) //=> NaN
    f(1, 2, 3) // => 6
    f(1, 2, 3, 4) // => 6
  ```
  
