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

This is called right before an object is initially rendered. Calling `this.setState` here will not re-render the component.

#### `componentDidMount()`

Called right after an object is inserted into the DOM. Best place to call other JS libraries or to fetch data.

## Updating

These methods are called when a component's state or properties (props) are changed. They are called in the following order when props are updated, and in this order from `shouldComponentUpdate()` if `this.setState` is called.
None of these are called for the first render.

#### `componentWillReceiveProps()`
