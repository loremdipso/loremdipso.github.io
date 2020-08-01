// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
	const { createPage } = actions
	// Make the front page match everything client side.
	// Normally your paths should be a bit more judicious.
	if (page.path === `/`) {
		page.matchPath = `/*`
		createPage(page)
	}
}

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
	const result = await graphql(`
	  {
		allMarkdownRemark(
		  sort: { order: DESC, fields: [frontmatter___date] }
		  limit: 1000
		) {
		  edges {
			node {
			  frontmatter {
				slug
			  }
			}
		  }
		}
	  }
	`)
	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				// additional data can be passed via context
				slug: node.frontmatter.slug,
			},
		})
	})
}

// build to docs instead of public
const path = require("path")
const fs = require("fs")

exports.onPostBuild = () => {
	const public_dir = path.join(__dirname, "public");
	const docs_dir = path.join(__dirname, "docs");

	try {
		fs.rmdirSync(docs_dir);
	} catch (e) {
		console.log("docs didn't exist, so can't delete it");
	}

	fs.renameSync(public_dir, docs_dir);
}