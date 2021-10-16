'use strict'

const puppeteer = require('puppeteer')
const path = require('path')

const OG_DIR_PATH = path.join(__dirname, '..', 'public', 'og')

async function captureOgImage(browser: any, url: string, imagePath: string) {
  const page = await browser.newPage()
  await page.setViewport({
    width: 1200,
    height: 630,
  })
  await page.goto(url)
  await page.reload()
  await page.screenshot({
    path: imagePath,
    type: 'jpeg',
  })
  await page.close()
}

;(async function () {
  const ogList = [
    { title: 'webneko-blog', url: 'https://webneko.dev' },
    { title: 'nekohack-me', url: 'https://nekohack.me' },
    { title: 'yuma_kitamura-nekohack-me', url: 'https://yuma-kitamura.nekohack.me' },
    { title: 'flutterkaigi-2021', url: 'https://flutterkaigi.jp' },
    { title: 'vscodejpcon-2021', url: 'https://vscodejp.github.io/conf2021/ja' },
  ]

  const browser = await puppeteer.launch()

  for (const { title, url } of ogList) {
    const OG_IMAGE_FILE_PATH = `${OG_DIR_PATH}/` + title + '.jpg'
    await captureOgImage(browser, url, OG_IMAGE_FILE_PATH)
  }

  await browser.close()
})()
