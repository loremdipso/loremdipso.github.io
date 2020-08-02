import React, { useState, useEffect } from "react";
import { ISkill } from "./interfaces";

export default function Skills({ data }: { data: ISkill[] }) {
	return (
		<div>
			<span>Skills:</span>

			<div className="skills">
				{data.map((skill, i) => (
					<span key={i}>{skill.name}</span>
				))}
			</div>
		</div>
	);
}
