// creating and moving SVGs
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

// this selects the element with the id 'hoverable' and applies
// a color change effect on click
d3.selectAll('.hoverable').on('click', () => {
  this.style.backgroundColor = 'red';
})

// data parsing
d3.json('datafiles/data.json', (error, data) => {
  console.log(error);
  console.log(data);
})

// data binding example
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
