const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const locales = ["en", "it"]

  const pages = ["index", "about", "case-studies", "services", "404"]

  locales.forEach(locale => {
    pages.map(page => {
      let slug = page === "index" ? "" : page
      const prefix = locale === "en" ? "" : `/${locale}`
      return createPage({
        path: `${prefix}/${slug}`,
        component: path.resolve(`./src/templates/${page}.js`),
        context: { locale },
      })
    })
  })

  await Promise.all(
    locales.map(locale =>
      graphql(`
          {
            caseStudy: allDatoCmsCaseStudiesCollection(filter: {locale: { eq: "${locale}" } }) {
              edges {
                node {
                  locale
                  slug
                }
              }
            }
          }
        `).then(result => {
        result.data.caseStudy.edges.forEach(item => {
          const prefix = locale === "en" ? "" : `/${locale}`
          let p = `${prefix}/case-studies/${item.node.slug}`
          createPage({
            path: p,
            component: path.resolve(`./src/templates/case-study.js`),
            context: {
              locale,
              slug: item.node.slug,
            },
          })
        })
      })
    )
  )
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /moduleName/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
