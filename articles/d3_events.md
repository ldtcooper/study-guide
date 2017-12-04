# D3 Events

All event-based interaction is done with a selection's `.on()` method. `.on()` takes an event type (`click`, `mouseover`, etc.) and an event function that will take in a data point and an index -- `function(d, i) {}`. Within that function, `this` refers to the element with the listener.

**Good data viz tip:** Use the data value as the area of a circle. Implement this by getting a data point 'd', and using it to solve for the radius 'r'.

To stop an event from firing in case of conflicting listeners, one can use the `d3.event.sourceEvent.stopPropagation()` method.
