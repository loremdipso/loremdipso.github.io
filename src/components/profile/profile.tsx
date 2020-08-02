import React, { useState } from "react";
import ProfilePic from "./profile-pic";
import S from "./profile-pic";
import Sidebar from "./sidebar";

export default function Profile({ path }: { path: string }) {
	return (
		<>
			<Sidebar />
			<ProfilePic />
		</>
	);
}
