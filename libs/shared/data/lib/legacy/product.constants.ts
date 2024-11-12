import { Product } from '@org/shared/types'

export const products: Product[] = [
  {
    title: 'products.tech_blog',
    description: 'products.tech_blog_description',
    skills: [
      {
        name: 'j-stylebook',
        category: 'Design System',
        status: 'inactive',
      },
      {
        name: 'Nuxt.js',
        category: 'JavaScript Framework',
        status: 'inactive',
      },
      {
        name: 'Lume',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Contentful',
        category: 'Headless CMS',
        status: 'inactive',
      },
      {
        name: 'AWS Fargate',
        category: 'Container',
        status: 'inactive',
      },
      {
        name: 'AWS CloudFront',
        category: 'CDN',
        status: 'inactive',
      },
      {
        name: 'Deno Deploy',
        category: 'Static Website Hosting',
        status: 'active',
      },
      {
        name: 'Travis CI',
        category: 'CI',
        status: 'inactive',
      },
      {
        name: 'Circle CI',
        category: 'CI',
        status: 'inactive',
      },
      {
        name: 'GitHub Actions',
        category: 'CI',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'jiyuujin/webneko-blog',
        url: 'https://github.com/jiyuujin/webneko-blog',
        status: 'inactive',
      },
      {
        name: 'nekohack/blog',
        url: 'https://github.com/jiyuujin/blog',
        status: 'active',
      },
      {
        name: 'nekohack/blog',
        url: 'https://github.com/jiyuujin/blog-content',
        status: 'active',
      },
    ],
    image: 'webneko-blog',
    urls: ['https://blog.nekohack.me/'],
    shares: [['bluesky', 'jiyuujin'], ['mastodon', 'https://times.nekohack.me/'], ['twitter', 'jiyuujinlab']],
    position: 'contributor',
    enabled: true,
  },
  {
    title: 'products.staff_operations',
    description: 'products.staff_operations_description',
    skills: [
      {
        name: 'Nuxt.js',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Flutter',
        category: 'Cross Platform Framework',
        status: 'active',
      },
      {
        name: 'SvelteKit',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Newt',
        category: 'Headless CMS',
        status: 'active',
      },
      {
        name: 'microCMS',
        category: 'Headless CMS',
        status: 'active',
      },
      {
        name: 'Netlify',
        category: 'Static Website Hosting',
        status: 'active',
      },
      {
        name: 'Firebase hosting',
        category: 'Static Website Hosting',
        status: 'inactive',
      },
      {
        name: 'GitHub Page',
        category: 'Static Website Hosting',
        status: 'active',
      },
      {
        name: 'Codemagic Static Page',
        category: 'Static Website Hosting',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'vuejs-jp/vuefes-2024',
        url: 'https://github.com/vuejs-jp/vuefes-2024',
        status: 'active',
      },
      {
        name: 'vuejs-jp/vuefes-2023',
        url: 'https://github.com/vuejs-jp/vuefes-2023',
        status: 'active',
      },
      {
        name: 'vuejs-jp/vuefes-2022',
        url: 'https://github.com/vuejs-jp/vuefes-2022',
        status: 'active',
      },
      {
        name: 'FlutterKaigi/2022',
        url: 'https://github.com/FlutterKaigi/2022',
        status: 'active',
      },
      {
        name: 'FlutterKaigi/2021',
        url: 'https://github.com/FlutterKaigi/2021',
        status: 'active',
      },
      {
        name: 'LPF-REVUP/lpf-revup-2022',
        url: 'https://github.com/LPF-REVUP/lpf-revup-2022',
        status: 'active',
      },
    ],
    image: 'vuefes-2022',
    urls: [
      'https://vuefes.jp/2024',
      'https://vuefes.jp/2023',
      'https://vuefes.jp/2022',
      'https://2022.flutterkaigi.jp/',
      'https://2021.flutterkaigi.jp/',
      'https://revup.jp/2022',
    ],
    shares: [['twitter', 'vuejs-jp'], ['twitter', 'FlutterKaigi'], ['twitter', 'linedc']],
    position: 'staff',
    enabled: true,
  },
]
