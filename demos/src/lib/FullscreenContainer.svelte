<script lang="ts">
	export let fullscreen = false;

	$: {
		// NOTE: this is hacky and I'm sorry :(
		// But not that sorry >:)
		if (fullscreen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}
</script>

<main class:fullscreen>
	<slot />

	<button on:click={() => (fullscreen = !fullscreen)}>Fullscreen</button>
</main>

<style lang="scss">
	main {
		position: relative;

		&.fullscreen {
			position: fixed;
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
