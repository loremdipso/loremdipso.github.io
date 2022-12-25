import Counter from "./demos/Counter.svelte";

const app = new Counter({
	target: document.getElementById("counter"),
});

export default app;
