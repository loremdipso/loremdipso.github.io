import {
	FaRegEnvelope,
	FaGoogle,
	FaLinkedinIn,
	FaTwitter,
	FaFacebookF,
	FaAngellist,
	FaRss,
	FaPinterest,
	FaEnvelope,
} from "react-icons/fa";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import { config } from "../../config/config";

export default function ContactIcons() {
	const mailToUrl = `mailto:${config.email}?Subject=Hello`;

	return (
		<div className="contact">
			<a target="_blank" href="https://www.twitter.com/loremdipso">
				<img
					className="icon"
					src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
					alt="Twitter"
				/>
			</a>
			<a target="_blank" href="https://www.github.com/loremdipso">
				<img
					className="icon"
					src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
					alt="GitHub"
				/>
			</a>
			<a target="_blank" href="https://www.youtube.com/c/JonGjengset">
				<img
					className="icon"
					src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg"
					alt="YouTube"
				/>
			</a>
			<a target="_blank" href="https://keybase.io/jonhoo">
				<img
					className="icon"
					src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/keybase.svg"
					alt="Keybase"
				/>
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/jonhoo">
				<img
					className="icon"
					src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
					alt="LinkedIn"
				/>
			</a>
			<a href="mailto:jon@thesquareplanet.com">
				<img className="icon" src="gfx/email.svg" alt="Email" />
			</a>
		</div>
	);
}
