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
	let firstLabelFullyOnScreen = getFirstLabelFullyOnScreen(activeLabels);
	if (firstLabelFullyOnScreen) {
		if (firstLabelFullyOnScreen === label) {
			return true;
		} else {
			return false;
		}
	}

	let maxLabel = getMaxLabel(activeLabels);
	return maxLabel === label;
}

function getFirstLabelFullyOnScreen(activeLabels: IActiveLabels): string {
	for (let tempLabel in activeLabels) {
		let value = activeLabels[tempLabel];
		if (value) {
			if (value.percentage >= 1.0) {
				return tempLabel;
			}
		}
	}
	return null;
}

function getMaxLabel(activeLabels: IActiveLabels): string {
	let max = 0.0,
		maxLabel = null;
	for (let tempLabel in activeLabels) {
		let value = activeLabels[tempLabel];
		if (value) {
			if (value.height > max) {
				max = value.height;
				maxLabel = tempLabel;
			}
		}
	}

	return maxLabel;
}
