import React, { useRef } from "react";
import "../styles/styles.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { APP_ROUTES } from "../config/routes";
import Profile from "../components/profile/profile";
import { Blog } from "../components/blog/blog";
import Resume from "../components/resume/resume";
import ContactIcons from "../components/profile/contact-icons";
import { Router, Link, Location } from "@reach/router";
import CoolBackground from "../components/fun-background";
import Projects from "../components/projects/projects";

export default function Home() {
	return (
		<>
			<Navbar
				bg="dark"
				variant="dark"
				sticky="top"
				expand="sm"
				collapseOnSelect
				className="fancy-header"
			>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav>
						<FancyNavLink to={APP_ROUTES.home}>About</FancyNavLink>
						<FancyNavLink to={APP_ROUTES.projects}>Projects</FancyNavLink>
						<FancyNavLink to={APP_ROUTES.blog}>Blog</FancyNavLink>
						<FancyNavLink to={APP_ROUTES.resume}>Resume</FancyNavLink>
					</Nav>

					<Nav className="ml-auto">
						<ContactIcons />
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<FancyRouter>
				<Profile path={APP_ROUTES.home} />
				<Projects path={APP_ROUTES.projects} />
				<Blog path={APP_ROUTES.blog} />
				<Blog path={APP_ROUTES.blog_slug} />
				<Resume path={APP_ROUTES.resume} />
			</FancyRouter>
		</>
	);
}

function FancyNavLink(props: { to: string; children: any }) {
	return (
		<Nav.Link
			as={Link}
			to={props.to}
			className="nav-link"
			eventKey="1"
			getProps={({ isCurrent }) => {
				return { className: isCurrent ? "nav-link selected" : "nav-link" };
			}}
		>
			{props.children}
		</Nav.Link>
	);
}

function FancyRouter({ children }: { children: any }) {
	return (
		<CoolBackground>
			<Location>
				{({ location }) => (
					<Router location={location}>{children}</Router>
					// <section>
					// </section>
					// <Container>
					// </Container>
				)}
			</Location>
		</CoolBackground>
	);
}
