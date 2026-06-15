// Generates Next App Router icon files:
//   app/apple-icon.png  -> 180x180 navy + white wordmark (iOS home screen)
//   app/icon.png        -> 512x512 navy "I" monogram with red base (browser favicon)
const sharp = require('sharp')
const path = require('path')

const LOGO = path.join('public', 'innovanti-logo.png')
const NAVY = { r: 10, g: 19, b: 36, alpha: 1 } // #0a1324

async function whiteWordmark() {
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

async function appleIcon() {
  const size = 180
  const logo = await sharp(await whiteWordmark()).resize({ width: Math.round(size * 0.64) }).toBuffer()
  const meta = await sharp(logo).metadata()
  await sharp({ create: { width: size, height: size, channels: 4, background: NAVY } })
    .composite([{ input: logo, top: Math.round((size - meta.height) / 2), left: Math.round((size - meta.width) / 2) }])
    .png()
    .toFile(path.join('app', 'apple-icon.png'))
  console.log('wrote app/apple-icon.png')
}

async function faviconMonogram() {
  const size = 512
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
    <rect width="512" height="512" fill="#0a1324"/>
    <!-- white serif "I" -->
    <rect x="148" y="128" width="216" height="46" rx="6" fill="#ffffff"/>
    <rect x="226" y="128" width="60" height="256" fill="#ffffff"/>
    <rect x="148" y="338" width="216" height="46" rx="6" fill="#ffffff"/>
    <!-- red brand accent -->
    <rect x="178" y="410" width="156" height="30" rx="10" fill="#C8102E"/>
  </svg>`
  await sharp(Buffer.from(svg)).png().toFile(path.join('app', 'icon.png'))
  console.log('wrote app/icon.png')
}

;(async () => {
  await appleIcon()
  await faviconMonogram()
})()
