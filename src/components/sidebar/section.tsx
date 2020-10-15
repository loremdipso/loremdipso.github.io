import React, { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "./sidebar";

export interface ISectionProps {
	title: string;
	children?: JSX.Element | JSX.Element[];
	excludePadding?: boolean;
	showTitle?: boolean;
}

export function Section({ children, title, showTitle }: ISectionProps) {
	if (showTitle) {
		return (
			<>
				<h2>{title}</h2>
				{children ? (
					<>
						<br />
						{children}
					</>
				) : null}
			</>
		);
	} else {
		return <>{children}</>;
	}
}
