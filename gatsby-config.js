module.exports = {
  siteMetadata: {
    title: 'Aerochamber Plus Flow-Vu | Anti-Static Valved Holding Chamber',
    desc: 'Anti-Static Valved Holding Chamber'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'sba1oeh'
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
};
