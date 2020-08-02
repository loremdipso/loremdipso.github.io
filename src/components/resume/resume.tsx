import React, { useState, useEffect } from "react";
import { IData, IEducation, ISkill, IExperience } from "./interfaces";
import Education from "./education";
import Experiences from "./experience";
import Skills from "./skills";
import Contact from "./contact";
import Name from "./name";

export default function Resume(props: { path?: string }) {
	const [data, setData] = useState(null as IData);

	useEffect(() => {
		fetch("/resume.json").then((result) => {
			if (result.ok) {
				result.json().then(setData);
			}
		});
	}, []);

	if (data === null) {
		return null;
	}

	return (
		<div>
			<Name data={data} />

			<h1>Contact</h1>
			<Contact data={data.contact} />

			<h1>Skills</h1>
			<Skills data={data.skills} />

			<h1>Experience</h1>
			<Experiences data={data.experiences} />

			<h1>Education</h1>
			<Education data={data.educations} />
		</div>
	);
}
