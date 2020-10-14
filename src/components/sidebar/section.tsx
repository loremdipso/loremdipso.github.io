import React, { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "./sidebar";

export interface ISectionProps {
	title: string;
	children: JSX.Element | JSX.Element[];
}

export function Section({ children, title }: ISectionProps) {
	return <>{children}</>;
}
