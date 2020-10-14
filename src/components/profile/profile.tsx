import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ContainerWithSidebar from "../sidebar/container-with-sidebar";

const Header = styled.div`
	display: flex;
`;
const SubHeader = styled.h2`
	font-size: 2rem;
`;
const HeaderLeft = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	// background-color: rgba(0, 0, 0, 0.1);
	// padding: 1rem;
`;
const Name = styled.div`
	max-width: 3rem;
	font-size: 5rem;
	font-weight: bold;
	text-align: left;
`;
const Body = styled.div`
	margin-left: auto;
`;

export default function Profile({ path }: { path: string }) {
	return (
		<ContainerWithSidebar>
			<ContainerWithSidebar.Section title="Header">
				<Header>
					<HeaderLeft>
						<Name>Michael Adams</Name>
						<SubHeader>Software Engineer</SubHeader>
					</HeaderLeft>

					<div className="ml-auto mr-auto">
						<img src="profile_pic.jpg" className="avatar" />
					</div>
				</Header>
			</ContainerWithSidebar.Section>

			<ContainerWithSidebar.Section title="Content1">
				<Content />
			</ContainerWithSidebar.Section>
			<ContainerWithSidebar.Section title="Content2">
				<Content />
			</ContainerWithSidebar.Section>
			<ContainerWithSidebar.Section title="Content3">
				<Content />
			</ContainerWithSidebar.Section>
			<ContainerWithSidebar.Section title="Content4">
				<Content />
			</ContainerWithSidebar.Section>
			<ContainerWithSidebar.Section title="Content5">
				<Content />
			</ContainerWithSidebar.Section>
		</ContainerWithSidebar>
	);
}

function Content() {
	return (
		<article>
			<h3>About</h3>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
			<p>
				Lorem dipso is theklj slfkj sdf htlkwehtlwk hlskdjfs
				ldkjtlkhtlkethlskthjsltkjljgsgjslkg jlkg jsklgj lsjgj.
			</p>
		</article>
	);
}
