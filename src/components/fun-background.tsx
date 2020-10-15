import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const MAX_OBJECTS = 120;
const DELTA = 0.2;
const COLORS = [
	"#B2EBF2",
	"#BDBDBD",
	"#448AFF",
	"#FFFFFF",
	"#FF5722",
	"#3F51B5",
];
const VEL = 0.2;
const ACC = 0.1;

const FancyCanvas = styled.canvas`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #364451;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	z-index: -1;
`;

export default function CoolBackground({ children }: { children: any }) {
	const shapes = Array.from({ length: 80 });
	const canvasRef = useRef(null);

	useEffect(() => {
		if (canvasRef) {
			let doResize = () => {
				let canvas = canvasRef.current as HTMLElement;
				canvas.setAttribute("width", `${window.innerWidth}px`);
				canvas.setAttribute("height", `${window.innerHeight}px`);
				// canvas.width =
				// 	canvas.height * (canvas.clientWidth / canvas.clientHeight);
			};
			doResize();

			window.addEventListener("resize", doResize);
			let canvasCB = manipulateCanvas(canvasRef.current as HTMLCanvasElement);
			return () => {
				window.removeEventListener("resize", doResize);
				canvasCB();
			};
		}
	}, [canvasRef]);

	return (
		<>
			<FancyCanvas className="shape-container" ref={canvasRef} />
			{children}
		</>
	);
}

function manipulateCanvas(canvas: HTMLCanvasElement) {
	let shouldExit = false;
	const context = canvas.getContext("2d");

	const FRAMES_PER_SECOND = 10;
	const FRAME_MIN_TIME =
		(1000 / 60) * (60 / FRAMES_PER_SECOND) - (1000 / 60) * 0.5;

	let state: IState = {
		shapes: [],
		rotation: 0,
		rotationVelocity: 0.1,
	};

	let lastFrameTime = 0;
	const update = (time) => {
		if (shouldExit) {
			return;
		}

		updateObjects(state.shapes, canvas);
		renderObjects(state, canvas, context);

		if (time - lastFrameTime < FRAME_MIN_TIME) {
			//skip the frame if the call is too early
			requestAnimationFrame(update);
			return; // return as there is nothing to do
		}
		lastFrameTime = time; // remember the time of the rendered frame
		requestAnimationFrame(update); // get next farme
	};
	requestAnimationFrame(update); // start animation

	return () => {
		shouldExit = true;
	};
}

interface IShape {
	draw: (context: CanvasRenderingContext2D) => void;

	// returns true if this shape is still valid, false if it should be removed
	updateAndKeep: () => boolean;
}

interface IState {
	shapes: IShape[];
	rotation: number;
	rotationVelocity: number;
}

interface Vec2 {
	x: number;
	y: number;
}

class Circle implements IShape {
	private pos: Vec2;
	private targetPos: Vec2;
	private velocity: Vec2;
	private velocityMagnitude: number;
	private acc: Vec2;

	private radius: number;
	private targetRadius: number;
	private radiusVelocity: number;
	private color: string;

	constructor(private canvas: HTMLCanvasElement) {
		this.pos = {
			x: getRandomInt(20, canvas.width),
			y: getRandomInt(20, canvas.height),
		};
		this.targetPos = {
			x: getRandomInt(20, canvas.width),
			y: getRandomInt(20, canvas.height),
		};
		this.radius = 0;
		this.velocityMagnitude = getRandomNumb(0, VEL);
		this.targetRadius = getRandomInt(25, 50);
		this.radiusVelocity = 1.0 / getRandomInt(7, 10);
		this.color = getRandomElement(COLORS);

		this.calculateVelocity();
	}

	public draw(context: CanvasRenderingContext2D) {
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
		context.fill();
	}

	private calculateVelocity() {
		let dx = this.pos.x - this.targetPos.x;
		let dy = this.pos.y - this.targetPos.y;
		let angle = Math.atan2(dy, dx);
		this.velocity = {
			x: this.velocityMagnitude * Math.cos(angle),
			y: this.velocityMagnitude * Math.sin(angle),
		};
	}

	public updateAndKeep(): boolean {
		this.pos.x += this.velocity.x;
		this.pos.y += this.velocity.y;

		if (Math.abs(this.radius - this.targetRadius) < DELTA) {
			this.targetRadius = -1;
		} else if (this.radius < this.targetRadius) {
			this.radius += this.radiusVelocity;
		} else if (this.radius > this.targetRadius) {
			this.radius -= this.radiusVelocity;
		}

		if (this.radius < 0) {
			return false;
		}

		return true;
	}
}

function updateObjects(shapes: IShape[], canvas: HTMLCanvasElement) {
	for (let i = shapes.length; i < MAX_OBJECTS; i++) {
		shapes.push(new Circle(canvas));
	}

	for (let i = shapes.length - 1; i >= 0; i--) {
		let shape = shapes[i];
		if (!shape.updateAndKeep()) {
			shapes.splice(i, 1);
		}
	}
}

function renderObjects(
	state: IState,
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D
) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.save();

	let cx = canvas.width / 2;
	let cy = canvas.height / 2;
	context.translate(cx, cy);
	context.rotate((state.rotation * Math.PI) / 180);
	context.translate(-cx, -cy);

	state.rotation += state.rotationVelocity;
	for (let shape of state.shapes) {
		shape.draw(context);
	}
	context.restore();
}

function getRandomNumb(min: number, max: number): number {
	return (
		min + Math.floor(Math.random() * Math.floor((max - min + 1) * 100)) / 100
	);
}

function getRandomInt(min: number, max: number): number {
	return min + Math.floor(Math.random() * Math.floor(max - min + 1));
}

function getRandomElement<T>(arr: T[]): T {
	let randomIndex = getRandomInt(0, arr.length - 1);
	return arr[randomIndex];
}
