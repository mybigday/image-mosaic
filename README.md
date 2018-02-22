# @fugood/image-mosaic

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
  width: 1024,
  height: 768,
  target: fs.readFileSync(path.join(__dirname, 'target.jpg')),
  sources: [
    fs.readFileSync(path.join(__dirname, 'source1.png')),
    fs.readFileSync(path.join(__dirname, 'source2.jpg')),
  ],
}).then(canvas => {
  const result = canvas.toBuffer()
})
```

See the documentation of [`node-canvas`](https://github.com/Automattic/node-canvas#canvaspngstreamoptions) for more output methods.

## License

[MIT](LICENSE.md)
