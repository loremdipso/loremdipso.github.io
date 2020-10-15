import React from "react";
import { navigate } from "gatsby";
import { Button, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";

export default function Profile({ path }: { path: string }) {
	return (
		<ContainerWithSidebar hideSidebar>
			<ContainerWithSidebar.Section title="Overview" excludePadding>
				<div className="avatar-header-container">
					<div>
						<div className="name">Michael</div>
						<div className="name">Adams</div>
						<div className="subheader">Software Engineer</div>
					</div>

					<div className="ml-auto mr-auto">
						<img src="profile_pic.jpg" className="avatar" />
					</div>
				</div>

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

function handler<T>(callback: () => T): (event: any) => T {
	return (event: Event) => {
		event.preventDefault();
		return callback();
	};
}
