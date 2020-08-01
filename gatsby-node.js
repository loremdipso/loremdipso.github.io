const path = require("path");
const fs = require("fs");
var ncp = require('ncp').ncp;

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


exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

	return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }`
	)
		.then(result => {
			if (result.errors) {
				return Promise.reject(result.errors);
			}

			result.data.allMarkdownRemark.edges
				.forEach(({ node }) => {
					createPage({
						path: node.frontmatter.slug,
						component: blogPostTemplate,
						context: {} // additional data can be passed via context
					});
				});
		});
}


// build to docs instead of public

exports.onPostBuild = () => {
	const public_dir = path.join(__dirname, "public");
	const docs_dir = path.join(__dirname, "docs");

	try {
		fs.rmdirSync(docs_dir);
	} catch (e) {
		console.log("docs didn't exist, so can't delete it");
	}

	ncp(public_dir, docs_dir);
}