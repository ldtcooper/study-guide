# Responsive Design

## Relative Units

Responsive design aims to use relative values instead of fixed ones (like pixels)

- **em:** 1em represents the size of the base font being used by the parent element. In the example below, the font size in the header will be 24px.

  ```css
  .header {
    font-size: 12px;
  }

  .header h1 {
    font-size: 2em;
  }
  ```
- **rem:** Standing for Root em, 1rem represents the size of the base font used in the root element (<html>). rem sizing is good for keeping consistent size of elements across the page. em is better for sizing elements according to what is near them.

- **percent:** Percent values size elements relative to their parent containers. Good for margins and padding because it takes into account the size of the parent. In the below example, the element `.child` will have a height and width of 250px.
  ```css 
  .parent {
    width: 500px;
    height: 500px;
  }

  .child {
    width: 50%;
    height: 50%;
  }
  ```
