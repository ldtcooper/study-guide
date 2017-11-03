# Python I/O
Following along to the 'Files and For Loops' lesson on [Dataquest](dataquest.io).

## Files
  - Opened with the `open()` function
    - Accepts two arguments: `filename` (as string) and `mode` (as string).
    - Ex: to open `story.txt` in read-only mode, type `open("story.txt", "r")`
    - `open()` Returns a File object
  - `read(file)` returns a string representation of the File object.
    - Doesn't modify file object, but returns a string.

  ```python
  # data.csv is a dataset in the same directory as the Python file
  f = open('data.csv', 'r') #=> returns File object
  data = f.read() #=> returns string representation of f
  rows = data.split('\n') #=> generates array of strings split on the newline
  list_rows = []
  for el in rows:
    list_rows.append(el.split(','))
    # => turn each row into a list and make a list of lists
  ```
