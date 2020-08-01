import React, { useState } from "react";
import ProfilePic from "./profile-pic";
import ContactIcons from "./contact-icons";

export default function Profile({ path }: { path: string }) {
	return (
		<>
			<ProfilePic />
			<ContactIcons />
		</>
	);
}
