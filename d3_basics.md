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
    // this selects the element with the id 'hoverable' and applies
    // a color change effect on click
    d3.selectAll('.hoverable').on('click', () => {
      this.style.backgroundColor = 'red';
    })
  ```

## Graphing
  - Data fed into D3 as POJOS.
  - Common to pass functions a data source and a callback that goes through elements (usually called `d`) and indices (usually called `i`).
  - `d3.max(data, function(d, i) { return d.amount })` iterates through data and returns the largest `amount` attribute in the array of POJOs `data`.

### Scales
  - D3 scales map values to coordinate plains. There are many types: linear, logarithmic, etc.
  - Scales are set up by calling the scale function with a domain and a range.
  - y-axis must be reversed because SVG is y-down.
  - Example for y-axis:
  ``` javascript

    // this sets up a y axis with a domain of 0-80 and a range of 0-200
    const y = d3.scaleLinear().domain([0, 80]).range([200, 0]);
    // with an actual dataset, you can set up a fitted y-axis like this
    y.domain(d3.extent(data, function(d) { return d.amount });
    })
  ```
  - Dates have their own scale with a domain of dates:
  ``` javascript
    const x = d3.scaleTime().domain([
      new Date(Date.parse('2014-01-01'),
      new Date(Date.parse('2015-01-01'),
    ])
  ```
