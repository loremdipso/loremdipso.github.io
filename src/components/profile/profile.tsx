import React, { useState } from "react";
import ProfilePic from "./profile-pic";
import styled from "styled-components";

const BigHeader = styled.h1`
	font-size: 5em;
`;

const SubHeader = styled.h2`
	font-size: 2em;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div``;

export default function Profile({ path }: { path: string }) {
	return (
		<div className="centered-content">
			<HeaderLeft>
				<BigHeader>Michael Adams</BigHeader>
				<SubHeader>Software Engineer</SubHeader>
			</HeaderLeft>
			<HeaderRight>
				<ProfilePic />
			</HeaderRight>
			<Content />
		</div>
	);
}

function Content() {
	return (
		<article>
			<p>Hello</p>
			<p>There</p>
		</article>
	);
}
