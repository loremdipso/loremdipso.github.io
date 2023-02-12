<script lang="ts">
	export let fullscreen = false;
</script>

<main class:fullscreen>
	<slot />

	<button on:click={() => (fullscreen = !fullscreen)}>Fullscreen</button>
</main>

<style lang="scss">
	main {
		position: relative;

		&.fullscreen {
			position: absolute;
			width: 100vw;
			height: 100vh;
			left: 0;
			top: 0;
			z-index: 1000;
		}
	}

	button {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
