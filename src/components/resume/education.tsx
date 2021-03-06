import React, { useState, useEffect } from "react";
import { IEducation } from "./interfaces";

export default function Education({ data }: { data: IEducation[] }) {
	return (
		<>
			{data.map((ed, i) => (
				<div className="teamheader" key={i}>
					<div className="name">
						<a href={ed.website}>{ed.description}</a>
						{ed.degree && <div className="subtitle degree">{ed.degree}</div>}
						{ed.extra && <div className="subtitle extra">{ed.extra}</div>}
					</div>

					<div className="period">{ed.period}</div>
				</div>
			))}
		</>
	);
}
