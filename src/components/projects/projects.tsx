import React, { useEffect, useRef } from "react";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";
import styled from "styled-components";

export default function Projects() {
	return (
		<ContainerWithSidebar>
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
		</ContainerWithSidebar>
	);
}
