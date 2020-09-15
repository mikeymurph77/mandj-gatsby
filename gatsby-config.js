require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Michael & Jillian`,
    description: `Michael and Jillian's Wedding Site`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Michael and Jillian",
        short_name: "Michael&Jillian",
        start_url: "/",
        background_color: "#3c6492",
        theme_color: "#3c6492",
        display: "standalone",
        icon: "src/images/favicon-32x32.png"
      },
    },
    `simple-react-lightbox`
  ],
}
