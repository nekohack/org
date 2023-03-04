import { Product } from '@org/shared/types'

export const products: Product[] = [
  {
    title: 'products.design_system',
    description: 'products.design_system_description',
    url: 'https://normalize.nekohack.me/',
    share: 'jiyuujinlab',
    position: 'contributor',
    sub: [
      {
        title: 'products.react_design_system',
        skills: [
          {
            name: 'Styled Components',
            category: 'Build Tools',
            status: 'active',
          },
          {
            name: 'React',
            category: 'JavaScript Framework',
            status: 'active',
          },
          {
            name: 'Vercel',
            category: 'Static Website Hosting',
            status: 'active',
          },
        ],
      },
      {
        title: 'products.vue_design_system',
        skills: [
          {
            name: 'Scoped CSS',
            category: 'Build Tools',
            status: 'active',
          },
          {
            name: 'Vue',
            category: 'JavaScript Framework',
            status: 'active',
          },
          {
            name: 'Vercel',
            category: 'Static Website Hosting',
            status: 'active',
          },
        ],
      },
    ],
    enabled: false,
  },
  {
    title: 'products.profile',
    description: 'products.profile_description',
    skills: [
      {
        name: 'normalize.css',
        category: 'Design System',
        status: 'active',
      },
      {
        name: 'nekohack-ui',
        category: 'Build Tools',
        status: 'inactive',
      },
      {
        name: 'Gatsby.js',
        category: 'JavaScript Framework',
        status: 'archived',
      },
      {
        name: 'Next.js',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'AWS S3',
        category: 'Static Website Hosting',
        status: 'active',
      },
      {
        name: 'AWS CloudFront',
        category: 'CDN',
        status: 'active',
      },
      {
        name: 'Circle CI',
        category: 'CI',
        status: 'inactive',
      },
      {
        name: 'Github Actions',
        category: 'CI',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'jiyuujin/kitten',
        url: 'https://github.com/jiyuujin/kitten',
        status: 'inactive',
      },
      {
        name: 'nekohack/org',
        url: 'https://github.com/nekohack/org',
        status: 'active',
      },
    ],
    image: 'top',
    url: 'https://yuma-kitamura.nekohack.me/',
    share: 'jiyuujinlab',
    position: 'contributor',
    enabled: true,
  },
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
        name: 'Deno Deploy',
        category: 'Static Website Hosting',
        status: 'active',
      },
      {
        name: 'AWS CloudFront',
        category: 'CDN',
        status: 'inactive',
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
        name: 'Github Actions',
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
        url: 'https://github.com/nekohack/blog',
        status: 'inactive',
      },
    ],
    image: 'webneko-blog',
    url: 'https://blog.nekohack.me/',
    share: 'jiyuujinlab',
    position: 'contributor',
    enabled: true,
  },
  {
    title: 'products.vuefes_2022',
    description: 'products.vuefes_2022_description',
    skills: [
      {
        name: 'Nuxt.js',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Newt',
        category: 'Headless CMS',
        status: 'active',
      },
      {
        name: 'Netlify',
        category: 'Static Website Hosting',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'vuejs-jp/vuefes-2022',
        url: 'https://github.com/vuejs-jp/vuefes-2022',
        status: 'active',
      },
    ],
    image: 'vuefes-2022',
    url: 'https://vuefes.jp/2022',
    share: 'vuejs-jp',
    position: 'staff',
    enabled: true,
  },
  {
    title: 'products.revup_2022',
    description: 'products.revup_2022_description',
    skills: [
      {
        name: 'SvelteKit',
        category: 'JavaScript Framework',
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
    ],
    repos: [
      {
        name: 'LPF-REVUP/lpf-revup-2022',
        url: 'https://github.com/LPF-REVUP/lpf-revup-2022',
        status: 'active',
      },
    ],
    image: 'revup-2022',
    url: 'https://revup.jp/',
    share: 'linedc',
    position: 'contributor',
    enabled: true,
  },
  {
    title: 'products.flutterkaigi_2022',
    description: 'products.flutterkaigi_2022_description',
    skills: [
      {
        name: 'Flutter',
        category: 'Cross Platform Framework',
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
        name: 'FlutterKaigi/2022',
        url: 'https://github.com/FlutterKaigi/2022',
        status: 'active',
      },
    ],
    image: 'flutterkaigi-2022',
    url: 'https://flutterkaigi.jp/2022',
    share: 'FlutterKaigi',
    position: 'organizer',
    enabled: true,
  },
  {
    title: 'products.flutterkaigi_2021',
    description: 'products.flutterkaigi_2021_description',
    skills: [
      {
        name: 'Flutter',
        category: 'Cross Platform Framework',
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
    ],
    repos: [
      {
        name: 'FlutterKaigi/2021',
        url: 'https://github.com/FlutterKaigi/2021',
        status: 'active',
      },
    ],
    image: 'flutterkaigi-2021',
    url: 'https://flutterkaigi.jp/2021',
    share: 'FlutterKaigi',
    position: 'organizer',
    enabled: true,
  },
  {
    title: 'products.vscodeconjp_2023',
    description: 'products.vscodeconjp_2023_description',
    skills: [
      {
        name: 'CSS modules',
        category: 'Build Tools',
        status: 'active',
      },
      {
        name: 'Next.js',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Github Pages',
        category: 'CI',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'vscodejp/conference',
        url: 'https://github.com/vscodejp/conference',
        status: 'active',
      },
    ],
    image: 'vscodeconjp-2023',
    url: 'https://vscodejp.github.io/conference/2022-2023/ja',
    share: 'vscodejp',
    position: 'contributor',
    enabled: true,
  },
  {
    title: 'products.vscodeconjp_2021',
    description: 'products.vscodeconjp_2021_description',
    skills: [
      {
        name: 'CSS modules',
        category: 'Build Tools',
        status: 'active',
      },
      {
        name: 'Next.js',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Github Pages',
        category: 'CI',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'vscodejp/conf2021',
        url: 'https://github.com/vscodejp/conf2021',
        status: 'active',
      },
    ],
    image: 'vscodeconjp-2021',
    url: 'https://vscodejp.github.io/conf2021/ja',
    share: 'vscodejp',
    position: 'contributor',
    enabled: true,
  },
]
