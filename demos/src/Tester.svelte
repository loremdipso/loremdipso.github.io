<script lang="ts">
	import { demos } from "../demos";

	const QUERY_PARAM = "demo";
	const keys = Object.keys(demos);

	let current_url = "";
	let current_key = "";

	let unique = performance.now();
	function restart() {
		unique = performance.now();
	}

	(() => {
		const url = new URL(window.location.toString());
		const temp = url.searchParams.get(QUERY_PARAM);
		if (temp) {
			open_demo(temp);
		}
	})();

	type DemoKey = keyof typeof demos;
	function open_demo(key: string) {
		restart();

		const demo_url = demos[key as DemoKey];

		current_key = key;
		current_url = demo_url;

		const url = new URL(window.location.toString());
		url.searchParams.set(QUERY_PARAM, key);
		window.history.pushState({}, "", url);
	}
</script>

<main>
	<div class="selection">
		{#each keys as key}
			<button class="row" on:click={() => open_demo(key)}>
				{key}
			</button>
		{/each}
	</div>

	{#if current_url}
		<div class="sandbox">
			{#key unique}
				<div id={current_key} />
				<script type="module" src="{current_url}?t={unique}"></script>
			{/key}

			<button class="hover-button" on:click={() => restart()}>
				Restart
			</button>
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}

	.selection {
		background-color: black;
		overflow: auto;
		min-height: 30%;
	}

	.row {
		width: 100%;
	}

	.sandbox {
		min-height: 70%;
		max-height: 70%;
		overflow: auto;
	}

	.hover-button {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
