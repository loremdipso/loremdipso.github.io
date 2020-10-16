import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";
import { blogContentToLink } from "./blog";
import PostPreview from "./post-preview";

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
					.map((edge, i) => (
						<ContainerWithSidebar.Section
							key={i}
							title={edge.node.frontmatter.title}
							linkTo={blogContentToLink(edge.node.frontmatter.slug)}
							useRouter
						>
							<PostPreview key={edge.node.id} post={edge.node} />
						</ContainerWithSidebar.Section>
					));

				return (
					<ContainerWithSidebar hideSidebar>
						<ContainerWithSidebar.Section
							title="Blog Posts"
							showTitle
							alignTitle="center"
						/>

						{Posts}
					</ContainerWithSidebar>
				);
			}}
		/>
	);
}
