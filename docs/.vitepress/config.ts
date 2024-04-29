import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tp2 Appweb",
  description: "Tp2 Andry Ravelomanantsoa et Aboue Abigail Helene Beke",
  base: "/tp2_appweb/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Revue de code semaine 1 - Andry', link: '/revue-code-1.md' },
          { text: 'Revue de code semaine 2 - Andry', link: '/revue-code-2.md' },
          { text: 'Revue de code semaine 3 - Andry', link: '/revue-code-3.md' },
          { text: 'Revue de code semaine 1 - Abigail', link: '/revue-code-1A.md' },
          { text: 'Revue de code semaine 2 - Andry', link: '/revue-code-2a.md' },
          { text: 'Revue de code semaine 3 - Andry', link: '/revue-code-3a.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
