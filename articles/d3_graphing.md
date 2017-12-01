# D3 Graphing

## Axes
  - Axes set up by calling the `.axis()` and `.scale(scale)` methods.
  - Generator can also take an orientation with `.orient()` and tick marks with `.ticks`.
  - Example:
    ```javascript
      const xAxis = d3.svg.axis().scale(xScale)
                                 .orient("bottom")
                                 .ticks(8);
    ```
  - Append axes to visualization by appending a <g> (`group`) element with a transform attribute, then calling the axis-creating function (above).
  - Example:
    ```javascript
      viz.append("g")
         .attr("class", "x axis")
         .attr("transform", `translate(0,${height})`)
         .call(xAxis);
    ```
  - Add buffer by extending axes -- simply multiply axes by a constant or add on to them.
  - Rotate data labels by selecting all `text` on the axis and giving their `transform` attributes a function that returns the rotation.
  - Example:
  ```javascript
    gElement.selectAll('text')
            .attr("transform", function() {
              return("rotate(-65)");
            })
            // styles can be applied here too!
  ```

## Data Labels
  - Bind data to <g> elements, then append SVG elements to the <g> elements.
  - Label data by appending an additional text element to the <g>.
    - Example:
    ```javascript
      // dots is selection of all <g> elements with data bound to them

      // this appends 5px circles to each data point
      dots.append('circle')
          .attr('r', 5);

      // finds TMAX for each data point and appends that as text
      dots.append('text')
          .text(function(d) {
            return d.TMAX;
          });
    ```
