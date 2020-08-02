import React, { useState, useEffect } from "react";
import { IExperience, IPosition, ITeam } from "./interfaces";

export default function Experiences({ data }: { data: IExperience[] }) {
	return (
		<>
			{data.map((ex, i) => (
				<React.Fragment key={i}>
					{ex.positions.map((position, j) => (
						<React.Fragment key={j}>
							<h3>
								{ex.company} - {position.name}
							</h3>
							<Position position={position} />
						</React.Fragment>
					))}
				</React.Fragment>
			))}
		</>
	);
}

function Position({ position }: { position: IPosition }) {
	return (
		<>
			<h6>{position.period}</h6>
			{position.teams.map((team, i) => (
				<React.Fragment key={i}>
					<Team team={team} />
				</React.Fragment>
			))}
		</>
	);
}

function Team({ team }: { team: ITeam }) {
	return (
		<>
			{team.name && <p>{team.name}</p>}
			{team.description && <p>{team.description}</p>}
			{team.period && <p>{team.period}</p>}
			{team.projects.map((project, i) => (
				<div key={i}>{project}</div>
			))}
		</>
	);
}

function nn(thing: any) {
	return thing !== null && thing !== undefined;
}
