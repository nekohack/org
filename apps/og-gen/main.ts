const puppeteer = require('puppeteer')
const path = require('path')

const fs = require('fs')

const OG_SOURCE_DIR_PATH = path.join(__dirname, 'data')
const OG_SOURCE_HTML_FILE_PATH = path.join(OG_SOURCE_DIR_PATH, 'og.html')
const COMPANY_OG_DIR_PATH = path.join(
  __dirname,
  '..',
  '..',
  'apps',
  'company-legacyapp',
  'public',
  'og',
)
const PROFILE_OG_DIR_PATH = path.join(
  __dirname,
  '..',
  '..',
  'apps',
  'portfolio-legacyapp',
  'public',
  'og',
)

async function captureOgImage(
  browser: any,
  url: string = '',
  title: string = '',
  description: string = '',
  imagePath: string,
) {
  const page = await browser.newPage()
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'ja-JP',
  })
  await page.setViewport({
    width: 1200,
    height: 630,
  })
  if (url) {
    await page.goto(url)
  } else {
    await page.goto('file://' + OG_SOURCE_HTML_FILE_PATH)
    await page.exposeFunction('getTitle', () => title)
    await page.exposeFunction('getDescription', () => description)
  }
  await page.waitForTimeout(1000)
  await page.reload()
  await page.screenshot({
    path: imagePath,
    type: 'jpeg',
  })
  await page.close()
}

;(async function () {
  const ogList = [
    {
      slug: 'nekohack-top',
      url: '',
      title: 'nekohack inc.',
      description: 'Kyoto, Japan',
    },
    {
      slug: 'top',
      url: '',
      title: 'Yuma Kitamura',
      description: 'Web Developer',
    },
    {
      slug: 'soranchu-base',
      url: '',
      title: 'そらんちゅ',
      description: 'ITM/RJOO base',
    },
    {
      slug: 'webneko-blog',
      url: 'https://blog.nekohack.me/',
      title: '',
      description: '',
    },
    {
      slug: 'nekohack-me',
      url: 'https://nekohack.me',
      title: '',
      description: '',
    },
    {
      slug: 'yuma_kitamura-nekohack-me',
      url: 'https://yuma-kitamura.nekohack.me',
      title: '',
      description: '',
    },
    {
      slug: 'flutterkaigi-2022',
      url: 'https://flutterkaigi.jp/2022',
      title: '',
      description: '',
    },
    {
      slug: 'flutterkaigi-2021',
      url: 'https://flutterkaigi.jp/2021',
      title: '',
      description: '',
    },
    {
      slug: 'vscodejpcon-2023',
      url: 'https://vscodejp.github.io/conference/2022-2023/ja',
      title: '',
      description: '',
    },
    {
      slug: 'vscodejpcon-2021',
      url: 'https://vscodejp.github.io/conf2021/ja',
      title: '',
      description: '',
    },
    {
      slug: 'eventin',
      url: 'https://jp.vcube.com/eventdx/eventin',
      title: '',
      description: '',
    },
  ]

  const browser = await puppeteer.launch()

  for (const { slug, url, title, description } of ogList) {
    const COMPANY_OG_IMAGE_FILE_PATH = `${COMPANY_OG_DIR_PATH}/` + slug + '.jpg'
    await captureOgImage(browser, url, title, description, COMPANY_OG_IMAGE_FILE_PATH)
    const PROFILE_OG_IMAGE_FILE_PATH = `${PROFILE_OG_DIR_PATH}/` + slug + '.jpg'
    await captureOgImage(browser, url, title, description, PROFILE_OG_IMAGE_FILE_PATH)
  }

  await browser.close()
})()
