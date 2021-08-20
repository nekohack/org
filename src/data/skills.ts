export interface SkillItem {
  header: string
  items: string[]
}

export const skills: SkillItem[] = [
  {
    header: 'Frontend',
    items: [
      'HTML',
      'CSS & SCSS',
      'CSS modules',
      'styled-components',
      'TypeScript',
      'JavaScript',
      'Vue, Nuxt.js',
      'React, Next.js & Gatsby.js',
      'Svelte',
      'Angular.js, jQuery',
      'Flutter',
      'Swift, Objective-C, Android (Kotlin)',
      'State management (Redux, MobX, Vuex and Riverpod)',
    ],
  },
  {
    header: 'Backend',
    items: [
      'Express & Nest.js',
      'Java',
      'Scala, Play',
      'PHP, Laravel & CakePHP',
      'REST APIs',
      'GraphQL APIs',
      'MySQL, PostgreSQL',
      'MongoDB',
      'Firestore',
    ],
  },
  {
    header: 'Others',
    items: ['AWS, GCP', 'IntelliJ (PHPStorm)', 'VSCode', 'Vim', 'Git'],
  },
]
