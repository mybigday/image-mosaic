# @fugood/image-mosaic [![Build Status](https://travis-ci.org/mybigday/image-mosaic.svg?branch=master)](https://travis-ci.org/mybigday/image-mosaic) [![NPM version](http://img.shields.io/npm/v/@fugood/image-mosaic.svg?style=flat)](https://www.npmjs.com/package/@fugood/image-mosaic)

Creates an image mosaic,
this package was forked from [`react-image-mosaic`](https://github.com/thejsn/react-image-mosaic) and used [`node-canvas`](https://github.com/Automattic/node-canvas).

## Installation

```bash
$ yarn add @fugood/image-mosaic
```

## Usage

See the [test](src/__tests__/index.spec.js) as usage, you can also refer to [the test fixtures](src/__tests__/) and [image snapshots](src/__tests__/__image_snapshots__).

```js
import mosaic from '@fugood/image-mosaic'

mosaic({
  // The width of the canvas.
  width: 400,
  // The height of the canvas.
  height: 400,
  // The number of columns of images in the mosaic.
  columns: 40,
  // The number of rows of images in the mosaic.
  rows: 40,
  // The amount of blending between each image and its matching color. A number between 0 and 1.
  colorBlending: 0.8,
  // The target image to recreate. Can be a string or an image, the string is assumed to be a url to an image. Expected file buffer.
  target: fs.readFileSync('path/to/image'),
  // An array with urls to images to be used to build the mosaic.
  sources: [
    fs.readFileSync('path/to/image1'),
    fs.readFileSync('path/to/image2'),
  ],
}).then(canvas => {
  const result = canvas.toBuffer()
})
```

See the documentation of [`node-canvas`](https://github.com/Automattic/node-canvas#canvaspngstreamoptions) for more output methods.

## License

[MIT](LICENSE.md)
