import React from "react";
import { navigate } from "gatsby";
import { Button, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";

const Header = styled.div`
	display: flex;
	padding-left: 1rem;
	padding-top: 1rem;
`;
const SubHeader = styled.h2`
	font-size: 2rem;
`;
const HeaderLeft = styled.div`
	margin-top: auto;
	margin-bottom: auto;
`;
const Name = styled.div`
	max-width: 3rem;
	font-size: 5rem;
	font-weight: bold;
	text-align: left;
`;

export default function Profile({ path }: { path: string }) {
	return (
		<ContainerWithSidebar>
			<ContainerWithSidebar.Section title="Overview" excludePadding>
				<Header>
					<HeaderLeft>
						<Name>Michael Adams</Name>
						<SubHeader>Software Engineer</SubHeader>
					</HeaderLeft>

					<div className="ml-auto mr-auto">
						<img src="profile_pic.jpg" className="avatar" />
					</div>
				</Header>

				<div className="easy-flex">
					<Button variant="secondary" href="/resume.pdf">
						Download Résumé
					</Button>
					<Button
						variant="success"
						href="/blog"
						onClick={handler(() => navigate("/blog"))}
					>
						See cool stuff
					</Button>
				</div>
			</ContainerWithSidebar.Section>

			{/* <ContainerWithSidebar.Section title="About" showTitle>
				<AboutMe />
			</ContainerWithSidebar.Section> */}
		</ContainerWithSidebar>
	);
}

function AboutMe() {
	return (
		<>
			<p>Hi! Welcome to me site</p>
		</>
	);
}

function handler<T>(callback: () => T): (event: Event) => T {
	return (event: Event) => {
		event.preventDefault();
		return callback();
	};
}
