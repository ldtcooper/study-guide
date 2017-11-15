# D3 Basics

## D3 DOM Manipulation

### Selection

  - `d3.select('p').size();` finds one <p> element
  - `d3.selectAll('p').size();` finds all <p> elements.
  - `d3.selectAll('.id');` selects element with id of `id`;
  - `.text()` returns the text of the element it is called on.

### Events

  - `.on()` puts event handlers on a selected element. It takes an event type (click, mouseover, mouseleave, etc.) and a function that describes what the function does.
  ``` javascript
    d3.selectAll('.hoverable').on('click', () => {
      this.style.backgroundColor = 'red';
    })
  ```

## Graphing
  - Data fed into D3 as POJOS.
  - Common to pass functions a data source and a callback that goes through elements (usually called `d`) and indices (usually called `i`).
  - `d3.max(data, function(d, i) { return d.amount })` iterates through data and returns the largest `amount` attribute in the array of POJOs `data`.
  -
