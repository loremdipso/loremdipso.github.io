import "./app.css";
import Tester from "./Tester.svelte";

const app = new Tester({
	target: document.getElementById("tester"),
});

export default app;
