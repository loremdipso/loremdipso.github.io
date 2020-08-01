import React, { useState } from "react";
import "../styles/styles.scss";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { APP_ROUTES } from "../config/routes";
import Profile from "../components/profile/profile";
import Blog from "../components/blog";
import Resume from "../components/resume";
import { Router, Link, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Switch from "react-bootstrap/esm/Switch";

export default function Home() {
	return (
		<div>
			<Navbar sticky="top" bg="light" collapseOnSelect>
				<Nav>
					<Nav.Link as={Link} to={APP_ROUTES.home}>
						About
					</Nav.Link>

					<Nav.Link as={Link} to={APP_ROUTES.blog}>
						Blog
					</Nav.Link>

					<Nav.Link as={Link} to={APP_ROUTES.resume}>
						Resumé
					</Nav.Link>
				</Nav>
			</Navbar>

			<div className="scrollable">
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
										<Router location={location}>
											<Profile path={APP_ROUTES.home} />
											<Blog path={APP_ROUTES.blog} />
											<Resume path={APP_ROUTES.resume} />
										</Router>
									</section>

									{/* <Link to={APP_ROUTES.resume}>yo</Link>
					<FadeTransitionRouter>
						<Profile path={APP_ROUTES.home} />
						<Blog path={APP_ROUTES.blog} />
						<Resume path={APP_ROUTES.resume} />
					</FadeTransitionRouter> */}
								</CSSTransition>
							</TransitionGroup>
						</Container>
					)}
				</Location>
			</div>
		</div>
	);
}

const FadeTransitionRouter = (props) => (
	<Location>
		{({ location }) => (
			<TransitionGroup className="transition-group">
				<CSSTransition key={location.key} classNames="fade" timeout={500}>
					{/* the only difference between a router animation and
				any other animation is that you have to pass the
				location to the router so the old screen renders
				the "old location" */}
					<Router location={location} className="router">
						{props.children}
					</Router>
				</CSSTransition>
			</TransitionGroup>
		)}
	</Location>
);
