const puppeteer = require("puppeteer");
const path = require("path");

const fs = require("fs");

const OG_SOURCE_DIR_PATH = path.join(__dirname, "data");
const OG_SOURCE_HTML_FILE_PATH = path.join(OG_SOURCE_DIR_PATH, "og.html");
const OG_DIR_PATH = path.join(__dirname, "..", "..", "apps", "nextjs", "public", "og");

async function captureOgImage(
  browser: any,
  url: string = "",
  title: string = "",
  description: string = "",
  imagePath: string
) {
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  if (url) {
    await page.goto(url);
  } else {
    await page.goto("file://" + OG_SOURCE_HTML_FILE_PATH);
    await page.exposeFunction("getTitle", () => title);
    await page.exposeFunction("getDescription", () => description);
  }
  await page.reload();
  await page.screenshot({
    path: imagePath,
    type: "jpeg",
  });
  await page.close();
}

(async function () {
  const ogList = [
    {
      slug: "top",
      url: "",
      title: "Yuma Kitamura",
      description: "Web Developer",
    },
    {
      slug: "webneko-blog",
      url: "https://webneko.dev",
      title: "",
      description: "",
    },
    {
      slug: "nekohack-me",
      url: "https://nekohack.me",
      title: "",
      description: "",
    },
    {
      slug: "yuma_kitamura-nekohack-me",
      url: "https://yuma-kitamura.nekohack.me",
      title: "",
      description: "",
    },
    {
      slug: "flutterkaigi-2021",
      url: "https://flutterkaigi.jp",
      title: "",
      description: "",
    },
    {
      slug: "vscodejpcon-2021",
      url: "https://vscodejp.github.io/conf2021/ja",
      title: "",
      description: "",
    },
    {
      slug: "eventin",
      url: "https://jp.vcube.com/eventdx/eventin",
      title: "",
      description: "",
    },
  ];

  const browser = await puppeteer.launch();

  for (const { slug, url, title, description } of ogList) {
    const OG_IMAGE_FILE_PATH = `${OG_DIR_PATH}/` + slug + ".jpg";
    await captureOgImage(browser, url, title, description, OG_IMAGE_FILE_PATH);
  }

  await browser.close();
})();
