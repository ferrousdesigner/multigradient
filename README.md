# MultiGradient

> A multi point gradient background maker inspired from 4 color gradient effect in Adobe After Effects.
> Generates beautiful 4-point gradient (QuadGradient) or 6-point gradient (HexaGradient)


## Install

Via CDN

```bash
<script src="https://cdn.jsdelivr.net/npm/multigradient@0.0.10/dist/multigradient.js"></script>

// Minified Version

<script src="https://cdn.jsdelivr.net/npm/multigradient@0.0.10/dist/multigradient.min.js"></script>
```

Via NPM

```bash
npm i -S multigradient
```

## Usage

```bash
import MultiGradient from 'multigradient';

// MultiGradient takes three arguments.
// First argument is your selector of the element, can be a class, id or nested selector like '.example > div'.
// Second argument is an array of strings of 4 colors or 6 colors to make 4-point gradient or 6-point gradient respectively.
// Note: colors can be in hex value, rgba value, or hsla value.
// Third is an optional string argument which is the blending and can be used to adjust blending of colors based of the size on the element.
// Values for blending can be any one of the following strings: 'smooth', 'smoother', 'smoothest'. Default value is 'smooth'.

//For QuadGradient or 4-point 
MultiGradient('.target', ['#ff6060', '#00ff22', '#0000ff', '#ffff00'], 'smooth')

//For HexaGradient or 6-point 
MultiGradient('.target', ['#ff6060', '#00ff22', '#0000ff', '#ffff00', '#f322ff', '#1e85e8'])

//Note: Make sure you are calling the function after the DOM has been rendered.

```
