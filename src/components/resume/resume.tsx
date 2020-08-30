import React, { useState, useEffect } from "react";
import { IData, IEducation, ISkill, IExperience } from "./interfaces";
import Education from "./education";
import Experiences from "./experience";
import Skills from "./skills";
import { Contact } from "./contact";
import Name from "./name";
import "./resume.scss";

export const ResumeVersionContext = React.createContext(1);

export default function Resume(props: { path?: string }) {
	const [data, setData] = useState(null as IData);
	const [version, setVersion] = useState(1);
	const [isDebugging, setIsDebugging] = useState(false);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("debug")) {
			setIsDebugging(true);
		}
		if (urlParams.has("version")) {
			setVersion(parseInt(urlParams.get("version")));
		}
	}, []);

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

	return <ResumeVersionContext.Provider value={version}>
		{/* TODO: remove this */}
		{isDebugging &&
			<button onClick={() => {
				setVersion(version === 1 ? 2 : 1);
			}}>Toggle</button>
		}
		<ResumeContent data={data} />
	</ResumeVersionContext.Provider>;
}


function ResumeContent({ data }: { data: IData }) {
	const version = React.useContext(ResumeVersionContext);
	switch (version) {
		case 2:
			return <div className="resume take2">
				<div className="content">
					<div className="header">
						<Name data={data} />
					</div>

					<div className="body">
						<div className="lefter">
							<div className="section">
								<div className="header">Experience</div>
								<Experiences data={data.experiences} />
							</div>

							<div className="section">
								<div className="header">Education</div>
								<Education data={data.educations} />
							</div>
						</div>

						<div className="sidebar">
							<Contact data={data.contact} />
							{/* <Skills data={data.skills} /> */}
						</div>
					</div>
				</div>
			</div>;

		default:
			return <div className="resume take1">
				<div className="content">
					<div className="grid">
						<div>
							<Name data={data} />
						</div>

						<div>
							<Contact data={data.contact} />
						</div>
					</div>

					{/* <Skills data={data.skills} /> */}

					<div className="section">
						<div className="header">Experience</div>
						<Experiences data={data.experiences} />
					</div>

					<div className="section">
						<div className="header">Education</div>
						<Education data={data.educations} />
					</div>
				</div>
			</div>;
	}
}