

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Front-end Learning Java',
  tagline: '',
  favicon: 'img/favicon.ico',
  // themes: ['@docusaurus/theme-search-algolia'],
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',

  // baseUrl: '/JavaDocs/',
  baseUrl: '/',

  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使你不使用内部化，你也可以使用这个字段来设置有用的元数据，
  // 比如html lang。例如，如果您的网站是中文的，您可能希望
  // 将"en"替换为"zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Find me',
          items: [

            {
              label: 'Gitee',
              href: 'https://gitee.com/timspan/',
            },
            {
              label: 'Github',
              href: 'https://github.com/timspan',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },

          ],
        },
      ],
      copyright: `${new Date().getFullYear()} It's a new Day 😄 Kevin --- Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // 默认情况下启用上下文搜索。
    // 它确保搜索结果与当前语言和版本相关。
    algolia: {
      appId: 'WLW8WJC299',
      apiKey: '65246335b28a932945d1827ad4e216a7',
      indexName: 'KEVIN_INDEX_NAME',
    },
  },


  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
