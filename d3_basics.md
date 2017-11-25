# D3 Basics

## D3 DOM Manipulation

### Selection

  - `d3.select('p').size();` finds one <p> element
  - `d3.selectAll('p').size();` finds all <p> elements.
  - `d3.selectAll('.id');` selects element with id of `id`;
  - `.text()` returns the text of the element it is called on.

### Changing Elements
  - `.append(element)` will add on a particular element to the selected element as a child.
    - If given `<div></div>`, `d3.select('div').append('p')` will give you `<div><p></p></div>`
  - `.attr(type, name)` will add an attribute of type (i.e. `class` or `id`) `type` with the name `name` to whatever it is chained on to.
    - `d3.select('p').attr('class', 'my-text')` will give the class `.my-text` to the first <p> element it finds.
  - `.style(style, attribute)` adds a style on to the chained element.
    - Ex: `d3.select('p').style('font-size', '16px')` will make the selected <p> element's text 16px big.
    - `.style()` can also take a callback as a second argument to conditionally style elements.
  - Code sample to add an SVG circle on to the body, give it a class, move it around, and change its size:
  ```javascript
    // Creates SVG element
    d3.select('body')
      .append('svg')
      .attr('height', 500)
      .attr('width', 500);

    // creates a circle element in the SVG
    d3.select('svg')
      .append('circle')
      .attr('id', 'my-circle');

    // moves circle 100px to the right
    d3.select('#my-circle')
      .attr('cx', '100');

    // moves circle 300px down
    d3.select('#my-circle')
      .attr('cy', '300');

    // makes circle 20px in radius
    d3.select('#my-circle')
      .attr('r', '20');

    // makes the circle dim grey
    d3.select('#my-circle')
      .style('fill', 'dimgrey')
  ```


### Events

  - `.on()` puts event handlers on a selected element. It takes an event type (click, mouseover, mouseleave, etc.) and a function that describes what the function does.
  ``` javascript
    // this selects the element with the id 'hoverable' and applies
    // a color change effect on click
    d3.selectAll('.hoverable').on('click', () => {
      this.style.backgroundColor = 'red';
    })
  ```

## Data Binding

### Request Methods
  - Async functions
  - D3 exposes several methods to let it read in different data types:
    - `d3.csv`, `d3.tsv`, `d3.html`, `d3.xml`, `d3.text`, `d3.json`
  - These methods take two arguments: a path to the data document, and a callback that handles errors (optional) and data.
    - e.g.:
    ```javascript
      d3.json('datafiles/data.json', (error, data) => {
        console.log(error);
        console.log(data);
      })
    ```
  - `d3.csv` turns the csv document into a JSON array of arrays

### Data Binding
  - `.data(dataObject)` links the selector it is chained with to the data inputted in `dataObject`.
  - `.enter()` returns all elements in data without corresponding DOM elements.
  - Similarly, `.exit()` returns all DOM elements without corresponding data.
  - Data binding example:
    ```javascript
      const viz = d3.select('#viz-div').append('svg').attr('id', '#viz');

      // assume no errors
      d3.csv('datafiles/data.csv', (data) => {
        // selects all circles (ghost selection) in viz and links them
        // to the data, then appends a circle for each of the elements.
        const dots = viz.selectAll('circle')
          .data(data).enter().append('circle');

        // the TMAX is a specific measurement in the data (d) bound to each element.
        dots.attr('r', (d) => Math.abs(d.TMAX));

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
  - Dates have their own scale with a domain of date objects:
  ``` javascript
    const x = d3.scaleTime().domain([
      new Date(Date.parse('2014-01-01'),
      new Date(Date.parse('2015-01-01'),
    ]);
  ```
