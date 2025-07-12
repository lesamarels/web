import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Les Amarels",
  description: "ASL Le Domaine des Amarels",
  themeConfig: {
    logo: '/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/docs', activeMatch: '/docs' },
      { text: 'Blog', link: '/blog', activeMatch: '/blog' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/docs/': [
        { 
          text: 'Administration',
          collapsed: true,
          link: '/docs/legal/',
          items: [
            { text: 'Status', link: '/docs/legal/statuts' },
          ]
        },
        {
          text: 'Assemblées générales',
          collapsed: false,
          items: [
            { 
              text: '2025',
              collapsed: false,
              items: [
                { text: 'Convocation', link: '/docs/ag/2025/convocation' },
                { text: 'Bilan financier', link: '/docs/ag/2025/bilan' },
                { text: 'Procès-verbal', link: '/docs/ag/2025/pv' },
              ]
            }
          ]
        },
        { 
          text: 'Guides',
          collapsed: true,
          items: [
          ]
        },
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/blog/': [
        {
          text: '2025',
          items: [
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lesamarels/web' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
        forceLocale: true
      }
    },

    footer: {
      message: '',
      copyright: 'Copyright © 2017-present ASL Le Domaine des Amarels'
    }

  }
})
