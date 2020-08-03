import React, { useState, useEffect } from "react";
import { IEducation } from "./interfaces";

export default function Education({ data }: { data: IEducation[] }) {
	return (
		<>
			{data.map((ed, i) => (
				<div className="teamheader" key={i}>
					<div className="name">
						<div>{ed.description}</div>
						{ed.degree && <div className="subtitle degree">{ed.degree}</div>}
					</div>

					<div className="period">{ed.period}</div>
				</div>
			))}
		</>
	);
}
