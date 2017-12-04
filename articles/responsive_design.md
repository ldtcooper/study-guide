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

- **percent:** Percent values size elements relative to the width of their parent containers. Good for margins and padding because it takes into account the size of the parent. In the below example, the element `.child` will have a height and width of 250px.
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
  **NB:** When sizing text, or text -related elements (margin or padding around text) ems or rems should be used. Otherwise, percents should be used.

## Sizing

Even with relative units, elements on a page can still go wrong if the page gets too small or too large. This is where the min-width and max-width properties come into play (also works for height). In the below example, the element `#relative-width-example` will never be smaller than 100px, and will never get larger than 500px.

  ```css
  #relative-width-example {
    min-width: 100px;
    max-width: 500px;
  }
  ```

The following is a common design pattern in CSS to make images scale correctly:

  ```css
  #img-container {
    width: 50%;
    height: 500px; /*or any fixed*/
    overflow: hidden;
  }

  #img-container img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ```

  This ensures that the image is in a box that will change width as it expands or contracts as well as hide extra content.

To scale background images proportionally, set the background size property to cover:

  ```css
  #bg-img {
    background-size: cover;
  }
  ```

## Media Queries

Media queries let us apply different styles to websites depending on the size of the screen. The code below is an example of a media query.

  ```css
  @media only screen and (max-width: 480px) {
    body {
      font-size: 12px;
    }
  }
  ```

The `only screen` portion is which types of media should get these styles (screen, print, etc.) while the parenthesized part after the `and` is the *media feature* -- other conditions that must be met for the styles to be applied. In this case, the styles will be applied to screens with a width 480px and under.

Media features can also be chained with `and`. This is how to create ranges of screen size to apply styles to. For example, the below code will apply its styles to elements between 320 and 480 pixels. It can also be done with two separate queries

  ```css
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /*styles go here*/
  }
  ```

Media queries can also target screen resolution (i.e. dots per inch/centimeter) to avoid downloading high-res images onto older machines that can't display them properly. The below example will only apply its styles to devices with screens of >=300dpi.

  ```css
  @media only screen and (min-resolution: 300dpi) {
    /*styles go here*/
  }
  ```

The `and` operator can be used to chain features together if all of them must be met. If only one must be met, they can be chained with commas:

  ```css
  @media only screen and (min-width: 480), (orientation: landscape) {
    /*styles go here*/
  }
  ```

The above example also uses the `orientation: landscape` feature, which checks to see if the screen is wider than it is tall.

Breakpoints are the sizes at which the content on a page breaks.
