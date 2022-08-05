import { Product } from '../../../../libs/shared/types/profile'

export const products: Product[] = [
  {
    title: 'products.design_system',
    description: ['products.design_system_description'],
    url: 'https://normalize.nekohack.me/',
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
    description: [
      'products.profile_description_1',
      'products.profile_description_2',
      'products.profile_description_3',
    ],
    skills: [
      {
        name: 'normalize.css',
        category: 'Design System',
        status: 'active',
      },
      {
        name: 'nekohack-ui',
        category: 'Build Tools',
        status: 'active',
      },
      {
        name: 'Gatsby.js',
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
        status: 'active',
      },
    ],
    image: 'https://yuma-kitamura.nekohack.me/og/yuma_kitamura-nekohack-me.jpg',
    url: 'https://yuma-kitamura.nekohack.me/',
    enabled: true,
  },
  {
    title: 'products.tech_blog',
    description: [
      'products.tech_blog_description_1',
      'products.tech_blog_description_2',
      'products.tech_blog_description_3',
    ],
    skills: [
      {
        name: 'j-stylebook',
        category: 'Atomic Components UI',
        status: 'inactive',
      },
      {
        name: 'Nuxt.js',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Contentful',
        category: 'Headless CMS',
        status: 'active',
      },
      {
        name: 'AWS Fargate',
        category: 'ECS',
        status: 'inactive',
      },
      {
        name: 'AWS Amplify',
        category: 'Static Website Hosting',
        status: 'active',
      },
      {
        name: 'AWS CloudFront',
        category: 'CDN',
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
        name: 'jiyuujin/webneko-blog-next',
        url: 'https://github.com/jiyuujin/webneko-blog-next',
        status: 'active',
      },
    ],
    image: 'https://yuma-kitamura.nekohack.me/og/webneko-blog.jpg',
    url: 'https://webneko.dev/',
    enabled: true,
  },
  {
    title: 'products.minna_de_blog',
    description: ['products.minna_de_blog_description'],
    skills: [
      {
        name: 'Vite',
        category: 'Build Tools',
        status: 'active',
      },
      {
        name: 'Vue',
        category: 'JavaScript Framework',
        status: 'active',
      },
      {
        name: 'Github Issues',
        category: 'CMS',
        status: 'active',
      },
      {
        name: 'Github Actions',
        category: 'CI',
        status: 'active',
      },
      {
        name: 'Vercel',
        category: 'Static Website Hosting',
        status: 'active',
      },
    ],
    image: 'https://yuma-kitamura.nekohack.me/og/ohayo-engineer.jpg',
    url: 'https://ohayo.nekohack.me/',
    enabled: true,
  },
  {
    title: 'products.flutterkaigi_2021',
    description: ['products.flutterkaigi_2021_description'],
    skills: [
      {
        name: 'Flutter',
        category: 'Mobile Application Framework',
        status: 'active',
      },
      {
        name: 'Firebase hosting',
        category: 'Static Website Hosting',
        status: 'active',
      },
    ],
    repos: [
      {
        name: 'FlutterKaigi/confwebsite2021',
        url: 'https://github.com/FlutterKaigi/confwebsite2021',
        status: 'active',
      },
    ],
    image: 'https://yuma-kitamura.nekohack.me/og/flutterkaigi-2021.jpg',
    url: 'https://flutterkaigi.jp/',
    enabled: true,
  },
  {
    title: 'products.vscodeconjp_2021',
    description: ['products.vscodeconjp_2021_description'],
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
    image: 'https://yuma-kitamura.nekohack.me/og/vscodejpcon-2021.jpg',
    url: 'https://vscode.github.io/conf2021/',
    enabled: true,
  },
]
