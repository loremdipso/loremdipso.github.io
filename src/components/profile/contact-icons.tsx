import {
	FaGithub,
	FaTwitter,
	FaRss,
	FaLinkedin,
	FaEnvelope,
} from "react-icons/fa";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { config } from "../../config/config";

export default function ContactIcons() {
	const mailToUrl = `mailto:${config.email}?Subject=Hello`;

	return (
		<div className="contact">
			<a target="_blank" href="https://www.twitter.com/loremdipso">
				<FaTwitter className="icon" fill={null} />
			</a>

			<a target="_blank" href="https://www.github.com/loremdipso">
				<FaGithub className="icon" fill={null} />
			</a>

			<a target="_blank" href="https://www.linkedin.com/in/loremdipso">
				<FaLinkedin className="icon" fill={null} />
			</a>

			<a href="mailto:mtadams42@gmail.com">
				<FaEnvelope className="icon" fill={null} />
			</a>
		</div>
	);
}
