import Canvas, { Image } from 'canvas'
import Grid from './grid'
import Picture from './picture'

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
    sources.forEach(image => {
      const img = new Image()
      img.src = image
      const picture = new Picture(
        img,
        Math.floor(width / columns),
        Math.floor(height / rows),
      )
      grid.addPicture(picture)
    })
  }

  let targetPicture
  if (target && grid.poolSize > 0) {
    const img = new Image()
    img.src = target
    targetPicture = new Picture(img, columns, rows)
    targetPicture.setSize(
      columns,
      rows,
      getPixelAspectRatio(width, height, columns, rows),
    )
    return grid.setTarget(targetPicture).then(() => {
      const context = canvas.getContext('2d')

      context.fillRect(10, 10, 100, 100)
      context.drawImage(grid._canvas, 0, 0, width, height)
      return canvas
    })
  }
  return Promise.resolve(canvas)
}
