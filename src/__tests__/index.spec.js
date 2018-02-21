import fs from 'fs'
import path from 'path'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import mosaic from '..'

expect.extend({ toMatchImageSnapshot })

test('mosaic', async () => {
  const canvas = await mosaic({
    width: 1024,
    height: 768,
    target: fs.readFileSync(path.join(__dirname, 'target.jpg')),
    sources: [
      fs.readFileSync(path.join(__dirname, 'source1.png')),
      fs.readFileSync(path.join(__dirname, 'source2.jpg')),
    ],
  })
  expect(canvas.toBuffer()).toMatchImageSnapshot()
})
