import React, { useState, useEffect } from "react";
import { ISkill, IContact } from "./interfaces";

export default function Contact({ data }: { data: IContact }) {
	return (
		<div className="contacts">
			<Line name="Address">
				{data.street && <div>{data.street}</div>}
				<div>
					{data.city}, {data.state} {data.zip}
				</div>
			</Line>
			<Line name="Email">{data.email && <div>{data.email}</div>}</Line>
			<Line name="Mobile">
				<div>{data.phone}</div>
			</Line>
		</div>
	);
}

function Line(props: { name: string; children: any }) {
	return (
		<>
			<div>{props.children}</div>
			<div className="label">{props.name}</div>
		</>
	);
}

{
	/* <div class="section contact">
	<h2 class="section-header">Contact</h2>
	<div class="content">
		<div class="main-address">
			<span class="label">Address</span>
			<span class="content">
				250 Elm Street, Apt 3 Cambridge, MA 02139 United States
			</span>
		</div>

		<div class="phone-number phone-mobile">
			<span class="label">Mobile</span>
			<span class="content">+1 (617) 390-4180</span>
		</div>

		<div class="email-address">
			<span class="label">Email</span>
			<span class="content">
				<a href="mailto:jon@tsp.io">jon@tsp.io</a>
			</span>
		</div>

		<div class="member-url-resource url-portfolio">
			<span class="label">Portfolio</span>
			<span class="content">
				<a href="http://tsp.io" target="_blank">
					tsp.io
				</a>
			</span>
		</div>
	</div>
</div>; */
}
