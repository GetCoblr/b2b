const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: "Coblr | Point-of-Sale and Management System for Repair Businesses",
    description:
      "Coblr empowers repair businesses with the tools to streamline operations, from order management and payment processing to CRM. Join the platform built for repair and transform your business",
    url: "https://getcoblr.com",
    image: "/rectangle-14@2x.png",
    siteUrl: "https://getcoblr.com",
  },

  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/layout/Brand-logo.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
