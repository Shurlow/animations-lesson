# CSS Animations gConf

![Animaniacs](https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Animaniacs.svg/1280px-Animaniacs.svg.png)

### Animation in the following ways
- CSS property transitions
- CSS transform

## Setup Instructions
- clone repo
- `open index.html`

## `transition` property

### What is the CSS `transition` property

The `transition` property allows you to specify how other properties change over time. It is the simplest type of animation in CSS. You can use it to control changes to a property and take place over a period of time(duration).

CSS properties that can be transitioned include:
 - background-color
 - color
 - opacity
 - font-size
 - line-height
 - padding
 - margin
 - text-shadow
 - z-index
 - ...

Properties that cannot be (properly) transitioned:
- visibility
- font-weight
- font-family
- ...

## keyframes

```css
/*animation: duration | timing-function | delay | iteration-count | direction | fill-mode | play-state*/
animation: shake 1s;
```


## Disclaimer about browser support
just gotta use those browser prefixes really

## Resources
- https://css-tricks.com/snippets/css/keyframe-animation-syntax/
- https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- https://github.com/postcss/autoprefixer

## Inspiration

- http://letters-inc.jp/
