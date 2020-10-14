import React from "react";
import "../styles/styles.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { APP_ROUTES } from "../config/routes";
import Profile from "../components/profile/profile";
import { Blog } from "../components/blog/blog";
import Resume from "../components/resume/resume";
import ContactIcons from "../components/profile/contact-icons";
import { Router, Link, Location } from "@reach/router";

export default function Home() {
	return (
		<>
			<Navbar bg="dark" variant="dark" sticky="top">
				<Nav>
					<FancyNavLink to={APP_ROUTES.home}>About</FancyNavLink>
					<FancyNavLink to={APP_ROUTES.blog}>Blog</FancyNavLink>
					<FancyNavLink to={APP_ROUTES.resume}>Resumé</FancyNavLink>
				</Nav>

				<Nav className="ml-auto">
					<ContactIcons />
				</Nav>
			</Navbar>

			<FancyRouter>
				<Profile path={APP_ROUTES.home} />
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
		<div>
			<Location>
				{({ location }) => (
					<Container>
						<section className="route-section">
							<Router location={location}>{children}</Router>
						</section>
					</Container>
				)}
			</Location>
		</div>
	);
}
