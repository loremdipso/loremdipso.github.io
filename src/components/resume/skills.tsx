import React, { useState, useEffect } from "react";
import { ISkill } from "./interfaces";

export default function Skills({ data }: { data: ISkill[] }) {
	return (
		<>
			{data.map((skill, i) => (
				<React.Fragment key={i}>
					<Skill skill={skill} />
				</React.Fragment>
			))}
		</>
	);
}

function Skill({ skill }: { skill: ISkill }) {
	return <div>{skill.name}</div>;
}
