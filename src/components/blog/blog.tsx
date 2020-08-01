import React from "react";
import { APP_ROUTES } from "../../config/routes";
import Listing from "./listing";
import SinglePost from "./single-post";

export function Blog({ path }: { path: string }) {
	if (path == APP_ROUTES.blog) {
		return <Listing />;
	} else {
		return <SinglePost />;
	}
}

export function blogContentToLink(url: string): string {
	return url.replace("blog_content", "blog");
}

export function linkToBlogContent(url: string): string {
	// TODO: make less hack
	let contentUrl = url.replace("blog", "page-data/blog_content");
	if (!contentUrl.endsWith("/")) {
		contentUrl = contentUrl + "/";
	}
	contentUrl += "page-data.json";
	return contentUrl;
}
