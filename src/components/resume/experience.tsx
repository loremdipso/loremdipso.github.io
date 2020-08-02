import React, { useState, useEffect } from "react";
import { IExperience, IPosition, ITeam } from "./interfaces";

export default function Experiences({ data }: { data: IExperience[] }) {
	return (
		<div>
			{data.map((company, i) => (
				<React.Fragment key={i}>
					{company.positions.map((position, j) => (
						<React.Fragment key={j}>
							<div className="teamheader">
								<div className="name">
									<div>
										{company.company.name} - {company.company.description}
									</div>
								</div>
								<div className="period">{position.period}</div>
							</div>
							<Position position={position} />
						</React.Fragment>
					))}
				</React.Fragment>
			))}
		</div>
	);
}

function Position({ position }: { position: IPosition }) {
	return (
		<>
			{position.teams.map((team, i) => (
				<div key={i} className="teams">
					<Team team={team} />
				</div>
			))}
		</>
	);
}

function Team({ team }: { team: ITeam }) {
	return (
		<>
			<div className="teamheader">
				<div className="name">
					<div>
						{team.role} - {team.name}
					</div>
					<div className="description">{team.description}</div>
				</div>
				<div className="period">{team.period}</div>
			</div>

			{team.projects.map((project, i) => (
				<div key={i} className="project">
					{project}
				</div>
			))}
		</>
	);
}

function nn(thing: any) {
	return thing !== null && thing !== undefined;
}
