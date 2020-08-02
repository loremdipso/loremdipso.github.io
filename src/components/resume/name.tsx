import React, { useState, useEffect } from "react";
import { ISkill, IData } from "./interfaces";

export default function Name({ data }: { data: IData }) {
	return (
		<>
			<h1>
				{data.name.first} {data.name.last}
			</h1>
			<div>{data.position}</div>
		</>
	);
}
