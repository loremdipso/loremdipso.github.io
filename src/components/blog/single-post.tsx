import React, { useState, useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";
import { linkToBlogContent } from "./blog";

export default function SinglePost() {
	// TODO: can we... not pre-fetch? Or is that not a problem?
	const [content, setContent] = useState(null);
	const [title, setTitle] = useState(null);
	const [date, setDate] = useState(null);

	useEffect(() => {
		console.log(linkToBlogContent(location.href));
		fetch(linkToBlogContent(location.href)).then((response) => {
			if (response.ok) {
				response.json().then((obj) => {
					let page = obj.result.data.markdownRemark;
					setTitle(page.frontmatter.title);
					setDate(page.frontmatter.date);
					setContent(getContent(page.html));
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
		<ContainerWithSidebar hideSidebar>
			<ContainerWithSidebar.Section title={title}>
				<h2 className="centered">{title}</h2>
			</ContainerWithSidebar.Section>

			{content}
		</ContainerWithSidebar>
	);
}

// NOTE: slow (ish) and potentially dangerous. But we trust ourselves, no?
// And fast enough is perfect
function getContent(html: string): JSX.Element[] {
	// make real DOM node to parse our html string
	let content = document.createElement("div");
	content.innerHTML = html;

	// run through children of our content, splitting whenever we see a header
	let sections = [];
	let currentSection = [];
	for (let i = 0; i < content.children.length; i++) {
		let child = content.children[i];
		if (child) {
			if (isHeader(child.tagName)) {
				if (currentSection.length > 0) {
					sections.push(fixSection(currentSection, sections.length));
					currentSection = [];
				}
			}
			currentSection.push(child);
		}
	}

	// make sure we push any leftover content
	if (currentSection.length > 0) {
		sections.push(fixSection(currentSection, sections.length));
	}

	return sections;
}

function isHeader(tagName: string): boolean {
	switch (tagName) {
		case "H1":
		case "H2":
		case "H3":
		case "H4":
		case "H5":
			return true;
	}
	return false;
}

function fixSection(arr: HTMLElement[], key: string | number) {
	let title = null;
	if (isHeader(arr[0].tagName)) {
		title = arr[0].textContent;
	}
	let html = arr.map((el) => el.outerHTML).join("");

	return (
		<ContainerWithSidebar.Section title={title} key={key}>
			<div
				dangerouslySetInnerHTML={{
					__html: html,
				}}
			/>
		</ContainerWithSidebar.Section>
	);
}
