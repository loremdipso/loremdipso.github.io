import React, { useState, useEffect } from "react";
import { ISkill, IContact } from "./interfaces";

export default function Contact({ data }: { data: IContact }) {
	return (
		<>
			<div>{data.phone}</div>
			<div>{data.email}</div>
			<div>{data.street}</div>
			<div>{data.city}</div>
			<div>{data.state}</div>
		</>
	);
}

function Skill({ skill }: { skill: ISkill }) {
	return <div>{skill.name}</div>;
}
