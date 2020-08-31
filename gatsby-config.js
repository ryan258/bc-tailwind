const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Bryan Cee`,
    description: `Originally a poet, Bryan Cee portrayed a different aspect of his personality, through his compositions and introspective, conscious lyrics.`,
    author: `@258webdesigner`,
    facebook: `https://www.facebook.com/BryanCeemusic/`,
    instagram: `https://www.instagram.com/bryan.cee/`,
    soundcloud: `https://soundcloud.com/user-520937318`,
    youtube: `https://www.youtube.com/channel/UC1l0H9i9eV5iJpORVUD6wgA`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
