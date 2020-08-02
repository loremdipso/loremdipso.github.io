import React, { useState, useEffect } from "react";
import { ISkill, IData } from "./interfaces";

export default function Name({ data }: { data: IData }) {
	return (
		<div className="namesection">
			<div className="name">
				{data.name.first} {data.name.last}
			</div>

			<div className="position">{data.position}</div>
		</div>
	);
}
