// Generates the PWA icons (public/icons/icon-192.png, icon-512.png):
// a navy square with the Innovanti wordmark rendered as a white silhouette.
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const LOGO = path.join('public', 'innovanti-logo.png')
const OUT = path.join('public', 'icons')
const NAVY = { r: 10, g: 19, b: 36, alpha: 1 } // #0a1324

async function whiteWordmark() {
  // Read raw RGBA and rebuild as a pure-white shape using the original alpha.
  const { data, info } = await sharp(LOGO).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const n = info.width * info.height
  const rgba = Buffer.alloc(n * 4)
  for (let i = 0; i < n; i++) {
    rgba[i * 4] = 255
    rgba[i * 4 + 1] = 255
    rgba[i * 4 + 2] = 255
    rgba[i * 4 + 3] = data[i * 4 + 3]
  }
  return sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer()
}

async function gen(size, logoBuf) {
  const resized = await sharp(logoBuf).resize({ width: Math.round(size * 0.62) }).toBuffer()
  const meta = await sharp(resized).metadata()
  await sharp({ create: { width: size, height: size, channels: 4, background: NAVY } })
    .composite([{ input: resized, top: Math.round((size - meta.height) / 2), left: Math.round((size - meta.width) / 2) }])
    .png()
    .toFile(path.join(OUT, `icon-${size}.png`))
  console.log(`wrote icon-${size}.png`)
}

;(async () => {
  fs.mkdirSync(OUT, { recursive: true })
  const logo = await whiteWordmark()
  await gen(192, logo)
  await gen(512, logo)
})()
