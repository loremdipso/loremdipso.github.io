import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ISectionProps, Section } from "./section";
import { IActiveLabels, Sidebar } from "./sidebar";

export interface IContainerProps {
	children: JSX.Element[];
}

const ContainerWithSidebar = ({ children }: IContainerProps) => {
	const [labels, setLabels] = useState([]);
	const [activeLabels, setActiveLabels] = useState({} as IActiveLabels);
	const [labelToScrollTo, setLabelToScrollTo] = useState({});

	useEffect(() => {
		if (!Array.isArray(children)) {
			children = [children];
		}

		setLabels(children.map((el) => (el.props as ISectionProps).title));
	}, [children]);

	return (
		<div className="container-with-sidebar">
			<div className="actual-container">
				{children.map((child, i) => (
					<TrackVisibility
						onVisible={(label: string, height: number, percentage: number) => {
							let obj = activeLabels[label];
							if (
								!obj ||
								obj.height != height ||
								obj.percentage != percentage
							) {
								let newActiveLabels = { ...activeLabels };
								newActiveLabels[label] = { height, percentage };
								setActiveLabels(newActiveLabels);
							}
						}}
						onHidden={(label: string) => {
							if (activeLabels[label]) {
								let newActiveLabels = { ...activeLabels };
								newActiveLabels[label] = null;
								setActiveLabels(newActiveLabels);
							}
						}}
						key={i}
						label={labels[i]}
						child={child}
						doScroll={labelToScrollTo === labels[i]}
					/>
				))}
			</div>

			<Sidebar
				labels={labels}
				activeLabels={activeLabels}
				scrollToLabel={setLabelToScrollTo}
			/>
		</div>
	);
};

function TrackVisibility({
	child,
	onVisible,
	onHidden,
	label,
	doScroll,
}: {
	child: JSX.Element;
	onVisible: Function;
	onHidden: Function;
	label: string;
	doScroll: boolean;
}) {
	const ref = useRef(null);
	let currentRef = ref && ref.current;

	useEffect(() => {
		if (!currentRef) {
			return;
		}

		let isPrimed = false;
		let MIN = 150;
		let observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					onVisible(
						label,
						entry.intersectionRect.height,
						entry.intersectionRatio
					);
				} else {
					onHidden(label);
				}
			},
			{
				threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
			}
		);
		observer.observe(currentRef);

		return () => observer.disconnect();
	}, [currentRef, onVisible, onHidden, label]);

	useEffect(() => {
		if (doScroll && currentRef) {
			window.scrollTo({
				behavior: "smooth",
				left: 0,
				top: currentRef.offsetTop - 60,
			});
		}
	}, [currentRef, doScroll]);

	return <div ref={ref}>{child}</div>;
}

ContainerWithSidebar.Section = Section;
export default ContainerWithSidebar;
