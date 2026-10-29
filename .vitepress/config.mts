import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aviation Knowledge Base',
  description: 'Aviation operational, fleet, human factors, and regulatory repository for gsacharya.com/avrepo',
  base: '/avrepo/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/avrepo/airplane-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#1E5631' }]
  ],

  themeConfig: {
    siteTitle: 'Aviation Knowledge Base',
    logo: {
      text: '✈'
    },

    nav: [
      { text: 'Dashboard', link: '/' },
      { text: 'Fleet & YOM', link: '/fleet/nepal-civil-register' },
      { text: 'CAAN & ICAO Regulations', link: '/regulations/icao-annexes' },
      { text: 'Safety Taxonomies', link: '/safety-taxonomies/adrep-hfacs' },
      { text: 'Mountain ADM', link: '/human-factors/decision-making' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Operational Dashboard', link: '/' }
        ]
      },
      {
        text: 'Nepal Civil Fleet',
        items: [
          { text: 'Operator Registry & YOM Tracking', link: '/fleet/nepal-civil-register' }
        ]
      },
      {
        text: 'Regulatory Architecture',
        items: [
          { text: 'ICAO Annexes & CAAN Framework', link: '/regulations/icao-annexes' }
        ]
      },
      {
        text: 'Safety & Taxonomies',
        items: [
          { text: 'ADREP & HFACS (Nepal Airspace)', link: '/safety-taxonomies/adrep-hfacs' }
        ]
      },
      {
        text: 'Operational Human Factors',
        items: [
          { text: 'Mountain Aeronautical Decision Making', link: '/human-factors/decision-making' }
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
