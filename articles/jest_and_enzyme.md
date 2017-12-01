# Jest and Enzyme

## Jest
- Facebook's JS/React testing library
- To use, write a JS file, export it, import it into your test file, and write tests to see if outputs are correct given inputs.

```javascript
  test('sum 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  })
```

In the above example, test sets up a single test, and takes a description and a test function. The test function uses `expect` to set up the function and input, and `toBe` to set up the expected answer.

**NB:** There are two ways to test for equality: `.toBe` and `.toEqual`. For primitive data types, these are the same, but for objects, `.toBe` will test for strict equality, while `toEqual` will recursively test if the attributes of each object are the same.

### Testing State (Redux) with Jest
With a set of actions, reducers, and a store, one can test that they work correctly with Jest.
For example: in a Todo app, one might have a `toggleDone` action that marks an action as completed.

```javascript
  // set up initial state
  const startState = {
    todos: [{id: 1, done: false, name: "buy milk"}]
  }
  // trigger action on state
  const finState = toggleDone(startState, 1);

  expect(finState.todos).toEqual([
    {id: 1, done: true, name: "buy milk"}
  ]);

```
