module.exports = {
  title: 'Formiz',
  tagline: 'React multi steps forms with full validation',
  url: 'https://formiz-react.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ivan-dalmet', // Usually your GitHub org/user name.
  projectName: 'formiz', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'alpha',
      logo: {
        alt: 'Formiz',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/getting-started', label: 'Docs', position: 'left' },
        { to: 'docs/demos/basic-demo', label: 'Demos', position: 'left' },
        {
          href: 'https://github.com/ivan-dalmet/formiz',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Docs',
      //         to: 'docs/getting-started',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Social',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //     ],
      //   },
      // ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'https://docusaurus.io/img/oss_logo.png',
      // },
      copyright: 'Coded with ❤️ in Normandy by Ivan Dalmet - Logotype by David Endico - Documentation powered by Docusaurus (v2)',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};