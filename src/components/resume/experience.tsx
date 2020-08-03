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
									<div className="label">company</div>
									<div className="companyname">{company.company.name}</div>
									<div className="subtitle">{company.company.description}</div>
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
		<div className="teams">
			{position.teams.map((team, i) => (
				<div key={i}>
					<Team team={team} />
				</div>
			))}
		</div>
	);
}

function Team({ team }: { team: ITeam }) {
	return (
		<>
			<div className="teamheader">
				<div className="name">
					<div>
						<div className="label">team</div>
						<div className="teamname">{team.name}</div>
					</div>
					<div className="subtitle">{team.description}</div>
				</div>
				<div className="period">{team.period}</div>
			</div>

			{team.projects &&
				team.projects.map((project, i) => (
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
