import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aviation Knowledge Base',
  description: 'Operational Intelligence & Safety Reference for Nepal hosted at avrepo.gsacharya.com',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  // Permanently lock VitePress in dark mode and disable user toggle
  appearance: 'force-dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/airplane-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#0A0A0A' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap' }]
  ],

  themeConfig: {
    siteTitle: 'Aviation Knowledge Base',
    logo: {
      text: '✈'
    },

    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Fleet Register', link: '/fleet/nepal-civil-register' },
      { text: 'Regulations', link: '/regulations/icao-annexes' },
      { text: 'Taxonomies', link: '/safety-taxonomies/adrep-hfacs' },
      { text: 'Mountain ADM', link: '/human-factors/decision-making' }
    ],

    sidebar: [
      {
        text: 'Repository',
        items: [
          { text: 'Overview & Mission', link: '/' }
        ]
      },
      {
        text: 'Civil Aircraft Register',
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
      message: 'Curated by Ghanshyam R. Acharya &bull; Operational reference at avrepo.gsacharya.com',
      copyright: 'Copyright © 2026 G.S. Acharya. All rights reserved.'
    },

    docFooter: {
      prev: 'Previous Section',
      next: 'Next Section'
    }
  }
})
