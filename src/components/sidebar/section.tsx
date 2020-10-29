import { navigate } from "gatsby";
import React, { useState } from "react";

export interface ISectionProps {
	// default to left
	alignTitle?: "center" | "left" | "right";
	title: string;

	// if this section links elsewhere, setting useRouter to true
	//will make us use gatsby's router. Otherwise we'll just go there
	useRouter?: boolean;
	linkTo?: string;

	children?: JSX.Element | JSX.Element[];
	excludePadding?: boolean;
	showTitle?: boolean;
}

export function Section({
	children,
	title,
	showTitle,
	alignTitle,
	linkTo,
	useRouter,
}: ISectionProps) {
	let content = showTitle ? (
		<>
			<h2 style={{ textAlign: alignTitle || "left" }}>{title}</h2>
			{children ? <>{children}</> : null}
		</>
	) : (
		<>{children}</>
	);

	if (linkTo) {
		content = (
			<a
				className="section-link"
				href={linkTo}
				onClick={(event) => {
					if (useRouter) {
						event.preventDefault();
						navigate(linkTo);
					}
				}}
			>
				{content}
			</a>
		);
	}

	return content;
}

function getClassName(alignment?: string): string {
	return "ml-auto mr-auto";
}
