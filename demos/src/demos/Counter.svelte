<script lang="ts">
	let count: number = 0;
	const increment = () => {
		count += 1;
	};
</script>

<main>
	<button on:click={increment}>
		Clicked {count} times
	</button>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
	}
</style>
