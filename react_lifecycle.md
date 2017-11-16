# The React Lifecycle

All React Lifecycle methods can be split into four phases: initialization, mounting, updating, and unmounting.

## Initialization

These methods are called as components are initialized and are used to set state and props.

**NB: Not useful in ES6!**

#### `getDefaultProps()`

This method returns an object which will become `this.props` unless otherwise specified. Basically, this provides default prop values.

Ex:

```javascript
  getDefaultProps: function() {
    return{
      name: 'Mary'
    }
  }

  // this.props => {name: 'Mary'}
```

#### `getInitialState()`

This method returns an object that will become the component's local state (`this.state`). If no state is initialized, the values returned by `getInitialState()` will be put in.

Ex:

```javascript
  getInitialState: function() {
    return{
      name: 'Mary'
    }
  }
  // this.state => {name: 'Mary'}
```

## Mounting

Mount methods are called as the component is inserted into the DOM.

#### `componentWillMount()`

This is called right before an object is initially rendered. Calling `this.setState` here will not re-render the component. There is no DOM to use here.
Commonly used to do app configuration in root component.

#### `componentDidMount()`

Called right after an object is inserted into the DOM. Best place to call other JS libraries or to fetch data (AJAX calls!).

## Updating

These methods are called when a component's state or properties (props) are changed. They are called in the following order when props are updated, and in this order from `shouldComponentUpdate()` if `this.setState` is called.
None of these are called for the first render.

#### `componentWillReceiveProps()`

Triggered when a component receives a new stream of props. Takes an argument (`nextProps`) and lets us access new props with that, and old props with `this.props`.
Used to trigger re-renders based off of new props.

#### `shouldComponentUpdate()`

Called when a component receives new props.
Returns `true` by default, but can be used to prevent components from re-rendering unless relevant props/state changes. In that case, you can change it to return `false`.

#### `componentWillUpdate()`

Called right before a component re-renders.
Used like `componentWillReceiveProps()` but has no access to previous props.

#### `componentDidUpdate()`

Called right after a component updates.
Used to update DOM in response to prop or state changes. 
