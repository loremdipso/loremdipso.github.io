import React, { useState, useEffect } from "react";
import { ISkill, IContact } from "./interfaces";
import { ResumeVersionContext } from "./resume";

export function Contact({ data }: { data: IContact }) {
	const version = React.useContext(ResumeVersionContext);
	return (
		<div className="contacts">
			{version === 2 && <div className="header">Personal Info</div>}
			{/* <Line name="Address">
				{data.street && <div>{data.street}</div>}
				<div>
					{data.city}, {data.state} {data.zip}
				</div>
			</Line> */}
			{data.email && <Line name="Email"><div>{data.email}</div></Line>}
			<Line name="Mobile">
				<div>{data.phone}</div>
			</Line>
		</div>
	);
}

function Line(props: { name: string; children: any }) {
	const version = React.useContext(ResumeVersionContext);
	switch (version) {
		case 2:
			return (
				<>
					<div className="label">{props.name}</div>
					<div>{props.children}</div>
				</>
			);

		default:
			return (
				<>
					<div>{props.children}</div>
					<div className="label">{props.name}</div>
				</>
			);
	}
}
