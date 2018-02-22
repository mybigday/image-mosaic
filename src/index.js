import Canvas, { Image } from 'canvas'
import Grid from './grid'
import Picture from './picture'

const createImage = buffer => {
  const img = new Image()
  img.src = buffer
  return img
}

const getPixelAspectRatio = (width, height, columns, rows) =>
  width / columns / (height / rows)

export default function(props = {}) {
  const {
    width = 400,
    height = 400,
    columns = 40,
    rows = 40,
    colorBlending = 0.8,
    sources = [],
    target = null,
  } = props
  const canvas = new Canvas(width, height)
  const grid = new Grid()

  grid.colorBlending = colorBlending
  grid.setSize(width, height, columns, rows)

  if (sources.length) {
    sources.forEach(src => {
      const picture = new Picture(
        createImage(src),
        Math.floor(width / columns),
        Math.floor(height / rows),
      )
      grid.addPicture(picture)
    })
  }

  let targetPicture
  if (target && grid.poolSize > 0) {
    targetPicture = new Picture(createImage(target), columns, rows)
    targetPicture.setSize(
      columns,
      rows,
      getPixelAspectRatio(width, height, columns, rows),
    )
    return grid.setTarget(targetPicture).then(() => {
      const context = canvas.getContext('2d')
      context.drawImage(grid.canvas, 0, 0, width, height)
      return canvas
    })
  }
  return Promise.resolve(canvas)
}
