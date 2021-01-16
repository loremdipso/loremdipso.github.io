import React, { useEffect, useRef } from "react";

const MAX_OBJECTS = 120;
const COLORS = [
	"#B2EBF2",
	"#BDBDBD",
	"#448AFF",
	"#FFFFFF",
	"#FF5722",
	"#3F51B5",
];

const VEL_MIN = 2;
const VEL_MAX = 5;
const ROTATION_VEL = 0;

const RADIUS_MIN = 5;
const RADIUS_MAX = 10;
const RADIUS_VEL_MIN = 1;
const RADIUS_VEL_MAX = 2;

export default function CoolBackground({ children }: { children: any }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (canvasRef && canvasRef.current) {
			let doResize = () => {
				let canvas = canvasRef.current as HTMLElement;
				canvas.setAttribute("width", `${window.innerWidth}px`);
				canvas.setAttribute("height", `${window.innerHeight}px`);
			};
			doResize();

			window.addEventListener("resize", doResize);
			let canvasCB = manipulateCanvas(
				canvasRef.current as HTMLCanvasElement
			);
			return () => {
				window.removeEventListener("resize", doResize);
				canvasCB();
			};
		}
	}, [canvasRef]);

	return (
		<>
			{children}
			<canvas className="fancy-canvas" ref={canvasRef} />
		</>
	);
}

function manipulateCanvas(canvas: HTMLCanvasElement) {
	let shouldExit = false;
	const context = canvas.getContext("2d");

	const FRAMES_PER_SECOND = 30;
	const FRAME_MIN_TIME =
		(1000 / 60) * (60 / FRAMES_PER_SECOND) - (1000 / 60) * 0.5;

	let state: IState = {
		shapes: [],
		rotation: 0,
		rotationVelocity: ROTATION_VEL,
	};

	let lastFrameTime = 0;
	const update = (time) => {
		if (shouldExit) {
			return;
		}

		let delta = time - lastFrameTime;

		if (lastFrameTime > 0) {
			updateObjects(state.shapes, canvas, delta / 1000);
			renderObjects(state, canvas, context, delta / 1000);
		}

		if (delta < FRAME_MIN_TIME) {
			//skip the frame if the call is too early
			requestAnimationFrame(update);
		} else {
			lastFrameTime = time; // remember the time of the rendered frame
			requestAnimationFrame(update); // get next farme
		}
	};
	requestAnimationFrame(update); // start animation

	return () => {
		shouldExit = true;
	};
}

interface IShape {
	draw: (context: CanvasRenderingContext2D) => void;

	// returns true if this shape is still valid, false if it should be removed
	updateAndKeep: (delta: number) => boolean;
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
		this.radius = 0;

		this.pos = {
			x: getRandomInt(20, canvas.width),
			y: getRandomInt(20, canvas.height),
		};
		this.targetPos = {
			x: getRandomInt(20, canvas.width),
			y: getRandomInt(20, canvas.height),
		};

		this.velocityMagnitude = getRandomNumb(VEL_MIN, VEL_MAX);
		this.targetRadius = getRandomInt(RADIUS_MIN, RADIUS_MAX);
		this.radiusVelocity = getRandomNumb(RADIUS_VEL_MIN, RADIUS_VEL_MAX);
		this.radiusVelocity = getRandomNumb(RADIUS_VEL_MIN, RADIUS_VEL_MAX);
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

	public updateAndKeep(delta: number): boolean {
		this.pos.x += this.velocity.x * delta;
		this.pos.y += this.velocity.y * delta;

		if (this.radius < this.targetRadius) {
			this.radius += this.radiusVelocity * delta;
		} else if (this.radius > this.targetRadius) {
			this.radius -= this.radiusVelocity * delta;
			this.targetRadius = -1;
		}

		if (this.radius < 0) {
			return false;
		}

		return true;
	}
}

function updateObjects(
	shapes: IShape[],
	canvas: HTMLCanvasElement,
	delta: number
) {
	for (let i = shapes.length; i < MAX_OBJECTS; i++) {
		shapes.push(new Circle(canvas));
	}

	for (let i = shapes.length - 1; i >= 0; i--) {
		let shape = shapes[i];
		if (!shape.updateAndKeep(delta)) {
			shapes.splice(i, 1);
		}
	}
}

function renderObjects(
	state: IState,
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	delta: number
) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.save();

	let cx = canvas.width / 2;
	let cy = canvas.height / 2;
	context.translate(cx, cy);
	context.rotate((state.rotation * Math.PI) / 180);
	context.translate(-cx, -cy);

	state.rotation += state.rotationVelocity * delta;
	for (let shape of state.shapes) {
		shape.draw(context);
	}

	context.restore();
}

function getRandomNumb(min: number, max: number): number {
	return min + Math.floor(Math.random() * (max - min) * 10000) / 10000;
}

function getRandomInt(min: number, max: number): number {
	return min + Math.floor(Math.random() * (max - min));
}

function getRandomElement<T>(arr: T[]): T {
	let randomIndex = getRandomInt(0, arr.length);
	return arr[randomIndex];
}
