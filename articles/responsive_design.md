# Responsive Design

## Relative Units

Responsive design aims to use relative values instead of fixed ones (like pixels)

- **em:** 1em represents the size of the base font being used by the browser, or by the parent element. In the example below, the font size in the header will be 24px.

```css
.header {
  font-size: 12px;
}

.header h1 {
  font-size: 2em;
}
```
