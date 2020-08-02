import React, { useState, useEffect } from "react";

export default function Resume(props: { path?: string }) {
	const [config, setConfig] = useState(null);

	useEffect(() => {
		fetch("/resume.json").then((result) => {
			if (result.ok) {
				result.json().then((data) => setConfig(data));
			}
		});
	}, []);

	if (config === null) {
		return null;
	}

	return <div>TODO, but eventually this'll be a resume</div>;
}
