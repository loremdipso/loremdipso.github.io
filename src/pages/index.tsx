import React, { useState } from "react";
import "../styles/styles.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { APP_ROUTES } from "../config/routes";
import Profile from "../components/profile/profile";
import { Blog } from "../components/blog/blog";
import Resume from "../components/resume";
import { Router, Link, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Home() {
	return (
		<div>
			<Navbar sticky="top" bg="light" collapseOnSelect>
				<Nav>
					<FancyNavLink to={APP_ROUTES.home}>About</FancyNavLink>
					<FancyNavLink to={APP_ROUTES.blog}>Blog</FancyNavLink>
					<FancyNavLink to={APP_ROUTES.resume}>Resumé</FancyNavLink>
				</Nav>
			</Navbar>

			<FancyRouter>
				<Profile path={APP_ROUTES.home} />
				<Blog path={APP_ROUTES.blog} />
				<Blog path={APP_ROUTES.blog_slug} />
				<Resume path={APP_ROUTES.resume} />
			</FancyRouter>
		</div>
	);
}

function FancyNavLink(props: { to: string; children: any }) {
	return (
		<Link
			to={props.to}
			className="nav-link"
			getProps={({ isCurrent }) => {
				return { className: isCurrent ? "nav-link active" : "nav-link" };
			}}
		>
			{props.children}
		</Link>
	);
}

function FancyRouter({ children }: { children: any }) {
	return (
		<div>
			<Location>
				{({ location }) => (
					<Container>
						<TransitionGroup>
							<CSSTransition
								key={location.key}
								timeout={{ enter: 300, exit: 300 }}
								classNames={"fade"}
							>
								<section className="route-section">
									<Router location={location}>{children}</Router>
								</section>
							</CSSTransition>
						</TransitionGroup>
					</Container>
				)}
			</Location>
		</div>
	);
}
