require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Michael & Jillian`,
    description: `A personal portfolio site for the one and only Mike Murphy`,
    siteUrl: `https://michaelandjillian.com/`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Tangerine` },
          { family: `Mr De Haviland` },
          { family: `Parisienne` },
        ],
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `MandJ/`,
        maxResults: 1000
      }
    },
    `simple-react-lightbox`
  ],
}
