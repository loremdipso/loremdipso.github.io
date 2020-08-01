import React from "react";
import PostLink from "./post-link";
import { StaticQuery, graphql, Link } from "gatsby";

export default function Listing() {
	return (
		<StaticQuery
			query={graphql`
				query {
					allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] }
					) {
						edges {
							node {
								id
								excerpt(pruneLength: 250)
								frontmatter {
									date(formatString: "MMMM DD, YYYY")
									slug
									title
								}
							}
						}
					}
				}
			`}
			render={(data) => {
				const edges = data.allMarkdownRemark.edges;
				const Posts = edges
					.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
					.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
				return <div>{Posts}</div>;
			}}
		/>
	);
}
