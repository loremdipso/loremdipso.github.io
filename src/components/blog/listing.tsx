import React from "react";
import PostLink from "./post-link";
import { StaticQuery, graphql, Link } from "gatsby";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";

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
						>
							<PostLink key={edge.node.id} post={edge.node} />
						</ContainerWithSidebar.Section>
					));

				let title = "Blog Posts";
				return (
					<ContainerWithSidebar hideSidebar>
						<ContainerWithSidebar.Section title={title}>
							<h2 className="centered">{title}</h2>
						</ContainerWithSidebar.Section>

						{Posts}
					</ContainerWithSidebar>
				);
			}}
		/>
	);
}
