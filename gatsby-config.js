/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Michael Adams`
	},

	plugins: [
		`gatsby-plugin-sass`,
		// 'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		`gatsby-remark-prismjs`,  // syntax highlighting

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/markdown-pages`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [] // just in case those previously mentioned remark plugins sound cool :)
			}
		},

	],
}
