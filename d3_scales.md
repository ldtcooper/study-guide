# D3 Scales

## Intro to Scales
  - Scales are used to map a domain of data to some visual attribute (the range) of the graph.
    - This range can be a position, size, color, etc.
  - Different scales are like different classes with their own methods, etc.
  - Often, scales will be constructed with the maximum and minimum data points in a set.
    - Found with the `d3.max` and `d3.min` functions, which take data and a callback.
    - For example, the following code will find the maximum value of the `TMAX` datapoint
    ```javascript
      // within callback inside d3.csv()
      const yMin = d3.min(data, function(element) => {
        return(parseInt(element.TMAX));
      });
    ```
  - Better to use `d3.extent()` to find the minimum and maximum at once (with only one iteration).
    - For example:
    ```javascript
    const yDomain = d3.extent(data, function(element) {
      return parseInt(element.TMAX);
    });
    ```
  - A scale object created with `d3.scale.linear().range(x, y)` can have `.domain(yDomain)` called on it to set up a range of values with a scale.
  - In the `.attr` that represents the scaled value, put in a callback that returns the scale with correct values.
    - For example:
    ```javascript
      // for a circle
      selection.attr('cy', function(d) {
        return yScale(d.TMAX);
      })
      // outputs a pixel value
    ```
  - `scale.invert(val)` will spit out the x value that corresponds to an inputted y value

## Time Scale
  - Extension of linear scale, but using date objects
  - Must convert date strings from data into JS date objects.
  - Use `d3.time.format(dateFormat)` to create date objects.
    - `d3.time.format("%Y%m%d")` will parse YYYY/MM/DD dates.
  - Place objects with this scale by attaching it to an attribute:
  ```javascript
  selection.attr('cx', function(d) {
    date = parseTime(.parse(d.DATE));
    return xScale(date);
  })
  ```
