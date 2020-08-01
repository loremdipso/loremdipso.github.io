import React from "react";
import { Link } from "gatsby";
import { blogContentToLink } from "./blog";

export default function PostLink({ post }) {
	return (
		<div>
			<Link to={blogContentToLink(post.frontmatter.slug)}>
				{post.frontmatter.title} ({post.frontmatter.date})
			</Link>
		</div>
	);
}
