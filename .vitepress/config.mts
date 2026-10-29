import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aviation Knowledge Base',
  description: 'Aviation operational, fleet, human factors, and regulatory repository for gsacharya.com/avrepo',
  base: '/avrepo/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/avrepo/airplane-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#0284c7' }]
  ],

  themeConfig: {
    siteTitle: 'Aviation Knowledge Base',
    logo: {
      text: '✈'
    },

    nav: [
      { text: 'Dashboard', link: '/' },
      { text: 'Fleet Register', link: '/fleet/nepal-civil-register' },
      { text: 'Safety Taxonomies', link: '/safety-taxonomies/adrep-hfacs' },
      { text: 'Human Factors', link: '/human-factors/decision-making' },
      { text: 'Regulations', link: '/regulations/icao-annexes' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Operational Dashboard', link: '/' }
        ]
      },
      {
        text: 'Aircraft Registers',
        items: [
          { text: 'Nepal Civil Aircraft Register', link: '/fleet/nepal-civil-register' }
        ]
      },
      {
        text: 'Safety & Taxonomies',
        items: [
          { text: 'ADREP & HFACS Frameworks', link: '/safety-taxonomies/adrep-hfacs' }
        ]
      },
      {
        text: 'Operational Human Factors',
        items: [
          { text: 'Aeronautical Decision Making (ADM)', link: '/human-factors/decision-making' }
        ]
      },
      {
        text: 'Regulatory Compliance',
        items: [
          { text: 'ICAO Annexes & Standards', link: '/regulations/icao-annexes' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          options: {
            tokenize: (term: string) => term.split(/[\s\-_\/.,;:]+/),
            processTerm: (term: string) => term.toLowerCase().trim()
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, heading: 2 }
          }
        }
      }
    },

    footer: {
      message: 'Published under gsacharya.com/avrepo aviation documentation framework.',
      copyright: 'Copyright © 2026 G.S. Acharya. All rights reserved.'
    },

    docFooter: {
      prev: 'Previous Section',
      next: 'Next Section'
    }
  }
})
