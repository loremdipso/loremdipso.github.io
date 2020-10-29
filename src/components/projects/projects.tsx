import React, { useEffect, useRef } from "react";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";
import styled from "styled-components";

export default function Projects({}: { path: string }) {
	return (
		<ContainerWithSidebar hideSidebar>
			<ContainerWithSidebar.Section
				title="Face API - Spooooooky"
				showTitle
				alignTitle="center"
				linkTo={"https://loremdipso.github.io/spooky_face"}
			>
				<div className="image-container">
					<img src="/images/spooky.png" className="simple-image small" />

					<div>
						Another foray into facial recognition with{" "}
						<a href="https://justadudewhohacks.github.io/face-api.js/docs/index.html">
							face-api.js
						</a>
						, this time with a halloween twist.
					</div>
				</div>
			</ContainerWithSidebar.Section>

			<ContainerWithSidebar.Section
				title="Face API - Expression Game"
				showTitle
				alignTitle="center"
				linkTo={"https://loremdipso.github.io/face_game"}
			>
				<div className="image-container">
					<img src="/images/face_game.png" className="simple-image small" />

					<div>
						I wanted to play around with modern JavaScript facial recognition,
						which seems to be{" "}
						<a href="https://justadudewhohacks.github.io/face-api.js/docs/index.html">
							face-api.js
						</a>
						. It was striking to me just how easy it was to get going. From
						requesting a camera feed to asking the library for the user's most
						likely expression, the whole project was very smooth.
					</div>
				</div>
			</ContainerWithSidebar.Section>

			<ContainerWithSidebar.Section
				title="Rust WASM - Tetris Clone"
				showTitle
				alignTitle="center"
				linkTo={"https://loremdipso.github.io/rusty_tetris"}
			>
				<div className="image-container">
					<img src="/images/tetris.png" className="simple-image small" />

					<div>
						Bare-bones tetris clone built using the snake game as a template. It
						was very fast to make, in part because so much of the boilerplate
						was done, but also because Rust's advanced type system makes
						refactoring a breeze.
					</div>
				</div>
			</ContainerWithSidebar.Section>

			<ContainerWithSidebar.Section
				title="Rust WASM - Snake Game"
				showTitle
				alignTitle="center"
				linkTo={"https://loremdipso.github.io/rusty_snake"}
			>
				<div className="image-container">
					<img src="/images/snake.png" className="simple-image small" />

					<div>
						Simple snake game built using HTML5 canvas and Rust's web assembly
						support. It was definitely more work than just writing JS by hand,
						and I doubt it's any faster. That said, it was a very fun project,
						and I wouldn't mind similar work in future. I can see Rust WASM
						being useful in another project when you care about correctness, or
						some large project where you care about maintenance costs.
					</div>
				</div>
			</ContainerWithSidebar.Section>

			<ContainerWithSidebar.Section
				title="taggenator"
				showTitle
				alignTitle="center"
				linkTo={"https://github.com/loremdipso/taggenator"}
			>
				<div>
					I've long wondered if we could improve on the traditional hierarchical
					file system. <code>taggenator</code> is a CLI written in{" "}
					<code>go</code> that tries to do just that.
				</div>
			</ContainerWithSidebar.Section>

			<ContainerWithSidebar.Section
				title="Resume Website and Resume Generator"
				showTitle
				alignTitle="center"
				linkTo={"https://github.com/loremdipso/loremdipso.github.io"}
			>
				<>
					Take a gander at the source behind this very site and the program that
					generates my resume from a simple <code>.yaml</code> file.
				</>
			</ContainerWithSidebar.Section>
		</ContainerWithSidebar>
	);
}
