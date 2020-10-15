import React, { useState } from "react";

export interface IActiveLabels {
	[key: string]: { height: number; percentage: number };
}

export interface ISidebarProps {
	labels: string[];
	activeLabels: IActiveLabels;
	scrollToLabel: (label: string) => any;
}

export function Sidebar({
	labels,
	activeLabels,
	scrollToLabel,
}: ISidebarProps) {
	return (
		<div className="sidebar">
			{labels.map((label, i) => (
				<div
					key={i}
					onClick={() => scrollToLabel(label)}
					className={
						isSelected(activeLabels, label)
							? "selected sidebar-button"
							: "sidebar-button"
					}
				>
					{label}
				</div>
			))}
		</div>
	);
}

function isSelected(activeLabels: IActiveLabels, label: string): boolean {
	let obj = activeLabels[label];
	if (!obj) {
		return false;
	}

	if (obj.percentage >= 1.0) {
		return true;
	}

	let max = 0.0;
	let maxLabel = null;
	let somethingIsFullyOnScreen = false;
	for (let tempLabel in activeLabels) {
		let value = activeLabels[tempLabel];
		if (value) {
			if (value.height > max) {
				max = value.height;
				maxLabel = tempLabel;
			}

			if (value.percentage >= 1.0) {
				somethingIsFullyOnScreen = true;
			}
		}
	}

	return !somethingIsFullyOnScreen && maxLabel === label;
}
