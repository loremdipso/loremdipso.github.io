import React, { useState, useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";
import { linkToBlogContent } from "./blog";

export default function SinglePost() {
	// TODO: can we... not pre-fetch? Or is that not a problem?
	const [content, setContent] = useState(null);

	useEffect(() => {
		console.log(linkToBlogContent(location.href));
		fetch(linkToBlogContent(location.href)).then((response) => {
			if (response.ok) {
				response.json().then((content) => {
					setContent(
						<div
							dangerouslySetInnerHTML={{
								__html: content.result.data.markdownRemark.html,
							}}
						/>
					);
				});
			} else {
				// TODO: handle this error
				debugger;
			}
		});
	}, [location.href]);

	if (!content) {
		return null;
	}
	console.log(content);

	return (
		<ContainerWithSidebar>
			<ContainerWithSidebar.Section title="Blog Posts" showTitle>
				{content}
			</ContainerWithSidebar.Section>
		</ContainerWithSidebar>
	);
}
