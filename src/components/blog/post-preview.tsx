import React from "react";

export default function PostPreview({ post }) {
	return (
		<div className="post">
			<div className="date-title post">
				<div>{post.frontmatter.title}</div>
				<div>{post.frontmatter.date}</div>
			</div>
			<div>{post.excerpt}</div>
		</div>
	);
}
