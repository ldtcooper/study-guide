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

## Enzyme
- AirBnB's testing library that makes for easy React tests.

- Enzyme's `mount` function renders a component so that our tests can examine it.
- Jest uses the jsdom library, which renders a virtual DOM in node that we can use for tests without a browser.

To test React components with Enzyme, we set up a sample prop, pass it into the component we are testing, find it with the `.find` function (which takes a CSS selector), then test it.

```javascript
  // assume this is all within a 'test' block
  const todo = {id: 1, done: false, name: "buy milk"};
  const wrapper = mount(<Todo todo={todo}/>);
  const p = wrapper.find('.toggle-todo');
  expect(p.test).toBe('buy milk');
```

We can also test actions/event listeners by using mock functions called spies. These are created with `jest.fn()`. Events can be triggered with the `.simulate` function, which takes a string representing an action (`click`, `mouseover`, etc.)

```javascript
  const todo = {id: 1, done: false, name: "buy milk"};
  // here is the spy function
  const doneChange = jest.fn();
  const wrapper = mount(<Todo todo={todo} doneChange={doneChange}/>);
  const p = wrapper.find('.toggle-todo');
  p.simulate('click');
  // expects the spy function to be called with the todo with the id 1
  expect(doneChange).toBeCalledWith(1);
```

## Snapshot Testing

When you render a component, Jest can store a representation of that component as a JSON document that it can refer back to. Each time you make a change to the component, Jest will compare it to the snapshot and let you know if something vital changed. You can then see if this change was intentional, and either fix a mistake, or tell Jest to update the snapshot with your changes (by running tests with the `-u` flag). When run for the first time, Jest will know to take a screenshot.

This uses `react-test-renderer` to render React components as JS objects that can be saved as JSON.

```javascript
  describe('Todo renders correctly', () => {
    it('renders correctly', () => {
      const todo = {id: 1, done: false, name: "buy milk"};
      // rendered is a POJO representing the Todo component
      const rendered = renderer.create(<Todo todo={todo}/>);
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });
```
