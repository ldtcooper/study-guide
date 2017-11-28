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
