module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
  ],
}
