import React from "react";
import { navigate } from "gatsby";
import { blogContentToLink } from "./blog";

export default function PostLink({ post }) {
	return (
		<div
			className="post"
			onClick={() => navigate(blogContentToLink(post.frontmatter.slug))}
		>
			<div className="date-title post">
				<div>{post.frontmatter.title}</div>
				<div>{post.frontmatter.date}</div>
			</div>
			<div>{post.excerpt}</div>
		</div>
	);
}
