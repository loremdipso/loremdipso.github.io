import React, { useState, useEffect } from "react";
import { IData, IEducation, ISkill, IExperience } from "./interfaces";
import Education from "./education";
import Experiences from "./experience";
import Skills from "./skills";
import Contact from "./contact";
import Name from "./name";
import "./resume.scss";

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
		<div className="resume">
			<div className="content">
				<div>
					<div className="grid">
						<div>
							<Name data={data} />
							{/* <Skills data={data.skills} /> */}
						</div>

						<div>
							<Contact data={data.contact} />
						</div>
					</div>
				</div>

				<div className="section">
					<div className="header">Experience</div>
					<Experiences data={data.experiences} />
				</div>

				<div className="section">
					<div className="header">Education</div>
					<Education data={data.educations} />
				</div>
			</div>
		</div>
	);
}
