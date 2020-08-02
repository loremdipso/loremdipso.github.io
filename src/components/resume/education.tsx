import React, { useState, useEffect } from "react";
import { IEducation } from "./interfaces";

export default function Education({ data }: { data: IEducation[] }) {
	return (
		<>
			{data.map((ed, i) => (
				<div key={i}>
					{ed.description} - {ed.period}
				</div>
			))}
		</>
	);
}
