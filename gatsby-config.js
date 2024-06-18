require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Postmodern`,
    description: `We design digital experience for small businesses`,
    author: `mariacheline`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATO_API_TOKEN}`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg_icons`, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: `${process.env.HOTJAR_ID}`,
        sv: `${process.env.HOTJAR_SV}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `${process.env.GTM_ID}`,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-iubenda-cookie-footer`,
      options: {
        iubendaOptions: {
          countryDetection: true,
          cookiePolicyInOtherWindow: true,
          consentOnContinuedBrowsing: false,
          lang: "en",
          siteId: 1831941,
          cookiePolicyId: 23496832,
          banner: {
            applyStyles: false,
            rejectButtonColor: "#0073CE",
            rejectButtonCaptionColor: "white",
            position: "float-bottom-right",
            textColor: "white",
            backgroundColor: "#000001",
            zIndex: 9999999,
            cookiePolicyLinkCaption: "Learn more.",
            content:
              'We\'re using cookies. <a href="https://www.iubenda.com/privacy-policy/23496832/cookie-policy" target="_blank" rel="noopener" class="cookie-link">Learn more.</a>',
            innerHtmlCloseBtn:
              '<button type="button" class="iubenda-cs-close-btn" tabindex="0" role="button" aria-pressed="false">OK</button>',
          },
        },
      },
    },
  ],
}
